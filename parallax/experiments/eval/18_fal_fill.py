"""Polish pass (c) — hosted: re-fill the occlusion zones with FLUX.1 [pro]
Fill via the fal.ai API instead of the local 4-bit mflux model.

Geometry is identical to 06/13/16/17 (same masks, y-band claiming,
TRAVEL=220 fill zones). Unlike 13, this preserves the CURRENT layer PNGs
(defringed alpha, cloud knockout, watermark patch) and only replaces RGB
inside each layer's fill zone.

One full-canvas call per layer (2048x1152 = 2.36MP, ~$0.12/call at
$0.05/MP). Full-canvas avoids the tile seams the local run needed ramps for.

Auth: FAL_KEY must be in the environment (never printed). Run from
parallax/experiments/parallax-maker:
  set -a; . /Users/philip/src/philsapp-26-05-10/.env; set +a
  export FAL_KEY="$FAL_API_KEY"
  .venv/bin/python ../eval/18_fal_fill.py [layer-name ...]
No args = all layers with a non-empty fill zone.
"""
import io
import sys
import time
import urllib.request
from pathlib import Path

import cv2
import numpy as np
from PIL import Image

ROOT = Path("/Users/philip/src/philsapp-parallax-hero/parallax")
IMG_PATH = ROOT / "storyboard/mt-hood-portland-dawn.png"
MASKS = ROOT / "experiments/eval/masks"
STACK = ROOT / "experiments/eval/stack"
WORK = ROOT / "experiments/eval/flux-tiles"  # scratch: API inputs/outputs
WORK.mkdir(parents=True, exist_ok=True)

MODEL_ID = "fal-ai/flux-pro/v1/fill"
COST_PER_CALL = 0.05 * (2048 * 1152) / 1e6  # ~$0.118
SEED = 42

TRAVEL = 220

LAYERS = [
    ("00-sky", 0.95),
    ("02-mountain", 0.90),
    ("03-hills-far", 0.85),
    ("04-city", 0.80),
    ("05-hill-front-city", 0.70),
    ("07-hill-2", 0.60),
    ("08-hill-3", 0.50),
    ("09-forest-close", 0.40),
    ("10-pines", 0.20),
    ("11-ground", 0.0),
]

BANDS = [
    (480, 0),
    (560, 2),
    (645, 3),
    (700, 4),
    (800, 5),
    (880, 6),
    (1000, 7),
    (1152, 9),
]

PROMPTS = {
    "00-sky": (
        "flat vector illustration, clear dawn sky, smooth blue to lavender "
        "gradient, minimalist, no clouds, no objects"
    ),
    "02-mountain": (
        "flat vector illustration, snowy mountain slopes at dawn with soft "
        "pink alpenglow, atmospheric haze at the base, blue and lavender tones"
    ),
    "03-hills-far": (
        "flat vector illustration, layered forested hills receding into dawn "
        "mist, soft atmospheric haze, blue and lavender tones, minimalist"
    ),
    "04-city": (
        "flat vector illustration, hazy city skyline silhouette at dawn, "
        "skyscrapers fading into morning mist, blue and lavender tones"
    ),
    "05-hill-front-city": (
        "flat vector illustration, forested hill with pine tree tops in "
        "morning haze, muted blue tones, minimalist"
    ),
    "07-hill-2": (
        "flat vector illustration, dark forested hill slope with pine tree "
        "tops, dawn haze, deep blue tones, minimalist"
    ),
    "08-hill-3": (
        "flat vector illustration, dark forested hill with pine trees, early "
        "dawn, deep blue and navy tones, minimalist"
    ),
    "09-forest-close": (
        "flat vector illustration, dark pine forest treetops, deep navy blue "
        "silhouette, dawn mist in valleys, minimalist"
    ),
    "10-pines": (
        "flat vector illustration, tall pine tree silhouettes, deep navy "
        "blue, dawn mist, minimalist"
    ),
}


def load_mask(name):
    return np.asarray(Image.open(MASKS / f"{name}.png").convert("L")) > 127


def dilate(m, px):
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * px + 1, 2 * px + 1))
    return cv2.dilate(m.astype(np.uint8), k) > 0


