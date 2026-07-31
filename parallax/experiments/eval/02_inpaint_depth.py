"""Eval: two representative occlusion-fill tests with parallax-maker's default
inpainting model (SDXL-1.0-inpainting), plus the MiDaS depth map.

Test A: remove the Portland skyline (box mask) -> can SDXL hallucinate the
        misty hills that should be behind it?
Test B: remove the left framing pines (SAM mask) -> forest/hill fill behind.

Outputs to parallax/experiments/eval/inpaint/.

Run from parallax/experiments/parallax-maker:
  .venv/bin/python ../eval/02_inpaint_depth.py
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "parallax-maker"))

from parallax_maker.inpainting import InpaintingModel  # noqa: E402
from parallax_maker.depth import DepthEstimationModel  # noqa: E402
from parallax_maker.segmentation import generate_depth_map  # noqa: E402

ROOT = Path("/Users/philip/src/philsapp-parallax-hero/parallax")
IMG_PATH = ROOT / "storyboard/mt-hood-portland-dawn.png"
OUT = ROOT / "experiments/eval/inpaint"
OUT.mkdir(parents=True, exist_ok=True)

PROMPT = (
    "flat vector illustration, layered forested hills receding into dawn mist, "
    "soft atmospheric haze, blue and lavender tones, minimalist landscape"
)
NEGATIVE = "buildings, city, skyline, skyscrapers, text, watermark, photo, photorealistic, busy details"

img = Image.open(IMG_PATH).convert("RGB")
W, H = img.size

# --- Test A: skyline box mask ------------------------------------------------
mask_a = Image.new("L", (W, H), 0)
a = np.array(mask_a)
a[500:680, 550:1700] = 255  # skyline band incl. bridge on the right
mask_a = Image.fromarray(a)
mask_a.save(OUT / "mask-a-city.png")

# --- Test B: left pines SAM mask from the earlier pass ------------------------
mask_b = Image.open(ROOT / "experiments/eval/masks/10-pines-left.png").convert("L")

print("loading inpainting model (SDXL)...")
inp = InpaintingModel()  # diffusers/stable-diffusion-xl-1.0-inpainting-0.1
inp.load_model()

print("inpaint A: behind the skyline...")
res_a = inp.inpaint(PROMPT, NEGATIVE, img, mask_a, crop=True, seed=42)
res_a.save(OUT / "inpaint-a-city.png")

print("inpaint B: behind the left pines...")
res_b = inp.inpaint(PROMPT, NEGATIVE, img, mask_b, crop=True, seed=42)
res_b.save(OUT / "inpaint-b-pines.png")

# --- Depth map ----------------------------------------------------------------
print("depth map (MiDaS dpt_large)...")
dep = DepthEstimationModel()
dep.load_model()
dm = generate_depth_map(np.array(img), dep)
Image.fromarray(dm).save(OUT / "depth-map.png")

print("done ->", OUT)
