"""Reframe layers onto a wide 2048x820 (2.5:1) hero canvas.

Why: the hero is bottom-anchored and cover-scaled; on real viewports
(~2.4:1) a 16:9 canvas loses its top ~28% (the peak). A 2.5:1 canvas
means width-cover crops nothing vertically.

Each band is placed so its silhouette top lands at the same relative
height as in the original dawn PNG. Mt. Hood is uniform-scaled and
centered with its peak at PEAK_TARGET_Y.
"""
import numpy as np
from PIL import Image
from pathlib import Path

ROOT = Path("/Users/philip/src/philsapp-26-05-10")
GEN = ROOT / "parallax/assets/generated-layers"
OUT = ROOT / "parallax/assets/proto1-final"
OUT.mkdir(parents=True, exist_ok=True)
FW, FH = 2048, 820
PEAK_TARGET_Y = 90

# band -> target top of its silhouette, as a fraction of canvas height
# (measured against the original dawn artwork)
BAND_TOPS = {
    "layer-02-ridge-far":   0.44,
    "layer-03-ridge-blue":  0.48,
    "layer-04-city":        0.44,
    "layer-05-mist-hills":  0.56,
    "layer-06-forest-mid":  0.58,
    "layer-07-forest-near": 0.64,
    "layer-08-forest-dark": 0.70,
    "layer-09-pines":       0.42,
}

def watermark_patch(a):
    H, W = a.shape[:2]
    x1, y0 = int(W * 0.13), int(H * 0.92)
    donor = a[y0:, int(W * 0.15):int(W * 0.28)]
    if donor.shape[1] >= x1:
        a[y0:, :x1] = donor[:, :x1]
    return a

def load(name):
    im = Image.open(GEN / f"{name}.png").convert("RGBA")
    return Image.fromarray(watermark_patch(np.asarray(im).copy()), "RGBA")

# ---- sky ----------------------------------------------------------------------
src = np.asarray(Image.open(ROOT / "parallax/storyboard/mt-hood-portland-dawn.png")
                 .convert("RGB")).astype(np.float32)
col = src[:620, 1800, :]
ys = np.linspace(0, len(col) - 1, FH)
sky = np.stack([np.interp(ys, np.arange(len(col)), col[:, c]) for c in range(3)], axis=-1)
sky = np.repeat(sky[:, None, :], FW, axis=1).astype(np.uint8)
Image.fromarray(sky).save(OUT / "layer-00-sky.png")
print("layer-00-sky.png")

# ---- clouds: full-canvas stretch -------------------------------------------------
load("layer-00-clouds").resize((FW, FH), Image.LANCZOS).save(OUT / "layer-00-clouds.png")
print("layer-00-clouds.png")

# ---- bands: placed by silhouette-top target --------------------------------------
for name, frac in BAND_TOPS.items():
    im = load(name)
    alpha = np.asarray(im)[:, :, 3]
    t = np.where(alpha.max(axis=1) > 8)[0].min()          # topmost opaque row
    target_y = round(frac * FH)
    sh = (FH - target_y) / (im.height - t)                # bottom lands on FH
    nh = round(im.height * sh)
    im2 = im.resize((FW, nh), Image.LANCZOS)
    canvas = np.zeros((FH, FW, 4), dtype=np.uint8)
    off_y = target_y - round(t * sh)
    src0 = max(0, -off_y)
    dst0 = max(0, off_y)
    place = min(nh - src0, FH - dst0)
    canvas[dst0:dst0 + place] = np.asarray(im2)[src0:src0 + place]
    Image.fromarray(canvas, "RGBA").save(OUT / f"{name}.png")
    print(f"{name}.png  top->{target_y}")

# ---- mt hood: uniform scale, centered, bottom-anchored ----------------------------
im = load("layer-01-mt-hood")
alpha = np.asarray(im)[:, :, 3]
peak_y = np.where(alpha.max(axis=1) > 8)[0].min()
s = (FH - PEAK_TARGET_Y) / (im.height - peak_y)
nw, nh = round(im.width * s), round(im.height * s)
im = im.resize((nw, nh), Image.LANCZOS)
canvas = np.zeros((FH, FW, 4), dtype=np.uint8)
x0 = (FW - nw) // 2
xs, xe = max(0, x0), min(FW, x0 + nw)
place_h = min(nh, FH)
canvas[FH - place_h:, xs:xe] = np.asarray(im)[nh - place_h:, (xs - x0):(xs - x0) + (xe - xs)]
Image.fromarray(canvas, "RGBA").save(OUT / "layer-01-mt-hood.png")
print(f"layer-01-mt-hood.png  scale {s:.2f}, width {nw}")

# ---- composite + browser-crop simulation ------------------------------------------
order = ["layer-00-sky", "layer-00-clouds", "layer-01-mt-hood", "layer-02-ridge-far",
         "layer-03-ridge-blue", "layer-04-city", "layer-05-mist-hills",
         "layer-06-forest-mid", "layer-07-forest-near", "layer-08-forest-dark",
         "layer-09-pines"]
comp = sky.astype(np.float32)
for name in order[1:]:
    r = np.asarray(Image.open(OUT / f"{name}.png").convert("RGBA")).astype(np.float32)
    a = r[:, :, 3:4] / 255
    comp = r[:, :, :3] * a + comp * (1 - a)
full = comp.astype(np.uint8)
Image.fromarray(full).save(ROOT / "parallax/scripts/composite-final.png")

# simulate a 1400x568 browser hero: cover-scale + bottom anchor
vw, vh = 1400, 568
sc = max(vw / FW, vh / FH)
sw, sh = round(FW * sc), round(FH * sc)
sim = np.asarray(Image.fromarray(full).resize((sw, sh), Image.LANCZOS))
x0 = (sw - vw) // 2
sim = sim[sh - vh:, x0:x0 + vw]
Image.fromarray(sim).save(ROOT / "parallax/scripts/composite-final-crop.png")
print("composite-final.png + composite-final-crop.png (1400x568 browser sim)")
