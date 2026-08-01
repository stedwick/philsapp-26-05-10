"""Eval: cut the dawn storyboard into depth layers with parallax-maker's SAM.

Uses parallax_maker.instance.SegmentationModel (SAM vit-huge, transformers,
MPS) with hand-picked positive/negative point prompts per target layer.

Outputs to parallax/experiments/eval/masks/:
  <name>.png          binary mask (white = layer)
  cutout-<name>.png   RGBA cutout on transparency
  overlay-<name>.png  mask overlay on the storyboard (for visual QA)

Run from parallax/experiments/parallax-maker with .venv active:
  .venv/bin/python ../eval/01_sam_masks.py
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "parallax-maker"))

from parallax_maker.instance import SegmentationModel  # noqa: E402

ROOT = Path("/Users/philip/src/philsapp-parallax-hero/parallax")
IMG_PATH = ROOT / "storyboard/mt-hood-portland-dawn.png"
OUT = ROOT / "experiments/eval/masks"
OUT.mkdir(parents=True, exist_ok=True)

# Target layers, back to front. Points are (x, y) in 2048x1152 coords,
# picked from the storyboard layout. Negatives steer SAM away from
# neighboring regions that share color/texture.
SPECS = [
    ("00-sky", [(1024, 100), (300, 80), (1750, 90)], [(1024, 250)]),
    ("01-clouds", [(150, 300), (1700, 330), (800, 175)], []),
    ("02-mountain", [(983, 370), (1100, 300)], [(1024, 150)]),
    ("03-hills-far", [(614, 573), (1750, 590)], [(983, 370), (1100, 560)]),
    ("04-city", [(1100, 560), (983, 590)], [(614, 573)]),
    ("05-hill-front-city", [(900, 655), (500, 660)], [(1100, 560), (1065, 735)]),
    ("06-valley-mist", [(1065, 740), (900, 745)], [(900, 655), (800, 800)]),
    ("07-hill-2", [(800, 800), (1500, 790)], [(1065, 740), (1200, 860)]),
    ("08-hill-3", [(1200, 860), (600, 870)], [(800, 800), (400, 950)]),
    ("09-forest-close", [(400, 950), (1400, 950)], [(600, 870), (1024, 1100)]),
    ("10-pines-left", [(100, 700), (250, 780)], [(400, 950)]),
    ("10-pines-right", [(1980, 800), (1900, 700)], [(1400, 950)]),
    ("11-ground", [(1024, 1100), (300, 1100)], [(400, 950)]),
]


def main():
    img = Image.open(IMG_PATH).convert("RGB")
    print(f"image: {img.size}")

    seg = SegmentationModel("sam")
    seg.segment_image(img)  # sets self.image; SAM itself is prompt-driven

    for name, pos, neg in SPECS:
        print(f"--- {name}")
        mask = seg.mask_at_point({"positive_points": pos, "negative_points": neg})
        # mask comes back as uint8 array (0/255) at image size
        m = np.asarray(mask)
        if m.max() <= 1:
            m = m * 255
        m = m.astype(np.uint8)
        coverage = (m > 127).mean()
        print(f"    coverage: {coverage:.1%}")

        Image.fromarray(m).save(OUT / f"{name}.png")

        rgba = np.dstack([np.asarray(img), m])
        Image.fromarray(rgba, "RGBA").save(OUT / f"cutout-{name}.png")

        overlay = np.asarray(img).copy()
        overlay[m > 127] = (0.5 * overlay[m > 127] + 0.5 * np.array([255, 0, 0])).astype(
            np.uint8
        )
        Image.fromarray(overlay).save(OUT / f"overlay-{name}.png")


if __name__ == "__main__":
    main()
