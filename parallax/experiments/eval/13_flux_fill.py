"""Polish pass (c): re-fill the occlusion zones with FLUX.1 Fill (mflux, MLX)
instead of SDXL, and rebuild the 10 base layers.

Geometry is identical to 06_patch_stack.py (same masks, y-band claiming,
ownership, TRAVEL=220 fill zones) so the browser prototype keeps working.
Only the fill-zone RGB changes: sharper, style-matched FLUX content.

Model: AlekseyCalvin/FluxFillDev_fp8_Diffusers (non-gated diffusers-layout
mirror of FLUX.1-Fill-dev), quantized to 4bit in-memory by mflux.

Also re-applies: ground watermark patch, composite re-renders.

Run from parallax/experiments/parallax-maker:
  PYTORCH_ENABLE_MPS_FALLBACK=1 .venv/bin/python ../eval/13_flux_fill.py
"""
import time
from pathlib import Path

import cv2
import numpy as np
from PIL import Image

ROOT = Path("/Users/philip/src/philsapp-parallax-hero/parallax")
IMG_PATH = ROOT / "storyboard/mt-hood-portland-dawn.png"
MASKS = ROOT / "experiments/eval/masks"
STACK = ROOT / "experiments/eval/stack"
WORK = ROOT / "experiments/eval/flux-tiles"  # scratch: tile inputs/outputs
WORK.mkdir(parents=True, exist_ok=True)

MODEL = str(ROOT / "experiments/eval/flux-model")  # local dir: real Fill
# transformer (offline-quantized 4bit by 14_quantize_fill_transformer.py)
# + vae/t5/clip/tokenizers symlinked from the AC mirror snapshot
PROMPT = (
    "flat vector illustration, layered forested hills receding into dawn mist, "
    "soft atmospheric haze, blue and lavender tones, minimalist landscape"
)
GUIDANCE = 30.0
STEPS = 10           # base M3 is ~50s/step at 2MP-class tiles; 10 steps
                     # keeps soft fill content clean without 3h of compute
SEED = 42

TRAVEL = 220
FEATHER = 4
MARGIN = 96          # context around the fill-zone bbox
MAX_TOKENS = 3600    # (w/16)*(h/16) cap per tile -> split wide strips
GEN_MAX_SIDE = 1024  # generate at reduced res, upscale back (base M3 is
                     # slow at 2MP; fill zones are soft haze/gradient
                     # content, so the upscale is visually free)
TILE_OVERLAP = 160

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


def load_mask(name):
    return np.asarray(Image.open(MASKS / f"{name}.png").convert("L")) > 127


def dilate(m, px):
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * px + 1, 2 * px + 1))
    return cv2.dilate(m.astype(np.uint8), k) > 0


def feather_alpha(m, px):
    a = (m.astype(np.uint8) * 255).astype(np.float32)
    a = cv2.GaussianBlur(a, (0, 0), px)
    return np.clip(a, 0, 255).astype(np.uint8)


