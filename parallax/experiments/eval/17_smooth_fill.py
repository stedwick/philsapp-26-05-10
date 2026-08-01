"""Follow-up to 16: TELEA inpainting leaves directional streak artifacts in
the wide fill rings (visible as dark horizontal bars behind the skyline once
the layers separate under scroll). The fill zones live in featureless haze,
so the right content is a smooth harmonic gradient.

Fix: same geometry as 16, but after TELEA init, strongly blur the filled
zone and feather-blend it back (deep interior = blurred, boundary = TELEA).
TELEA first removes front-layer content from the source image (blurring the
raw image would smear dark foreground hills INTO the zone); the blur then
kills TELEA's streaks.

Run from parallax/experiments/parallax-maker:
  .venv/bin/python ../eval/17_smooth_fill.py
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
BLUR_SIGMA = 25
FEATHER_PX = 18

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
            front_union = (
                np.logical_or.reduce(fronts)
                if fronts
                else np.zeros((H, W), bool)
            )
            fill_zone = (
                dilate(masks[name], TRAVEL) & dilate(front_union, 8) & ~dilate(masks[name], 2)
            )
            if fill_zone.any():
                zone_u8 = (fill_zone * 255).astype(np.uint8)
                telea = cv2.inpaint(img, zone_u8, 15, cv2.INPAINT_TELEA)
                blurred = cv2.GaussianBlur(telea, (0, 0), BLUR_SIGMA)
                dist = cv2.distanceTransform(zone_u8, cv2.DIST_L2, 5)
                w = np.clip(dist / FEATHER_PX, 0.0, 1.0)[:, :, None]
                mixed = telea.astype(np.float32) * (1 - w) + blurred.astype(np.float32) * w
                rgba[:, :, :3][fill_zone] = mixed.astype(np.uint8)[fill_zone]
                Image.fromarray(rgba, "RGBA").save(p)
                print(f"{name}: smooth-filled {fill_zone.mean():.2%} of canvas")
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
