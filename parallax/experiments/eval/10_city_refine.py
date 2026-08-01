"""Polish pass (a3): refine the BiRefNet skyline mask into the final 04-city.

- threshold the BiRefNet prob at 0.5
- drop the haze block it grabbed at the crop's left edge: left of x=620
  only the low building strip is real city -> keep only y>=595 there
- clip bottom to y<=668 (city fades into the front hill; front layer wins
  overlaps anyway)
- keep the largest connected component (towers + bridge are one structure)
- light close to fill pinholes

Writes masks/04-city.png (+ cutout/overlay). Does NOT touch other masks.

Run from parallax/experiments/parallax-maker:
  .venv/bin/python ../eval/10_city_refine.py
"""
from pathlib import Path

import cv2
import numpy as np
from PIL import Image

ROOT = Path("/Users/philip/src/philsapp-parallax-hero/parallax")
IMG_PATH = ROOT / "storyboard/mt-hood-portland-dawn.png"
MASKS = ROOT / "experiments/eval/masks"
PROB = MASKS / "recut-city/birefnet-prob.png"


def main():
    img = Image.open(IMG_PATH).convert("RGB")
    arr = np.asarray(img)
    H, W = arr.shape[:2]
    prob = np.asarray(Image.open(PROB).convert("L")).astype(np.float32) / 255.0

    m = prob > 0.5

    # left-edge haze block: only the low strip (y>=595) is city there
    left = np.zeros_like(m)
    left[:, :620] = True
    yy = np.arange(H)[:, None]
    m &= ~(left & (yy < 595))

    # bottom clip
    m &= yy <= 668

    # largest connected component (keep bridge too: take components >= 200px)
    n, labels, stats, _ = cv2.connectedComponentsWithStats(m.astype(np.uint8), 8)
    keep = np.zeros_like(m)
    for i in range(1, n):
        if stats[i, cv2.CC_STAT_AREA] >= 200:
            keep |= labels == i
    m = keep

    # close small pinholes, keep crisp tops
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    m = cv2.morphologyEx(m.astype(np.uint8), cv2.MORPH_CLOSE, k) > 0

    print(f"final coverage: {m.mean():.2%}")
    Image.fromarray((m * 255).astype(np.uint8)).save(MASKS / "04-city.png")
    rgba = np.dstack([arr, (m * 255).astype(np.uint8)])
    Image.fromarray(rgba, "RGBA").save(MASKS / "cutout-04-city.png")
    overlay = arr.copy()
    overlay[m] = (0.5 * overlay[m] + 0.5 * np.array([255, 0, 0])).astype(np.uint8)
    Image.fromarray(overlay).save(MASKS / "overlay-04-city.png")


if __name__ == "__main__":
    main()
