"""Extract semi-transparent mist layers and a separate clouds layer from the
dawn storyboard.

Mist: dark-channel-prior dehaze -> haze field = clip(I - J, 0). Split into
three depth bands, tinted with the local haze color, feathered vertically.

Clouds: high-pass of the sky region (clouds are wisps against a smooth sky
gradient) -> soft alpha cutout with original cloud pixels.

Outputs to parallax/experiments/eval/stack/:
  mist-a-behind-city.png, mist-b-valley.png, mist-c-near-hills.png,
  mist-debug.png, layer-01-clouds.png, clouds-debug.png

Run from parallax/experiments/parallax-maker:
  .venv/bin/python ../eval/07_mist_clouds.py
"""
from pathlib import Path

import cv2
import numpy as np
from PIL import Image

ROOT = Path("/Users/philip/src/philsapp-parallax-hero/parallax")
IMG_PATH = ROOT / "storyboard/mt-hood-portland-dawn.png"
STACK = ROOT / "experiments/eval/stack"

img = np.asarray(Image.open(IMG_PATH).convert("RGB")).astype(np.float32) / 255.0
H, W = img.shape[:2]


# ---- dark-channel-prior dehaze ------------------------------------------------
def dehaze(I, win=15, omega=0.85):
    dark = I.min(axis=2)
    dark = cv2.erode(dark, np.ones((win, win), np.uint8))
    # atmospheric light: brightest pixel among the haziest 0.1%
    n = max(1, int(0.001 * H * W))
    flat = dark.ravel()
    idx = np.argpartition(flat, -n)[-n:]
    A = I.reshape(-1, 3)[idx].max(axis=0)
    t = 1.0 - omega * dark / A.max()
    t = cv2.GaussianBlur(t, (0, 0), win / 2)
    t = np.clip(t, 0.25, 1.0)[:, :, None]
    J = (I - A) / t + A
    return np.clip(J, 0, 1), A


J, A = dehaze(img)
haze = np.clip(img - J, 0, 1).mean(axis=2)  # >0 where haze brightens the scene
haze = cv2.GaussianBlur(haze, (0, 0), 4)
print(f"haze field: max {haze.max():.3f}, mean {haze.mean():.3f}, airlight {A}")

# ---- mist bands ---------------------------------------------------------------
# (name, y_top, y_bottom, alpha_scale) — bands tuned to the storyboard layout
MIST_BANDS = [
    ("mist-a-behind-city", 520, 660, 2.2),
    ("mist-b-valley", 660, 800, 2.6),
    ("mist-c-near-hills", 790, 930, 2.6),
]
FEATHER_Y = 70  # vertical fade at band edges

yy = np.arange(H, dtype=np.float32)[:, None]
debug = np.zeros((H, W, 3), np.float32)
colors = [(1.0, 0.6, 0.6), (0.6, 1.0, 0.6), (0.6, 0.6, 1.0)]

for (name, y0, y1, scale), dbg_color in zip(MIST_BANDS, colors):
    band = np.clip((yy - y0) / FEATHER_Y, 0, 1) * np.clip((y1 - yy) / FEATHER_Y, 0, 1)
    alpha = np.clip(haze * scale, 0, 0.75) * band
    alpha = cv2.GaussianBlur(alpha, (0, 0), 6)

    # local haze color: heavily blurred image color weighted by haze
    w = (haze * band)[:, :, None] + 1e-6
    den = cv2.GaussianBlur(w, (0, 0), 60).reshape(H, W, 1) + 1e-9
    tint = cv2.GaussianBlur(img * w, (0, 0), 60) / den
    # push the tint toward the airlight color (haze = airlight scattered)
    tint = 0.5 * tint + 0.5 * A

    rgba = np.dstack([tint, alpha[:, :, None]])
    rgba8 = (rgba * 255).astype(np.uint8)
    Image.fromarray(rgba8, "RGBA").save(STACK / f"{name}.png")
    print(f"{name}: alpha mean {alpha.mean():.3f}, max {alpha.max():.2f}")
    debug += dbg_color * (alpha[:, :, None] > 0.05)

Image.fromarray((np.clip(debug, 0, 1) * 255).astype(np.uint8)).save(STACK / "mist-debug.png")

# ---- clouds layer ---------------------------------------------------------------
# sky region only (above the mountain/hills); clouds = high-pass detail
SKY_Y = 470
sky = img[:SKY_Y].copy()
lum = sky.mean(axis=2)
smooth = cv2.GaussianBlur(lum, (0, 0), 30)
detail = np.abs(lum - smooth)
cloud_alpha = np.clip((detail - 0.015) * 14, 0, 1)
# suppress the mountain's snow texture leaking in from the bottom of the band
_mtn = np.asarray(
    Image.open(ROOT / "experiments/eval/masks/02-mountain.png").convert("L")
) > 127
_mtn = cv2.dilate(_mtn.astype(np.uint8), np.ones((13, 13), np.uint8)) > 0
cloud_alpha[_mtn[:SKY_Y]] = 0
cloud_alpha = cv2.GaussianBlur(cloud_alpha, (0, 0), 3)
cloud_rgb = (sky * 255).astype(np.uint8)
clouds = np.dstack([cloud_rgb, (cloud_alpha * 255).astype(np.uint8)])
full = np.zeros((H, W, 4), np.uint8)
full[:SKY_Y] = clouds
Image.fromarray(full, "RGBA").save(STACK / "layer-01-clouds.png")
print(f"layer-01-clouds: alpha coverage {(cloud_alpha > 0.1).mean():.2%}")

dbg = np.zeros((H, W, 3), np.uint8)
dbg[:SKY_Y] = cloud_rgb
dbg[:SKY_Y, :, 0] = np.maximum(dbg[:SKY_Y, :, 0], (cloud_alpha * 255).astype(np.uint8))
Image.fromarray(dbg).save(STACK / "clouds-debug.png")
print("done ->", STACK)
