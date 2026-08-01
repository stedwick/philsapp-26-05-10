"""Eval round 2: re-prompt SAM for the masks that failed in pass 1
(city, far hills, valley mist, ground), with more + better-placed
positive/negative points. Overwrites masks in eval/masks/.

Run from parallax/experiments/parallax-maker:
  .venv/bin/python ../eval/03_fix_masks.py
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

SPECS = [
    # city towers: positives on distinct building silhouettes, negatives on
    # mountain haze above and hill band below
    ("04-city", [(1014, 545), (1235, 550), (890, 575), (1380, 585), (760, 590)],
     [(983, 370), (1024, 150), (900, 665), (614, 573)]),
    # lavender ridge behind the city, spans full width
    ("03-hills-far", [(300, 560), (1750, 585), (614, 552), (120, 590)],
     [(983, 370), (1014, 545), (900, 665)]),
    # pink valley mist patch below the city
    ("06-valley-mist", [(1065, 748), (975, 742)],
     [(800, 800), (900, 660), (1014, 600)]),
    # nearest bottom bank, full width
    ("11-ground", [(300, 1105), (1024, 1105), (1750, 1100), (600, 1120)],
     [(400, 950), (1400, 950), (100, 700)]),
]


def main():
    img = Image.open(IMG_PATH).convert("RGB")
    seg = SegmentationModel("sam")
    seg.segment_image(img)

    for name, pos, neg in SPECS:
        print(f"--- {name}")
        mask = seg.mask_at_point({"positive_points": pos, "negative_points": neg})
        m = np.asarray(mask)
        if m.max() <= 1:
            m = m * 255
        m = m.astype(np.uint8)
        print(f"    coverage: {(m > 127).mean():.1%}")

        Image.fromarray(m).save(OUT / f"{name}.png")
        rgba = np.dstack([np.asarray(img), m])
        Image.fromarray(rgba, "RGBA").save(OUT / f"cutout-{name}.png")
        overlay = np.asarray(img).copy()
        overlay[m > 127] = (0.5 * overlay[m > 127] + 0.5 * np.array([255, 0, 0])).astype(np.uint8)
        Image.fromarray(overlay).save(OUT / f"overlay-{name}.png")


if __name__ == "__main__":
    main()
