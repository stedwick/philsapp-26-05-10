"""Debug: why does Flux1Fill produce black output?

1. VAE roundtrip on a real crop (encode->decode->save)
2. Small fill generation with latent/weight sanity stats

Run from parallax/experiments/parallax-maker:
  .venv/bin/python ../eval/debug_flux.py
"""
import mlx.core as mx
import numpy as np
from PIL import Image

from mflux.models.flux.variants.fill.flux_fill import Flux1Fill

MODEL = "/Users/philip/src/philsapp-parallax-hero/parallax/experiments/eval/flux-model"
IMG = "../eval/flux-tiles/tile-00-sky-0-img.png"
MASK = "../eval/flux-tiles/tile-00-sky-0-mask.png"

print("loading model (quantize=4)...", flush=True)
flux = Flux1Fill(quantize=4, model_path=MODEL)

# ---- 1. VAE roundtrip -------------------------------------------------------
from mflux.utils.image_util import ImageUtil

pil = ImageUtil.load_image(IMG).convert("RGB").resize((1024, 608))
arr = ImageUtil.to_array(pil)
print("input array stats:", float(arr.min()), float(arr.max()), arr.shape, flush=True)
lat = flux.vae.encode(arr)
mx.eval(lat)
print("latent stats:", float(lat.min()), float(lat.max()), bool(mx.any(mx.isnan(lat))), flush=True)
dec = VAEUtil_decode = flux.vae.decode(lat) if hasattr(flux.vae, "decode") else None
if dec is not None:
    mx.eval(dec)
    print("decode stats:", float(dec.min()), float(dec.max()), bool(mx.any(mx.isnan(dec))), flush=True)
    from mflux.models.common.vae.vae_util import VAEUtil
    try:
        img = VAEUtil.decode_to_image(dec) if hasattr(VAEUtil, "decode_to_image") else None
    except Exception as e:
        img = None
        print("decode_to_image failed:", e)
    if img is not None:
        img.save("../eval/flux-tiles/debug-vae-roundtrip.png")
        print("saved debug-vae-roundtrip.png")

# ---- 2. small fill generation ------------------------------------------------
res = flux.generate_image(
    seed=42,
    prompt="flat vector illustration, dawn mist, blue and lavender tones",
    width=512,
    height=320,
    guidance=30.0,
    image_path=IMG,
    masked_image_path=MASK,
    num_inference_steps=4,
)
res.image.save("../eval/flux-tiles/debug-fill-512.png")
a = np.asarray(res.image.convert("RGB"))
print("fill output stats:", a.min(), a.max(), a.mean(), flush=True)
print("done")
