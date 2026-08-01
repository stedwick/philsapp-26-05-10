"""Analyze the dawn storyboard image: cluster colors and report band structure."""
import numpy as np
from PIL import Image

SRC = "/Users/philip/src/philsapp-26-05-10/parallax/storyboard/mt-hood-portland-dawn.png"
W, H = 1024, 576  # analysis resolution

img = Image.open(SRC).convert("RGB").resize((W, H), Image.LANCZOS)
px = np.asarray(img).astype(np.float32)

# k-means clustering (numpy only)
def kmeans(data, k, iters=30, seed=42):
    rng = np.random.default_rng(seed)
    idx = rng.choice(len(data), k, replace=False)
    centers = data[idx].copy()
    for _ in range(iters):
        d = ((data[:, None, :] - centers[None, :, :]) ** 2).sum(-1)
        labels = d.argmin(1)
        new = np.array([data[labels == i].mean(0) if (labels == i).any() else centers[i]
                        for i in range(k)])
        if np.allclose(new, centers):
            break
        centers = new
    return labels, centers

flat = px.reshape(-1, 3)
labels, centers = kmeans(flat, 12)
labels = labels.reshape(H, W)

print("cluster | color (hex) | pixel % | y-range (median, p5-p95) | x-range")
for i, c in enumerate(centers):
    m = labels == i
    frac = m.mean()
    ys, xs = np.where(m)
    hexc = "#{:02x}{:02x}{:02x}".format(*c.astype(int))
    print(f"{i:2d} | {hexc} | {frac*100:5.1f}% | y {np.median(ys):5.0f} "
          f"({np.percentile(ys,5):4.0f}-{np.percentile(ys,95):4.0f}) | "
          f"x {np.percentile(xs,5):4.0f}-{np.percentile(xs,95):4.0f}")

np.save("/Users/philip/src/philsapp-26-05-10/parallax/scripts/labels.npy", labels)
np.save("/Users/philip/src/philsapp-26-05-10/parallax/scripts/centers.npy", centers)
print("\nsaved labels.npy + centers.npy at 1024x576")
