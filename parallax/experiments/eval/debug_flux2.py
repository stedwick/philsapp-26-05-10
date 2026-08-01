"""Debug 2: inspect quantized transformer weights for NaN/garbage.

Run from parallax/experiments/parallax-maker:
  .venv/bin/python ../eval/debug_flux2.py
"""
import mlx.core as mx
from mlx.utils import tree_flatten

from mflux.models.flux.variants.fill.flux_fill import Flux1Fill

MODEL = "AlekseyCalvin/FluxFillDev_fp8_Diffusers"

print("loading model (quantize=4)...", flush=True)
flux = Flux1Fill(quantize=4, model_path=MODEL)

for name, mod in [("transformer", flux.transformer), ("t5", flux.t5_text_encoder), ("clip", flux.clip_text_encoder)]:
    flat = tree_flatten(mod.parameters())
    n_nan = 0
    worst = 0.0
    n_arrays = 0
    for k, v in flat:
        if v.dtype in (mx.float32, mx.bfloat16, mx.float16) and v.size:
            n_arrays += 1
            mx.eval(v)
            if bool(mx.any(mx.isnan(v))):
                n_nan += 1
            m = float(mx.max(mx.abs(v)))
            worst = max(worst, m)
    print(f"{name}: {n_arrays} float arrays, {n_nan} with NaN, max|w|={worst:.2f}", flush=True)
