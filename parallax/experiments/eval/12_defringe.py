"""Polish pass (b): defringe tree-layer alpha edges.

The feathered alpha edge exposes original edge pixels whose RGB is mostly
background haze -> white/light fringe around dark trees when composited
over the light reveal background.

Recipe (validated on the pines layer):
  1. continuous alpha erosion, 3x3 ellipse, 1 iteration (shrinks the halo
     ring geometrically without killing sub-128-alpha needle tips)
  2. color decontamination: pixels within 12px of the opaque core (itself
     eroded 1px) get the nearest core pixel's RGB

Pure numpy/scipy/cv2, no model. Run from parallax/experiments/parallax-maker:
  .venv/bin/python ../eval/12_defringe.py
"""
from pathlib import Path

import cv2
import numpy as np
from PIL import Image
from scipy.ndimage import binary_erosion, distance_transform_edt

ROOT = Path("/Users/philip/src/philsapp-parallax-hero/parallax")
STACK = ROOT / "experiments/eval/stack"

LAYERS = [
    "layer-05-hill-front-city.png",
    "layer-07-hill-2.png",
    "layer-08-hill-3.png",
    "layer-09-forest-close.png",
    "layer-10-pines.png",
    "layer-11-ground.png",
]

MAX_DIST = 12  # feather band + opaque contamination ring


def defringe(rgba):
    rgb = rgba[:, :, :3]
    a = rgba[:, :, 3].copy()
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
    a = cv2.erode(a, k, iterations=1)

    core = binary_erosion(a > 250, iterations=1)
    if not core.any():
        return rgba, 0.0
    dist, idx = distance_transform_edt(~core, return_indices=True)
    band = (a > 0) & ~core & (dist <= MAX_DIST)
    out = rgba.copy()
    out[:, :, :3][band] = rgb[idx[0][band], idx[1][band]]
    out[:, :, 3] = a
    return out, band.mean()


def main():
    for name in LAYERS:
        p = STACK / name
        rgba = np.asarray(Image.open(p).convert("RGBA"))
        out, frac = defringe(rgba)
        Image.fromarray(out, "RGBA").save(p)
        print(f"{name}: decontaminated {frac:.3%} of canvas")


if __name__ == "__main__":
    main()
