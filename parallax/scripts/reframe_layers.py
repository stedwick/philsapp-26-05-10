"""Reframe AI-generated 3:2 layers onto a shared 2048x1152 canvas.

Bands (ridges, city, forests, pines, clouds): full-stretch resize — silhouette
bands tolerate the mild horizontal stretch, and they must span full width.
Mt. Hood: uniform scale + horizontal center + bottom anchor, scaled so the
peak lands at the same height as in the original dawn artwork (~21% from top).
Sky: gradient rebuilt at full size.
"""
import numpy as np
from PIL import Image
from pathlib import Path

ROOT = Path("/Users/philip/src/philsapp-26-05-10")
GEN = ROOT / "parallax/assets/generated-layers"
OUT = ROOT / "parallax/assets/proto1-final"
OUT.mkdir(parents=True, exist_ok=True)
FW, FH = 2048, 1152
PEAK_TARGET_Y = 245          # peak top, matching the original dawn PNG

BANDS = ["layer-00-clouds", "layer-02-ridge-far", "layer-03-ridge-blue",
         "layer-04-city", "layer-05-mist-hills", "layer-06-forest-mid",
         "layer-07-forest-near", "layer-08-forest-dark", "layer-09-pines"]

def watermark_patch(a):
    H, W = a.shape[:2]
    x1, y0 = int(W * 0.13), int(H * 0.92)
    donor = a[y0:, int(W * 0.15):int(W * 0.28)]
    if donor.shape[1] >= x1:
        a[y0:, :x1] = donor[:, :x1]
    return a

# ---- sky ----------------------------------------------------------------------
src = np.asarray(Image.open(ROOT / "parallax/storyboard/mt-hood-portland-dawn.png")
                 .convert("RGB")).astype(np.float32)
col = src[:620, 1800, :]
ys = np.linspace(0, len(col) - 1, FH)
sky = np.stack([np.interp(ys, np.arange(len(col)), col[:, c]) for c in range(3)], axis=-1)
sky = np.repeat(sky[:, None, :], FW, axis=1).astype(np.uint8)
Image.fromarray(sky).save(OUT / "layer-00-sky.png")
print("layer-00-sky.png")

# ---- bands: full-stretch -------------------------------------------------------
for name in BANDS:
    im = Image.open(GEN / f"{name}.png").convert("RGBA")
    a = watermark_patch(np.asarray(im).copy())
    im = Image.fromarray(a, "RGBA").resize((FW, FH), Image.LANCZOS)
    im.save(OUT / f"{name}.png")
    print(f"{name}.png  (stretched)")

# ---- mt hood: uniform scale, centered, bottom-anchored -------------------------
im = Image.open(GEN / "layer-01-mt-hood.png").convert("RGBA")
a = watermark_patch(np.asarray(im).copy())
im = Image.fromarray(a, "RGBA")
alpha = np.asarray(im)[:, :, 3]
ys_op = np.where(alpha.max(axis=1) > 8)[0]
peak_y = ys_op.min()                 # topmost opaque row = the peak
mountain_h = im.height - peak_y
s = (FH - PEAK_TARGET_Y) / mountain_h
nw, nh = round(im.width * s), round(im.height * s)
im = im.resize((nw, nh), Image.LANCZOS)
canvas = np.zeros((FH, FW, 4), dtype=np.uint8)
x0 = (FW - nw) // 2
xs, xe = max(0, x0), min(FW, x0 + nw)
crop_x0 = xs - x0
place_h = min(nh, FH)
canvas[FH - place_h:, xs:xe] = np.asarray(im)[nh - place_h:, crop_x0:crop_x0 + (xe - xs)]
Image.fromarray(canvas, "RGBA").save(OUT / "layer-01-mt-hood.png")
print(f"layer-01-mt-hood.png  (scale {s:.2f}, peak at y={FH - place_h + int(peak_y * s)})")

# ---- composite check -------------------------------------------------------------
order = ["layer-00-sky", "layer-00-clouds", "layer-01-mt-hood", "layer-02-ridge-far",
         "layer-03-ridge-blue", "layer-04-city", "layer-05-mist-hills",
         "layer-06-forest-mid", "layer-07-forest-near", "layer-08-forest-dark",
         "layer-09-pines"]
comp = np.asarray(Image.open(OUT / "layer-00-sky.png").convert("RGB")).astype(np.float32)
for name in order[1:]:
    r = np.asarray(Image.open(OUT / f"{name}.png").convert("RGBA")).astype(np.float32)
    a = r[:, :, 3:4] / 255
    comp = r[:, :, :3] * a + comp * (1 - a)
Image.fromarray(comp.astype(np.uint8)).save(ROOT / "parallax/scripts/composite-final.png")
print("composite -> parallax/scripts/composite-final.png")