def erode(m, px):
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * px + 1, 2 * px + 1))
    return cv2.erode(m.astype(np.uint8), k) > 0


def build_geometry(img_shape):
    """Same as 13/16/17: name -> (owned, fill_zone)."""
    H, W = img_shape
    names = [n for n, _ in LAYERS]
    masks = {}
    for name in names:
        if name == "10-pines":
            masks[name] = load_mask("10-pines-left") | load_mask("10-pines-right")
        else:
            masks[name] = load_mask(name)
    claimed = np.zeros((H, W), bool)
    for n in names:
        claimed |= masks[n]
    unclaimed = ~claimed
    yy = np.arange(H)[:, None]
    for y_max, li in BANDS:
        band = unclaimed & (yy < y_max)
        masks[names[li]] |= band
        unclaimed &= ~(yy < y_max)
    geo = {}
    for i, name in enumerate(names):
        fronts = [masks[n] for n in names[i + 1 :]]
        front_union = (
            np.logical_or.reduce(fronts) if fronts else np.zeros((H, W), bool)
        )
        owned = masks[name] & ~dilate(front_union, 2)
        fill_zone = (
            dilate(masks[name], TRAVEL) & dilate(front_union, 8) & ~dilate(masks[name], 2)
        )
        geo[name] = (owned, fill_zone)
    return geo


def fal_fill(img_rgb, mask_bool, prompt):
    """One flux-pro Fill call. Returns HxWx3 uint8."""
    import fal_client

    Image.fromarray(img_rgb).save(WORK / "_fal-img.png")
    Image.fromarray((mask_bool * 255).astype(np.uint8)).save(WORK / "_fal-mask.png")
    image_url = fal_client.upload_file(WORK / "_fal-img.png")
    mask_url = fal_client.upload_file(WORK / "_fal-mask.png")
    res = fal_client.subscribe(
        MODEL_ID,
        arguments={
            "prompt": prompt,
            "image_url": image_url,
            "mask_url": mask_url,
            "seed": SEED,
            "output_format": "png",
        },
    )
    out_url = res["images"][0]["url"]
    data = urllib.request.urlopen(out_url).read()
    out = Image.open(io.BytesIO(data)).convert("RGB")
    if out.size != (img_rgb.shape[1], img_rgb.shape[0]):
        out = out.resize((img_rgb.shape[1], img_rgb.shape[0]), Image.LANCZOS)
    return np.asarray(out)


def main():
    only = set(sys.argv[1:])
    if not __import__("os").environ.get("FAL_KEY"):
        sys.exit("FAL_KEY not set in environment")
    img = np.asarray(Image.open(IMG_PATH).convert("RGB"))
    H, W = img.shape[:2]
    geo = build_geometry((H, W))
    names = [n for n, _ in LAYERS]

    calls = 0
    t0 = time.time()
    for name in names:
        if only and name not in only:
            continue
        _, fill_zone = geo[name]
        if not fill_zone.any():
            print(f"--- {name}: no fill zone, skipped")
            continue
        p = STACK / f"layer-{name}.png"
        rgba = np.asarray(Image.open(p).convert("RGBA")).copy()
        t = time.time()
        out = fal_fill(rgba[:, :, :3], fill_zone, PROMPTS[name])
        out_path = WORK / f"fal-{name}-out.png"
        Image.fromarray(out).save(out_path)
        calls += 1

        # harvest: paste generated content in the zone, blur only the seam
        merged = rgba[:, :, :3].copy()
        merged[fill_zone] = out[fill_zone]
        seam = dilate(fill_zone, 5) & ~erode(fill_zone, 5)
        soft = cv2.GaussianBlur(merged, (0, 0), 4)
        merged[seam] = soft[seam]
        rgba[:, :, :3] = merged
        Image.fromarray(rgba, "RGBA").save(p)
        print(
            f"--- {name}: filled {fill_zone.mean():.2%} of canvas "
            f"({time.time()-t:.0f}s, est ${calls*COST_PER_CALL:.2f} so far)",
            flush=True,
        )

    print(f"done: {calls} call(s), est cost ${calls*COST_PER_CALL:.2f}, "
          f"{(time.time()-t0)/60:.1f} min")


if __name__ == "__main__":
    main()
