"""Detect the Mt Hood silhouette via max vertical color discontinuity per column."""
import numpy as np
from PIL import Image

ROOT = "/Users/philip/src/philsapp-26-05-10"
img = Image.open(f"{ROOT}/parallax/storyboard/mt-hood-portland-dawn.png").convert("RGB").resize((1024, 576), Image.LANCZOS)
px = np.asarray(img).astype(np.float32)
H, W, _ = px.shape

Y0, Y1 = 90, 300
X0, X1 = 40, 860
A, B = 12, 30  # windows above/below

cs = px.cumsum(0)
def band_mean(y_top, y_bot):  # mean color between rows [y_top, y_bot) for all columns
    y_top = max(y_top, 0)
    return (cs[y_bot] - cs[y_top]) / (y_bot - y_top)

edge = np.full(W, np.nan)
score_map = np.zeros(W)
for x in range(X0, X1):
    best_s, best_y = -1, None
    for y in range(Y0, Y1 - B):
        above = band_mean(y - A, y)[x]
        below = band_mean(y, y + B)[x]
        s = np.linalg.norm(above - below)
        if s > best_s:
            best_s, best_y = s, y
    edge[x] = best_y
    score_map[x] = best_s

# draw detected edge on the image, brightness = confidence
out = np.asarray(img).copy()
for x in range(W):
    if not np.isnan(edge[x]):
        y = int(edge[x])
        out[max(0, y - 1):y + 2, x] = [255, 0, 0] if score_map[x] > 8 else [255, 255, 0]
Image.fromarray(out).save(f"{ROOT}/parallax/scripts/hood_edge_debug.png")

# stats
s = score_map[X0:X1]
print(f"score: median {np.median(s):.1f}, p25 {np.percentile(s,25):.1f}, p75 {np.percentile(s,75):.1f}")
print("saved hood_edge_debug.png")
