"""Cut real-image parallax layers (RGBA PNGs) from the dawn storyboard.

Each layer keeps the actual painted pixels of its visible band:
  edge_i(x) <= y < edge_{i+1}(x)
No invented pixels needed: scrolling only ever reveals bands visible in
the original (front layers only slide *down* relative to their backers).

Output: parallax/assets/webp-cutouts/layer-*.png at 2048x1152.
"""
import numpy as np
from pathlib import Path
from PIL import Image

ROOT = Path("/Users/philip/src/philsapp-26-05-10")
OUT = ROOT / "parallax/assets/webp-cutouts"
OUT.mkdir(parents=True, exist_ok=True)

FULL_W, FULL_H = 2048, 1152
img = Image.open(ROOT / "parallax/storyboard/mt-hood-portland-dawn.png").convert("RGB")
full = np.asarray(img).astype(np.uint8)

small = np.asarray(img.resize((1024, 576), Image.LANCZOS)).astype(np.float32)
labels = np.load(ROOT / "parallax/scripts/labels.npy")
centers = np.load(ROOT / "parallax/scripts/centers.npy")
H, W = labels.shape
K = len(centers)

# ---- smoothed label map (same as SVG pipeline) ------------------------------
def box_blur(mask, r=4):
    iimg = np.pad(mask.astype(np.float64), ((r + 1, r), (r + 1, r))).cumsum(0).cumsum(1)
    return (iimg[2 * r + 1:, 2 * r + 1:] - iimg[:-2 * r - 1, 2 * r + 1:]
            - iimg[2 * r + 1:, :-2 * r - 1] + iimg[:-2 * r - 1, :-2 * r - 1])

votes = np.stack([box_blur(labels == k) for k in range(K)])
smooth = votes.argmax(0)

def median_filter(v, win):
    pad = win // 2
    vp = np.pad(v, pad, mode="edge")
    return np.array([np.median(vp[i:i + win]) for i in range(len(v))])

def top_edge(mask, min_run=4, smooth_win=15):
    edge = np.full(W, np.nan)
    for x in range(W):
        col = mask[:, x]
        ys = np.where(col)[0]
        for y in ys:
            if col[y:y + min_run].sum() >= min_run - 1:
                edge[x] = y
                break
    for x in range(W):
        if np.isnan(edge[x]):
            near = np.concatenate([edge[max(0, x - 8):x], edge[x + 1:x + 9]])
            near = near[~np.isnan(near)]
            edge[x] = np.median(near) if len(near) else H
    return median_filter(edge, smooth_win)

# ---- mt hood edge (topmost strong discontinuity + shoulder blends) ----------
cs = small.cumsum(0)
def band_mean(yt, yb):
    return (cs[yb] - cs[max(yt, 0)]) / (yb - max(yt, 0))

edge = np.full(W, np.nan)
for x in range(40, 860):
    scores = []
    for y in range(90, 280):
        s = np.linalg.norm(band_mean(y - 10, y)[x] - band_mean(y, y + 16)[x])
        scores.append((s, y))
    smax = max(s for s, _ in scores)
    thresh = max(0.55 * smax, 18)
    edge[x] = next((y for s, y in scores if s > thresh), max(scores)[1])
xs = np.where(~np.isnan(edge))[0]
edge = np.interp(np.arange(W), xs, edge[xs])
CX0, CX1, SHOULDER = 250, 700, 240.0
hood_edge = np.full(W, SHOULDER)
hood_edge[CX0:CX1] = edge[CX0:CX1]
for x in range(CX0 - 80, CX0):
    t = (x - (CX0 - 80)) / 80
    hood_edge[x] = (1 - t) * SHOULDER + t * edge[CX0]
for x in range(CX1, CX1 + 80):
    t = (x - CX1) / 80
    hood_edge[x] = (1 - t) * edge[CX1 - 1] + t * SHOULDER
hood_edge = median_filter(hood_edge, 15)
hood_edge = np.convolve(hood_edge, np.ones(11) / 11, mode="same")

# ---- layer edges, back to front ----------------------------------------------
# (name, clusters, y_min, median window for the edge)
SPECS = [
    ("layer-02-ridge-far",   [7],  150, 15),
    ("layer-03-ridge-blue",  [0],  220, 15),
    ("layer-04-city",        [3],  240, 5),
    ("layer-05-mist-hills",  [9],  300, 11),
    ("layer-06-forest-mid",  [5],  320, 7),
    ("layer-07-forest-near", [10], 370, 7),
    ("layer-08-forest-dark", [4],  400, 5),
    ("layer-09-pines",       [2],  330, 5),
]

edges = [np.zeros(W), hood_edge]   # sky starts at 0; hood next
names = ["layer-00-sky", "layer-01-mt-hood"]
for name, clusters, ymin, win in SPECS:
    m = np.isin(smooth, clusters)
    m[:ymin, :] = False
    m[:190, :] = False
    if ymin < 260:
        m[:260, 40:860] = False
    e = top_edge(m, smooth_win=win)
    # never poke above the layer behind it
    e = np.maximum(e, edges[-1] - 2)
    edges.append(e)
    names.append(name)

# ---- cut curtain layers at full resolution -------------------------------------
# Each layer: alpha ramps 0->1 across its top edge, then stays 1 to the
# bottom of the canvas. Pixels below the band are identical to what the
# front layers show, so over-compositing reproduces the original exactly
# (no seam bleed). RGB is zeroed where fully transparent for compression.
SCALE = FULL_W // W
yy = np.arange(FULL_H)[:, None]
print("cutting layers...")
rgba_layers = []
for i, name in enumerate(names):
    top = np.repeat(edges[i], SCALE) * SCALE
    a = np.clip((yy - top + 2.0) / 4.0, 0, 1)
    alpha = (a * 255).astype(np.uint8)
    rgb = full.copy()
    rgb[alpha == 0] = 0
    rgba = np.dstack([rgb, alpha])
    out = OUT / f"{name}.webp"
    Image.fromarray(rgba, "RGBA").save(out, "WEBP", quality=88, method=6)
    rgba_layers.append(rgba)
    print(f"  {name}.webp  {out.stat().st_size / 1024:8.0f} KB")

# ---- composite check (re-reads the shipped files) ------------------------------
comp = None
for name in names:
    r = np.asarray(Image.open(OUT / f"{name}.webp").convert("RGBA")).astype(np.float32)
    a = r[:, :, 3:4] / 255
    comp = r[:, :, :3] * a if comp is None else r[:, :, :3] * a + comp * (1 - a)
Image.fromarray(comp.astype(np.uint8)).resize((1024, 576), Image.LANCZOS).save(
    ROOT / "parallax/scripts/composite-img.png")
print("composite check -> parallax/scripts/composite-img.png")
