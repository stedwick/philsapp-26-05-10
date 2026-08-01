"""Offline converter: real FLUX.1-Fill-dev transformer (diffusers layout,
bf16, 23.8GB) -> mflux 4bit format, WITHOUT ever holding the full bf16
model in RAM (impossible on this 24GB M3).

Per diffusers shard: torch load -> map diffusers keys to mflux keys via
mflux's own WeightMapper -> quantize each Linear weight with mx.quantize
(group_size 64, bits 4, matching nn.quantize defaults) -> save flat-key
safetensors shards with mflux metadata (quantization_level=4).

Output layout mirrors mflux-save (ModelSaver._save_weights):
  <out>/transformer/0.safetensors, 1.safetensors, ...
  <out>/transformer/model.safetensors.index.json

Run from parallax/experiments/parallax-maker:
  .venv/bin/python ../eval/14_quantize_fill_transformer.py
"""
import json
import sys
from pathlib import Path

import mlx.core as mx
import torch
from mlx import nn
from mlx.utils import tree_flatten
from safetensors.torch import load_file

from mflux.models.common.config.model_config import ModelConfig
from mflux.models.common.weights.mapping.weight_mapper import WeightMapper
from mflux.models.flux.model.flux_transformer.transformer import Transformer
from mflux.models.flux.weights.flux_weight_mapping import FluxWeightMapping
from mflux.utils.version_util import VersionUtil

ROOT = Path("/Users/philip/src/philsapp-parallax-hero/parallax")
SRC = ROOT / "experiments/parallax-maker/.hf-fill-bf16/transformer"
OUT = ROOT / "experiments/eval/flux-model/transformer"
OUT.mkdir(parents=True, exist_ok=True)

BITS = 4
GROUP_SIZE = 64
NUM_BLOCKS = 19
NUM_LAYERS = 38
MAX_SHARD = 2 << 30  # 2GB, same as ModelSaver


def main():
    mc = ModelConfig.dev_fill()

    print("building reference structure (empty quantized Transformer)...", flush=True)
    ref_model = Transformer(
        model_config=mc,
        num_transformer_blocks=NUM_BLOCKS,
        num_single_transformer_blocks=NUM_LAYERS,
    )
    nn.quantize(
        ref_model,
        class_predicate=lambda p, m: hasattr(m, "to_quantized"),
        bits=BITS,
    )
    ref = dict(tree_flatten(ref_model.parameters()))
    del ref_model
    print(f"reference: {len(ref)} arrays")

    mapping = FluxWeightMapping.get_transformer_mapping()
    flat_mapping = WeightMapper._build_flat_mapping(mapping, NUM_BLOCKS, NUM_LAYERS)
    flat_out = {}

    shards = sorted(SRC.glob("*.safetensors"))
    print(f"source shards: {[s.name for s in shards]}", flush=True)
    from safetensors import safe_open

    for si, shard in enumerate(shards):
        print(f"--- shard {si}: {shard.name}", flush=True)
        with safe_open(str(shard), framework="pt") as f:
            for k in f.keys():
                targets = flat_mapping.get(k)
                if not targets:
                    continue
                v = f.get_tensor(k)  # one tensor at a time (RAM-friendly)
                w = mx.array(v.to(torch.float32).numpy())
                del v
                for mlx_path, _ in targets:
                    if mlx_path.endswith(".weight") and (mlx_path[:-7] + ".scales") in ref:
                        qw, scales, biases = mx.quantize(w, group_size=GROUP_SIZE, bits=BITS)
                        mx.eval(qw, scales, biases)
                        flat_out[mlx_path] = qw
                        flat_out[mlx_path[:-7] + ".scales"] = scales
                        flat_out[mlx_path[:-7] + ".biases"] = biases
                    else:
                        out_w = w.astype(ref[mlx_path].dtype) if mlx_path in ref else w
                        mx.eval(out_w)
                        flat_out[mlx_path] = out_w
                del w
        mx.clear_cache()
        print(f"    accumulated {len(flat_out)} arrays", flush=True)

    missing = set(ref) - set(flat_out)
    extra = set(flat_out) - set(ref)
    print(f"missing vs reference: {len(missing)}; extra: {len(extra)}")
    if missing:
        print("  e.g.", sorted(missing)[:8])
        sys.exit("FATAL: produced weights do not cover the model structure")
    if extra:
        print("  dropping extras:", sorted(extra)[:8])
        for k in extra:
            del flat_out[k]

    # shape check against reference
    bad = [(k, flat_out[k].shape, ref[k].shape) for k in ref if flat_out[k].shape != ref[k].shape]
    if bad:
        for k, a, b in bad[:8]:
            print("  SHAPE MISMATCH", k, a, b)
        sys.exit("FATAL: shape mismatches")

    meta = {
        "quantization_level": str(BITS),
        "mflux_version": VersionUtil.get_mflux_version(),
    }
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
        name = f"{i}.safetensors"
        mx.save_safetensors(str(OUT / name), shard, meta)
        for k in shard:
            weight_map[k] = name
        print(f"wrote {name} ({sum(w.nbytes for w in shard.values()) / 1e9:.2f} GB)", flush=True)
    with open(OUT / "model.safetensors.index.json", "w") as f:
        json.dump({"metadata": meta, "weight_map": weight_map}, f, indent=2)
    # transformer config.json (mflux constructs from ModelConfig, but keep for completeness)
    print("done ->", OUT)


if __name__ == "__main__":
    main()
