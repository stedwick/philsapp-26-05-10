"""Build parallax SVG layers from the dawn storyboard image. v3

v3: Mt Hood's silhouette comes from per-column max vertical color
discontinuity (snow and pale sky share k-means colors, so clustering
alone can't separate them). Landscape layers exclude everything above
the detected mountain line so snow-shadow colors can't spike them.
"""
import numpy as np
from pathlib import Path
from PIL import Image

ROOT = Path("/Users/philip/src/philsapp-26-05-10")
OUT = ROOT / "parallax/assets/svg-layers"
OUT.mkdir(parents=True, exist_ok=True)

labels = np.load(ROOT / "parallax/scripts/labels.npy")
centers = np.load(ROOT / "parallax/scripts/centers.npy")
H, W = labels.shape  # 576 x 1024
K = len(centers)

def hexc(i):
    c = centers[i].astype(int)
    return "#{:02x}{:02x}{:02x}".format(*c)

def hex2rgb(h):
    return np.array([int(h[i:i + 2], 16) for i in (1, 3, 5)], dtype=np.uint8)

# ---- smooth the label map: per-cluster box blur, assign argmax ------------
def box_blur(mask, r=4):
    iimg = np.pad(mask.astype(np.float64), ((r + 1, r), (r + 1, r))).cumsum(0).cumsum(1)
    return (iimg[2 * r + 1:, 2 * r + 1:] - iimg[:-2 * r - 1, 2 * r + 1:]
            - iimg[2 * r + 1:, :-2 * r - 1] + iimg[:-2 * r - 1, :-2 * r - 1])

votes = np.stack([box_blur(labels == k) for k in range(K)])
smooth = votes.argmax(0)

# ---- layer definitions: (name, clusters, y_min) ----------------------------
SKY = [1, 6]
HOOD = [8, 11]
HOOD_REGION = (60, 820, 90, 300)   # x0, x1, y0, y1
LAYERS = [  # back to front (sky & hood handled specially)
    ("layer-03-ridge-far.svg",   [7],  150),
    ("layer-04-ridge-blue.svg",  [0],  220),
    ("layer-05-city.svg",        [3],  240),
    ("layer-06-mist-hills.svg",  [9],  300),
    ("layer-07-forest-mid.svg",  [5],  320),
    ("layer-08-forest-near.svg", [10], 370),
    ("layer-09-forest-dark.svg", [4],  400),
    ("layer-10-pines.svg",       [2],  330),
]

def median_filter(v, win):
    pad = win // 2
    vp = np.pad(v, pad, mode="edge")
    return np.array([np.median(vp[i:i + win]) for i in range(len(v))])

def top_edge(mask, min_run=4, fallback=H, smooth_win=15):
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
            edge[x] = np.median(near) if len(near) else fallback
    return median_filter(edge, smooth_win)

def rdp(points, eps):
    if len(points) < 3:
        return points
    a, b = points[0], points[-1]
    ab = b - a
    denom = np.hypot(*ab) or 1e-9
    d = np.abs(ab[0] * (a[1] - points[:, 1]) - (a[0] - points[:, 0]) * ab[1]) / denom
    i = int(np.argmax(d))
    if d[i] > eps:
        return np.vstack([rdp(points[:i + 1], eps)[:-1], rdp(points[i:], eps)])
    return np.array([a, b])

def curtain_path(edge, eps=1.6):
    pts = np.column_stack([np.arange(W), edge])
    pts = rdp(pts[::2], eps)
    d = [f"M{pts[0,0]:.0f},{pts[0,1]:.0f}"]
    d += [f"L{x:.0f},{y:.0f}" for x, y in pts[1:]]
    d += [f"L{W},{edge[-1]:.0f}", f"L{W},{H}", f"L0,{H}", "Z"]
    if d[1].startswith("L0,"):
        d.pop(1)
    return " ".join(d)

def components(mask):
    lab = np.full(mask.shape, -1, dtype=np.int32)
    parent = []
    def find(a):
        while parent[a] != a:
            parent[a] = parent[parent[a]]
            a = parent[a]
        return a
    for y in range(mask.shape[0]):
        for x in range(mask.shape[1]):
            if not mask[y, x]:
                continue
            nbrs = [n for n in (lab[y, x - 1] if x > 0 else -1,
                                lab[y - 1, x] if y > 0 else -1) if n >= 0]
            if not nbrs:
                lab[y, x] = len(parent)
                parent.append(len(parent))
            else:
                lab[y, x] = nbrs[0]
                for n in nbrs[1:]:
                    parent[find(n)] = find(nbrs[0])
    out = {}
    ys, xs = np.where(lab >= 0)
    for y, x in zip(ys, xs):
        out.setdefault(find(lab[y, x]), []).append((x, y))
    return list(out.values())

def blob_path(pixels, eps=1.2):
    cols = {}
    for x, y in pixels:
        lo, hi = cols.get(x, (y, y))
        cols[x] = (min(lo, y), max(hi, y))
    xs = sorted(cols)
    top = [(x, cols[x][0]) for x in xs]
    bot = [(x, cols[x][1]) for x in reversed(xs)]
    pts = rdp(np.array(top + bot, dtype=float), eps)
    return ("M" + " L".join(f"{x:.0f},{y:.0f}" for x, y in pts)) + " Z"

