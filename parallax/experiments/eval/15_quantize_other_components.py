"""Offline 4bit quantization of the OTHER fill-model components (VAE, T5,
CLIP) so the whole local model dir is pre-quantized — mflux's stored_q
load path requires ALL components pre-quantized, otherwise it applies
nn.quantize to empty modules and then loads bf16 weights into them
(the "weight matrix should be uint32" crash).

Same method as 14_quantize_fill_transformer.py: lazy per-tensor load,
mflux WeightMapper key mapping, mx.quantize for Linear weights, save in
mflux-save format (flat keys + quantization_level metadata).

Sources: AlekseyCalvin snapshot (bf16, model-agnostic FLUX components).
Outputs replace the symlinks in eval/flux-model/{vae,text_encoder,text_encoder_2}.

Run from parallax/experiments/parallax-maker:
  .venv/bin/python ../eval/15_quantize_other_components.py
"""
import json
import sys
from pathlib import Path

import mlx.core as mx
import torch
from mlx import nn
from mlx.utils import tree_flatten
from safetensors import safe_open

from mflux.models.common.weights.mapping.weight_mapper import WeightMapper
from mflux.models.flux.model.flux_text_encoder.clip_encoder.clip_encoder import CLIPEncoder
from mflux.models.flux.model.flux_text_encoder.t5_encoder.t5_encoder import T5Encoder
from mflux.models.flux.model.flux_vae.vae import VAE
from mflux.models.flux.weights.flux_weight_mapping import FluxWeightMapping
from mflux.utils.version_util import VersionUtil

ROOT = Path("/Users/philip/src/philsapp-parallax-hero/parallax")
AC = Path.home() / ".cache/huggingface/hub"
AC_SNAP = next((AC / "models--AlekseyCalvin--FluxFillDev_fp8_Diffusers").glob("snapshots/*/"))
MODEL_DIR = ROOT / "experiments/eval/flux-model"

BITS = 4
GROUP_SIZE = 64
MAX_SHARD = 2 << 30

COMPONENTS = [
    # (name, hf_subdir, module class, mapping getter, num_blocks, num_layers)
    ("vae", "vae", VAE, FluxWeightMapping.get_vae_mapping, None, None),
    ("t5_encoder", "text_encoder_2", T5Encoder, FluxWeightMapping.get_t5_encoder_mapping, 24, None),
    ("clip_encoder", "text_encoder", CLIPEncoder, FluxWeightMapping.get_clip_encoder_mapping, None, None),
]


def quantize_component(name, subdir, cls, mapping_getter, num_blocks, num_layers):
    print(f"=== {name} -> {subdir}", flush=True)
    ref_model = cls()
    nn.quantize(ref_model, class_predicate=lambda p, m: hasattr(m, "to_quantized"), bits=BITS)
    ref = dict(tree_flatten(ref_model.parameters()))
    del ref_model
    mx.clear_cache()
    print(f"reference: {len(ref)} arrays", flush=True)

    mapping = mapping_getter()
    flat_mapping = WeightMapper._build_flat_mapping(
        mapping, num_blocks or 0, num_layers or 0
    )

    flat_out = {}
    for shard in sorted((AC_SNAP / subdir).glob("*.safetensors")):
        print(f"--- {shard.name}", flush=True)
        with safe_open(str(shard), framework="pt") as f:
            for k in f.keys():
                targets = flat_mapping.get(k)
                if not targets:
                    continue
                v = f.get_tensor(k)
                w = mx.array(v.to(torch.float32).numpy())
                del v
                for mlx_path, transform in targets:
                    wt = transform(w) if transform else w
                    if mlx_path.endswith(".weight") and (mlx_path[:-7] + ".scales") in ref:
                        qw, scales, biases = mx.quantize(wt, group_size=GROUP_SIZE, bits=BITS)
                        mx.eval(qw, scales, biases)
                        flat_out[mlx_path] = qw
                        flat_out[mlx_path[:-7] + ".scales"] = scales
                        flat_out[mlx_path[:-7] + ".biases"] = biases
                    else:
                        out_w = wt.astype(ref[mlx_path].dtype) if mlx_path in ref else wt
                        mx.eval(out_w)
                        flat_out[mlx_path] = out_w
                    del wt
                del w
        mx.clear_cache()
        print(f"    accumulated {len(flat_out)}", flush=True)

    missing = set(ref) - set(flat_out)
    extra = set(flat_out) - set(ref)
    print(f"missing: {len(missing)}; extra: {len(extra)}")
    if missing:
        print("  e.g.", sorted(missing)[:8])
        sys.exit(f"FATAL: {name} incomplete")
    for k in extra:
        del flat_out[k]
    bad = [k for k in ref if flat_out[k].shape != ref[k].shape]
    if bad:
        print("  SHAPE MISMATCH", [(k, flat_out[k].shape, ref[k].shape) for k in bad[:8]])
        sys.exit(f"FATAL: {name} shape mismatches")

    out_dir = MODEL_DIR / subdir
    if out_dir.is_symlink():
        out_dir.unlink()
    out_dir.mkdir(parents=True, exist_ok=True)
    # keep the component config.json from the source
    cfg = AC_SNAP / subdir / "config.json"
    if cfg.exists():
        (out_dir / "config.json").write_bytes(cfg.read_bytes())

    meta = {"quantization_level": str(BITS), "mflux_version": VersionUtil.get_mflux_version()}
    shard_list, cur, cur_size = [], {}, 0
    for k, w in sorted(flat_out.items()):
        mx.eval(w)
        sz = w.nbytes
        if cur and cur_size + sz > MAX_SHARD:
            shard_list.append(cur)
            cur, cur_size = {}, 0
        cur[k] = w
        cur_size += sz
    if cur:
        shard_list.append(cur)

    weight_map = {}
    for i, shard in enumerate(shard_list):
        fname = f"{i}.safetensors"
        mx.save_safetensors(str(out_dir / fname), shard, meta)
        for k in shard:
            weight_map[k] = fname
        print(f"wrote {fname} ({sum(w.nbytes for w in shard.values())/1e9:.2f} GB)", flush=True)
    with open(out_dir / "model.safetensors.index.json", "w") as f:
        json.dump({"metadata": meta, "weight_map": weight_map}, f, indent=2)
    del flat_out
    mx.clear_cache()


def main():
    for comp in COMPONENTS:
        quantize_component(*comp)
    print("done")


if __name__ == "__main__":
    main()