def round16(x, up=True):
    q = 16
    return ((x + q - 1) // q) * q if up else (x // q) * q


def build_geometry(img_shape):
    """Returns dicts name -> (owned, fill_zone), replicating 06's logic.

    owned     = front-most-wins ownership after y-band claiming.
    fill_zone = TRAVEL-margin halo behind front layers (claimed-geometry,
                same as 06): pixels this layer's alpha covers but doesn't
                own — i.e. pixels only visible under parallax travel. Those
                are exactly the pixels that need generated content; owned
                pixels keep the original art.
    """
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
        front_union = np.logical_or.reduce(fronts) if fronts else np.zeros((H, W), bool)
        owned = masks[name] & ~dilate(front_union, 2)
        fill_zone = dilate(masks[name], TRAVEL) & dilate(front_union, 8) & ~dilate(masks[name], 2)
        geo[name] = (owned, fill_zone)
    return geo


def tiles_for_zone(fill_zone, W, H):
    """Yield (x0, y0, x1, y1) crop boxes (mult of 16) covering fill_zone."""
    ys, xs = np.where(fill_zone)
    if len(xs) == 0:
        return []
    x0 = max(0, round16(xs.min() - MARGIN, up=False))
    x1 = min(W, round16(xs.max() + MARGIN))
    y0 = max(0, round16(ys.min() - MARGIN, up=False))
    y1 = min(H, round16(ys.max() + MARGIN))
    boxes = []
    while x0 < x1:
        tw = x1 - x0
        while (tw // 16) * ((y1 - y0) // 16) > MAX_TOKENS:
            tw -= 64
        tx1 = min(x1, x0 + tw)
        boxes.append((x0, y0, tx1, y1))
        x0 = tx1 - TILE_OVERLAP if tx1 < x1 else x1
    return boxes


def main():
    t0 = time.time()
    img = Image.open(IMG_PATH).convert("RGB")
    arr = np.asarray(img)
    H, W = arr.shape[:2]
    geo = build_geometry((H, W))

    total_fill = sum(gz.sum() for _, gz in geo.values())
    print(f"total fill pixels: {total_fill}")

    # save BEFORE composites for the report
    for s in (0, 600):
        src = STACK / f"composite-s{s}.png"
        if src.exists():
            Image.open(src).save(WORK / f"composite-s{s}-sdxl-before.png")

    print(f"loading {MODEL} (4bit)...")
    from mflux.models.flux.variants.fill.flux_fill import Flux1Fill

    flux = Flux1Fill(quantize=4, model_path=MODEL)

    names = [n for n, _ in LAYERS]
    for name in names:
        owned, fill_zone = geo[name]
        out_path = STACK / f"layer-{name}.png"
        rgb = arr.copy()

        boxes = tiles_for_zone(fill_zone, W, H)
        print(f"--- {name}: {len(boxes)} tile(s), fill {fill_zone.mean():.2%}")
        if boxes:
            acc = np.zeros((H, W, 3), np.float32)
            wacc = np.zeros((H, W), np.float32)
            for ti, (x0, y0, x1, y1) in enumerate(boxes):
                tw, th = x1 - x0, y1 - y0
                scale = min(1.0, GEN_MAX_SIDE / max(tw, th))
                gw = round16(int(tw * scale), up=False) or 16
                gh = round16(int(th * scale), up=False) or 16
                tile_img = img.crop((x0, y0, x1, y1)).resize((gw, gh), Image.LANCZOS)
                tile_mask = np.asarray(
                    Image.fromarray((fill_zone[y0:y1, x0:x1] * 255).astype(np.uint8)).resize(
                        (gw, gh), Image.NEAREST
                    )
                )
                ip = WORK / f"tile-{name}-{ti}-img.png"
                mp = WORK / f"tile-{name}-{ti}-mask.png"
                tile_img.save(ip)
                Image.fromarray(tile_mask).save(mp)
                t = time.time()
                res = flux.generate_image(
                    seed=SEED,
                    prompt=PROMPT,
                    width=int(gw),
                    height=int(gh),
                    guidance=GUIDANCE,
                    image_path=ip,
                    masked_image_path=mp,
                    num_inference_steps=STEPS,
                )
                out_img = res.image.convert("RGB")
                if (gw, gh) != (tw, th):
                    out_img = out_img.resize((tw, th), Image.LANCZOS)
                out_img.save(WORK / f"tile-{name}-{ti}-out.png")
                print(f"    tile {ti}: {tw}x{th} (gen {gw}x{gh}), {time.time()-t:.0f}s", flush=True)
                out = np.asarray(out_img, np.float32)
                # weight: harvest only fill_zone pixels; ramp in tile overlap
                w = np.zeros((y1 - y0, x1 - x0), np.float32)
                fz = fill_zone[y0:y1, x0:x1]
                w[fz] = 1.0
                if ti > 0:  # ramp up from left edge across the overlap
                    ramp = np.clip((np.arange(x1 - x0) / TILE_OVERLAP), 0, 1)
                    w *= ramp[None, :]
                acc[y0:y1, x0:x1] += out * w[:, :, None]
                wacc[y0:y1, x0:x1] += w
            filled = np.where(
                (wacc > 0)[:, :, None], acc / np.maximum(wacc, 1e-6)[:, :, None], arr
            ).astype(np.uint8)
            rgb[fill_zone] = filled[fill_zone]

        alpha = feather_alpha(owned | fill_zone, FEATHER)
        rgba = np.dstack([rgb, alpha])
        Image.fromarray(rgba, "RGBA").save(out_path)
        print(f"    saved {out_path.name} ({time.time()-t0:.0f}s elapsed)")

    # knock clouds out of the sky layer's alpha (they live in layer-01-clouds)
    sky_p = STACK / "layer-00-sky.png"
    cl_p = STACK / "layer-01-clouds.png"
    if sky_p.exists() and cl_p.exists():
        sky = np.asarray(Image.open(sky_p).convert("RGBA")).copy()
        cl = np.asarray(Image.open(cl_p).convert("RGBA"))[:, :, 3]
        sky[:, :, 3][cl > 60] = 0
        Image.fromarray(sky, "RGBA").save(sky_p)
        print("clouds knocked out of sky alpha")

    # re-apply the ground watermark patch (RGB=original brings it back)
    p = STACK / "layer-11-ground.png"
    rgba = np.asarray(Image.open(p).convert("RGBA")).copy()
    rgba[1088:1135, 8:115] = rgba[1088:1135, 148:255]
    rgba[1130:1152, 30:90] = rgba[1130:1152, 170:230]
    rgba[1015:1088, 40:120] = rgba[1015:1088, 180:260]
    rgba[1080:1120, 105:145] = rgba[1080:1120, 245:285]
    rgba[1112:1152, 100:150] = rgba[1112:1152, 300:350]
    Image.fromarray(rgba, "RGBA").save(p)
    print("watermark patch re-applied")

    # re-render scroll sims with the new layers
    offsets = dict(LAYERS)
    layer_rgba = {n: np.asarray(Image.open(STACK / f"layer-{n}.png").convert("RGBA")) for n in names}
    for scroll in (0, 600):
        comp = np.zeros((H, W, 3), np.float32)
        comp[:] = arr
        for name in names:
            lr = layer_rgba[name].astype(np.float32)
            dy = int(round(scroll * (offsets[name] - 1.0)))
            shifted = np.zeros_like(lr)
            if dy <= 0:
                shifted[: H + dy, :, :] = lr[-dy:, :, :] if dy else lr
            else:
                shifted[dy:, :, :] = lr[: H - dy, :, :]
            a = shifted[:, :, 3:4] / 255.0
            comp = shifted[:, :, :3] * a + comp * (1 - a)
        Image.fromarray(comp.astype(np.uint8)).save(STACK / f"composite-s{scroll}.png")
        print(f"composite-s{scroll}.png re-rendered")

    print(f"done in {(time.time()-t0)/60:.1f} min")


if __name__ == "__main__":
    main()
