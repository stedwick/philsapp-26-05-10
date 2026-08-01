"""Polish pass (a): re-cut the city skyline mask properly.

Pass 1/03 used point prompts only; SAM kept losing the low-contrast
haze-on-haze towers. This script uses BOX prompts (much stronger prior for
a contiguous skyline band) plus point prompts, runs several variants with
multimask output, and saves every candidate + overlay for visual pick.

Run from parallax/experiments/parallax-maker:
  .venv/bin/python ../eval/08_recut_city.py
"""
from pathlib import Path

import numpy as np
import torch
from PIL import Image
from transformers import SamModel, SamProcessor

ROOT = Path("/Users/philip/src/philsapp-parallax-hero/parallax")
IMG_PATH = ROOT / "storyboard/mt-hood-portland-dawn.png"
OUT = ROOT / "experiments/eval/masks/recut-city"
OUT.mkdir(parents=True, exist_ok=True)

# 2048x1152 coords. Main tower cluster + faint low strips + bridge.
BOX_MAIN = [620, 492, 1510, 662]
BOX_LEFT_STRIP = [400, 600, 700, 660]
BOX_BRIDGE = [1560, 585, 1850, 670]

POS = [(1014, 545), (1235, 550), (890, 575), (1380, 585), (760, 590)]
NEG = [(983, 370), (1024, 150), (900, 700), (614, 573), (1800, 800)]


def run_sam(model, processor, img, boxes=None, pos=None, neg=None, label=""):
    kwargs = {}
    if boxes:
        kwargs["input_boxes"] = [boxes]
    if pos or neg:
        pts = (pos or []) + (neg or [])
        labels = [1] * len(pos or []) + [0] * len(neg or [])
        kwargs["input_points"] = [[pts]]
        kwargs["input_labels"] = [[labels]]
    inputs = processor(img, return_tensors="pt", **kwargs)
    inputs = inputs.to(torch.float32).to(model.device)
    with torch.no_grad():
        outputs = model(**inputs, multimask_output=True)
    masks = processor.image_processor.post_process_masks(
        outputs.pred_masks.cpu(),
        inputs["original_sizes"].cpu(),
        inputs["reshaped_input_sizes"].cpu(),
    )[0]  # (num_boxes, 3, H, W)
    scores = outputs.iou_scores.cpu()[0].numpy()  # (num_boxes, 3)
    masks = masks.cpu().numpy() if hasattr(masks, "cpu") else np.asarray(masks)
    n = masks.shape[0] * masks.shape[1]
    masks = masks.reshape(n, *masks.shape[2:])
    scores = scores.reshape(n)
    return masks, scores


def save_candidate(img, mask_bool, tag, score):
    m = (mask_bool * 255).astype(np.uint8)
    Image.fromarray(m).save(OUT / f"{tag}.png")
    overlay = np.asarray(img).copy()
    overlay[mask_bool] = (
        0.5 * overlay[mask_bool] + 0.5 * np.array([255, 0, 0])
    ).astype(np.uint8)
    Image.fromarray(overlay).save(OUT / f"overlay-{tag}.png")
    print(f"  {tag}: coverage {mask_bool.mean():.2%}, iou {score:.3f}")


def main():
    img = Image.open(IMG_PATH).convert("RGB")
    print("loading SAM vit-huge...")
    model = SamModel.from_pretrained("facebook/sam-vit-huge").to(
        "mps" if torch.backends.mps.is_available() else "cpu"
    )
    processor = SamProcessor.from_pretrained("facebook/sam-vit-huge")

    variants = [
        ("box-main", dict(boxes=[BOX_MAIN])),
        ("box-3", dict(boxes=[BOX_MAIN, BOX_LEFT_STRIP, BOX_BRIDGE])),
        ("pts-only-multimask", dict(pos=POS, neg=NEG)),
    ]
    for tag, kw in variants:
        print(f"--- {tag}")
        masks, scores = run_sam(model, processor, img, **kw)
        for i in range(masks.shape[0]):
            save_candidate(img, masks[i] > 0, f"{tag}-m{i}", scores[i])


if __name__ == "__main__":
    main()
