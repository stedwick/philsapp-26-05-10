"""Post-process the eval stack: claim every unassigned pixel so the browser
prototype has no holes (the SAM masks leave gaps — most importantly parts of
the city skyline).

Assignment: pixels not covered by any layer mask are given to a layer by
y-band (tuned to the storyboard layout); RGB comes from the original image.
Also re-renders the scroll-sim composites (no SDXL needed).

Run from parallax/experiments/parallax-maker:
  .venv/bin/python ../eval/06_patch_stack.py
"""
import sys
from pathlib import Path

import cv2
import numpy as np
from PIL import Image

ROOT = Path("/Users/philip/src/philsapp-parallax-hero/parallax")
IMG_PATH = ROOT / "storyboard/mt-hood-portland-dawn.png"
MASKS = ROOT / "experiments/eval/masks"
STACK = ROOT / "experiments/eval/stack"

# back -> front with offsets (same as 04_build_stack.py)
LAYERS = [
    ("00-sky", 0.95),
    ("02-mountain", 0.90),
    ("03-hills-far", 0.85),
    ("04-city", 0.80),
    ("05-hill-front-city", 0.70),
    ("07-hill-2", 0.60),
    ("08-hill-3", 0.50),
    ("09-forest-close", 0.40),
    ("10-pines", 0.20),
    ("11-ground", 0.0),
]

# y-band fallback for unclaimed pixels: (y_max_exclusive, layer index).
# Tuned to the 2048x1152 storyboard: skyline ~500-640, valley ~660-790.
BANDS = [
    (480, 0),   # sky
    (560, 2),   # far-hills band
    (645, 3),   # city band
    (700, 4),   # hill in front of city
    (800, 5),   # valley / hill-2
    (880, 6),   # hill-3
    (1000, 7),  # close forest
    (1152, 9),  # ground
]


def load_mask(name):
    return np.asarray(Image.open(MASKS / f"{name}.png").convert("L")) > 127


def feather_alpha(m, px):
    a = (m.astype(np.uint8) * 255).astype(np.float32)
    a = cv2.GaussianBlur(a, (0, 0), px)
    return np.clip(a, 0, 255).astype(np.uint8)


def dilate(m, px):
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * px + 1, 2 * px + 1))
    return cv2.dilate(m.astype(np.uint8), k) > 0


TRAVEL = 220  # must match 04_build_stack.py


def main():
    img = np.asarray(Image.open(IMG_PATH).convert("RGB"))
    H, W = img.shape[:2]
    names = [n for n, _ in LAYERS]

    masks = {}
    for name in names:
        if name == "10-pines":
            masks[name] = load_mask("10-pines-left") | load_mask("10-pines-right")
        else:
            masks[name] = load_mask(name)

    claimed = np.zeros((H, W), bool)
    for n in names:
        claimed |= masks[n]

    unclaimed = ~claimed
    print(f"unclaimed pixels: {unclaimed.mean():.2%}")
    yy = np.arange(H)[:, None]
    for y_max, li in BANDS:
        band = unclaimed & (yy < y_max)
        masks[names[li]] |= band
        unclaimed &= ~(yy < y_max)

    # ownership: each visible pixel belongs to the FRONT-most mask claiming
    # it (kills ghost duplicates under travel). Fill zones (occlusion margin
    # behind fronts, from 04) are re-derived geometrically and kept — their
    # inpainted RGB is still in the current PNGs (alpha was zeroed, RGB kept).
    for i, name in enumerate(names):
        fronts = [masks[n] for n in names[i + 1 :]]
        front_union = np.logical_or.reduce(fronts) if fronts else np.zeros((H, W), bool)

        owned = masks[name] & ~dilate(front_union, 2)
        fill_zone = dilate(masks[name], TRAVEL) & dilate(front_union, 8) & ~dilate(masks[name], 2)

        p = STACK / f"layer-{name}.png"
        rgba = np.asarray(Image.open(p).convert("RGBA")).copy()
        rgba[:, :, :3][owned] = img[owned]  # original pixels where visible
        rgba[:, :, 3] = feather_alpha(owned | fill_zone, 4)
        Image.fromarray(rgba, "RGBA").save(p)
        print(f"patched layer-{name}.png (fill {fill_zone.mean():.2%})")

    # re-render scroll sims
    offsets = dict(LAYERS)
    layer_rgba = {n: np.asarray(Image.open(STACK / f"layer-{n}.png").convert("RGBA")) for n in names}
    for scroll in (0, 600):
        comp = np.zeros((H, W, 3), np.float32)
        comp[:] = img  # backdrop (should be fully covered now)
        for name in names:
            rgba = layer_rgba[name].astype(np.float32)
            dy = int(round(scroll * (offsets[name] - 1.0)))
            shifted = np.zeros_like(rgba)
            if dy <= 0:
                shifted[: H + dy, :, :] = rgba[-dy:, :, :] if dy else rgba
            else:
                shifted[dy:, :, :] = rgba[: H - dy, :, :]
            a = shifted[:, :, 3:4] / 255.0
            comp = shifted[:, :, :3] * a + comp * (1 - a)
        Image.fromarray(comp.astype(np.uint8)).save(STACK / f"composite-s{scroll}.png")
        print(f"composite-s{scroll}.png re-rendered")


if __name__ == "__main__":
    main()