def svg_doc(body):
    return f'<svg viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">{body}</svg>\n'

def write(name, body):
    p = OUT / name
    p.write_text(svg_doc(body))
    print(f"  {name:28s} {p.stat().st_size:7d} bytes")

print("building layers...")

# ---- sky -------------------------------------------------------------------
top_c, hor_c = centers[1].astype(int), np.array([186, 203, 232])
grad = (f'<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">'
        f'<stop offset="0" stop-color="#{top_c[0]:02x}{top_c[1]:02x}{top_c[2]:02x}"/>'
        f'<stop offset="1" stop-color="#{hor_c[0]:02x}{hor_c[1]:02x}{hor_c[2]:02x}"/>'
        f'</linearGradient></defs>')
write("layer-00-sky.svg", grad + f'<rect width="{W}" height="{H}" fill="url(#sky)"/>')

# ---- clouds: darker-blue & pale blobs floating in the sky ------------------
cloud_blobs = []
for cl, col in [(1, hexc(1)), (8, hexc(8))]:
    m = np.zeros((H, W), bool)
    m[:165, :] = True
    m &= (smooth == cl)
    m[0, :] = m[-1, :] = m[:, 0] = m[:, -1] = False  # ignore edge touchers
    for c in components(m):
        xs = [p[0] for p in c]
        ys = [p[1] for p in c]
        w_, h_ = max(xs) - min(xs), max(ys) - min(ys)
        if 300 < len(c) < 20000 and w_ > 1.5 * max(h_, 1):
            cloud_blobs.append((min(ys), blob_path(c), col))
cloud_blobs.sort()
write("layer-01-clouds.svg",
      "".join(f'<path d="{d}" fill="{c}"/>' for _, d, c in cloud_blobs)
      or '<path d="M0,0" fill="none"/>')

# ---- mt hood: silhouette via topmost strong vertical discontinuity --------
px = np.asarray(
    Image.open(ROOT / "parallax/storyboard/mt-hood-portland-dawn.png")
    .convert("RGB").resize((W, H), Image.LANCZOS)).astype(np.float32)
cs = px.cumsum(0)
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

# shoulders dissolve into haze: hold the detected line only for the core peak,
# taper to the snow-haze contact level outside it (hidden behind ridge layer)
CX0, CX1, SHOULDER = 250, 700, 240.0
hood_edge = np.full(W, SHOULDER)
hood_edge[CX0:CX1] = edge[CX0:CX1]
for x in range(CX0 - 80, CX0):                    # blend in from the left
    t = (x - (CX0 - 80)) / 80
    hood_edge[x] = (1 - t) * SHOULDER + t * edge[CX0]
for x in range(CX1, CX1 + 80):                    # blend out to the right
    t = (x - CX1) / 80
    hood_edge[x] = (1 - t) * edge[CX1 - 1] + t * SHOULDER
hood_edge = median_filter(hood_edge, 15)
hood_edge = np.convolve(hood_edge, np.ones(11) / 11, mode="same")

# pink sunlit-face detail from the cluster map
x0, x1, y0, y1 = HOOD_REGION
hood_region_mask = np.zeros((H, W), bool)
hood_region_mask[y0:y1, x0:x1] = True
detail = []
for c in components((smooth == 11) & hood_region_mask):
    if len(c) > 120:
        detail.append(blob_path(c))
write("layer-02-mt-hood.svg",
      f'<path d="{curtain_path(hood_edge)}" fill="{hexc(8)}"/>'
      + "".join(f'<path d="{d}" fill="{hexc(11)}"/>' for d in detail))

# ---- remaining curtains ------------------------------------------------------
curtains = [(hood_edge, hex2rgb(hexc(8)))]
for name, clusters, ymin in LAYERS:
    m = np.isin(smooth, clusters)
    m[:ymin, :] = False
    m[:190, :] = False               # clouds & high haze aren't landscape
    if ymin < 260:
        m[:260, 40:860] = False      # mountain shadow pixels aren't ridges
    e = top_edge(m)
    write(name, f'<path d="{curtain_path(e)}" fill="{hexc(clusters[0])}"/>')
    curtains.append((e, hex2rgb(hexc(clusters[0]))))

# ---- composite check ----------------------------------------------------------
comp = np.zeros((H, W, 3), dtype=np.uint8)
comp[:] = hex2rgb(hexc(1))
comp[int(H * 0.35):] = (comp[int(H * 0.35):] * 0 + hex2rgb("#bacbe8"))  # rough gradient
for i, (e, col) in enumerate(curtains):
    for x in range(W):
        comp[int(e[x]):, x] = col
    if i == 0:  # paint the pink sunlit faces on top of the snow
        pink = (smooth == 11) & hood_region_mask
        comp[pink] = hex2rgb(hexc(11))
Image.fromarray(comp).save(ROOT / "parallax/scripts/composite.png")
print("composite check -> parallax/scripts/composite.png")
