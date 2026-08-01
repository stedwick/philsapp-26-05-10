"""Eval round 3: assemble the full layer stack from the SAM masks, fill
occlusions back-to-front with SDXL inpainting (parallax-maker's default),
and render scroll-simulation frames to test LARGE parallax travel.

Method (per layer, back to front):
  front_union = union of all masks in front of this layer (dilated 8px)
  fill_zone   = (dilate(mask, TRAVEL) intersect front_union) - mask
  filled      = SDXL-inpaint(original, fill_zone)   # hallucinate hidden strip
  layer alpha = mask ∪ fill_zone (feathered at the outer fill boundary)

Outputs to parallax/experiments/eval/stack/:
  layer-*.png               RGBA layers
  composite-s0.png          composite at scroll 0
  composite-s600.png        composite at 600px scroll (large travel)

Run from parallax/experiments/parallax-maker:
  .venv/bin/python ../eval/04_build_stack.py
"""
import sys
from pathlib import Path

import cv2
import numpy as np
from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "parallax-maker"))

from parallax_maker.inpainting import InpaintingModel  # noqa: E402

ROOT = Path("/Users/philip/src/philsapp-parallax-hero/parallax")
IMG_PATH = ROOT / "storyboard/mt-hood-portland-dawn.png"
MASKS = ROOT / "experiments/eval/masks"
OUT = ROOT / "experiments/eval/stack"
OUT.mkdir(parents=True, exist_ok=True)

TRAVEL = 220  # px of reveal margin each back layer gets behind its fronts
FEATHER = 4

# back -> front; (name, parallax offset for the scroll sim)
LAYERS = [
    ("00-sky", 0.95),
    ("02-mountain", 0.90),
    ("03-hills-far", 0.85),
    ("04-city", 0.80),
    ("05-hill-front-city", 0.70),
    ("07-hill-2", 0.60),
    ("08-hill-3", 0.50),
    ("09-forest-close", 0.40),
    ("10-pines", 0.20),  # left+right merged below
    ("11-ground", 0.0),
]

PROMPT = (
    "flat vector illustration, layered forested hills receding into dawn mist, "
    "soft atmospheric haze, blue and lavender tones, minimalist landscape"
)
NEGATIVE = "text, watermark, photo, photorealistic, busy details, artifacts"


def load_mask(name):
    return np.asarray(Image.open(MASKS / f"{name}.png").convert("L")) > 127


def dilate(m, px):
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * px + 1, 2 * px + 1))
    return cv2.dilate(m.astype(np.uint8), k) > 0


def feather_alpha(m, px):
    a = (m.astype(np.uint8) * 255).astype(np.float32)
    a = cv2.GaussianBlur(a, (0, 0), px)
    return np.clip(a, 0, 255).astype(np.uint8)


def main():
    img = Image.open(IMG_PATH).convert("RGB")
    W, H = img.size

    masks = {}
    for name, _ in LAYERS:
        if name == "10-pines":
            masks[name] = load_mask("10-pines-left") | load_mask("10-pines-right")
        else:
            masks[name] = load_mask(name)

    # pixel ownership: front-most mask wins (only affects the alpha edge
    # cleanup; the composite at scroll 0 is identical regardless)
    names = [n for n, _ in LAYERS]

    print("loading SDXL inpainting model...")
    inp = InpaintingModel()
    inp.load_model()

    layer_rgba = {}
    for i, name in enumerate(names):
        front = [masks[n] for n in names[i + 1 :]]
        if front:
            front_union = np.logical_or.reduce(front)
        else:
            front_union = np.zeros((H, W), bool)
        front_union = dilate(front_union, 8)

        fill_zone = dilate(masks[name], TRAVEL) & front_union & ~dilate(masks[name], 2)
        print(f"--- {name}: fill_zone {fill_zone.mean():.2%} of canvas")

        if fill_zone.any():
            mask_img = Image.fromarray((fill_zone * 255).astype(np.uint8))
            filled = inp.inpaint(PROMPT, NEGATIVE, img, mask_img, crop=True, seed=42)
            filled = filled.convert("RGB").resize((W, H))
            rgb = np.asarray(filled)
        else:
            rgb = np.asarray(img).copy()

        alpha_mask = masks[name] | fill_zone
        alpha = feather_alpha(alpha_mask, FEATHER)
        rgba = np.dstack([rgb, alpha])
        layer_rgba[name] = rgba
        Image.fromarray(rgba, "RGBA").save(OUT / f"layer-{name}.png")
        print(f"    saved layer-{name}.png")

    # ---- scroll simulation ----------------------------------------------------
    offsets = dict(LAYERS)
    base = np.asarray(img)  # canvas backdrop for uncovered pixels
    for scroll in (0, 600):
        comp = np.zeros((H, W, 3), np.float32)
        comp[:] = base  # any pixel no layer claims shows the original
        for name in names:
            rgba = layer_rgba[name].astype(np.float32)
            dy = int(round(scroll * (offsets[name] - 1.0)))  # back layers lag
            shifted = np.zeros_like(rgba)
            if dy <= 0:
                src = rgba[-dy:, :, :] if dy else rgba
                shifted[: H + dy, :, :] = src
            else:
                shifted[dy:, :, :] = rgba[: H - dy, :, :]
            a = shifted[:, :, 3:4] / 255.0
            comp = shifted[:, :, :3] * a + comp * (1 - a)
        Image.fromarray(comp.astype(np.uint8)).save(OUT / f"composite-s{scroll}.png")
        print(f"composite-s{scroll}.png saved")

    print("done ->", OUT)


if __name__ == "__main__":
    main()
