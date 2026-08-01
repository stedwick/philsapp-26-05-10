"""No-inference fill repair: the stack's fill-zone RGB is STALE for the
layers affected by the city recut (it was SDXL-inpainted for the old
mask's geometry, and now shows up as stripey bars behind the new skyline).

Re-inpaint those fill zones classically: cv2.inpaint (Telea) from the
original image. The zones are thin occlusion strips in smooth haze/
gradient territory, where classical inpainting is seamless.

Only touches layers behind/including the city: 00-sky, 02-mountain,
03-hills-far, 04-city. Other layers' geometry is unchanged and their
SDXL fills looked good.

Run from parallax/experiments/parallax-maker:
  .venv/bin/python ../eval/16_cv_inpaint_fills.py
"""
from pathlib import Path

import cv2
import numpy as np
from PIL import Image

ROOT = Path("/Users/philip/src/philsapp-parallax-hero/parallax")
IMG_PATH = ROOT / "storyboard/mt-hood-portland-dawn.png"
MASKS = ROOT / "experiments/eval/masks"
STACK = ROOT / "experiments/eval/stack"

TRAVEL = 220

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

BANDS = [
    (480, 0),
    (560, 2),
    (645, 3),
    (700, 4),
    (800, 5),
    (880, 6),
    (1000, 7),
    (1152, 9),
]

REPAIR = {"00-sky", "02-mountain", "03-hills-far", "04-city"}


def load_mask(name):
    return np.asarray(Image.open(MASKS / f"{name}.png").convert("L")) > 127


def dilate(m, px):
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * px + 1, 2 * px + 1))
    return cv2.dilate(m.astype(np.uint8), k) > 0


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
    yy = np.arange(H)[:, None]
    for y_max, li in BANDS:
        band = unclaimed & (yy < y_max)
        masks[names[li]] |= band
        unclaimed &= ~(yy < y_max)

    offsets = dict(LAYERS)
    layer_rgba = {}
    for i, name in enumerate(names):
        p = STACK / f"layer-{name}.png"
        rgba = np.asarray(Image.open(p).convert("RGBA")).copy()
        if name in REPAIR:
            fronts = [masks[n] for n in names[i + 1 :]]
            front_union = np.logical_or.reduce(fronts) if fronts else np.zeros((H, W), bool)
            fill_zone = (
                dilate(masks[name], TRAVEL) & dilate(front_union, 8) & ~dilate(masks[name], 2)
            )
            if fill_zone.any():
                inpainted = cv2.inpaint(
                    img, (fill_zone * 255).astype(np.uint8), 15, cv2.INPAINT_TELEA
                )
                rgba[:, :, :3][fill_zone] = inpainted[fill_zone]
                Image.fromarray(rgba, "RGBA").save(p)
                print(f"{name}: cv-inpainted {fill_zone.mean():.2%} of canvas")
        layer_rgba[name] = rgba

    # re-render scroll sims
    for scroll in (0, 600):
        comp = np.zeros((H, W, 3), np.float32)
        comp[:] = img
        for name in names:
            lr = layer_rgba[name].astype(np.float32)
            dy = int(round(scroll * (offsets[name] - 1.0)))
            shifted = np.zeros_like(lr)
            if dy <= 0:
                shifted[: H + dy, :, :] = lr[-dy:, :, :] if dy else lr
            else:
                shifted[dy:, :, :] = lr[: H - dy, :, :]
            a = shifted[:, :, 3:4] / 255.0
            comp = shifted[:, :, :3] * a + comp * (1 - a)
        Image.fromarray(comp.astype(np.uint8)).save(STACK / f"composite-s{scroll}.png")
        print(f"composite-s{scroll}.png re-rendered")


if __name__ == "__main__":
    main()
