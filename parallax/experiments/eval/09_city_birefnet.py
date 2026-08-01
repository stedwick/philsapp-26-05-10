"""Polish pass (a2): city skyline via BiRefNet (salient segmentation).

SAM keeps failing on the skyline (haze-on-haze, towers same color as the
mist behind them). BiRefNet is a salient-object segmenter; on a tight crop
of the skyline band the towers ARE the salient structure.

Crops the skyline band, upscales 2x, runs BiRefNet, pastes the mask back
into canvas coords. Saves candidates at several thresholds + overlays.

Run from parallax/experiments/parallax-maker:
  .venv/bin/python ../eval/09_city_birefnet.py
"""
from pathlib import Path

import numpy as np
import torch
from PIL import Image
from torchvision import transforms
from transformers import AutoModelForImageSegmentation

ROOT = Path("/Users/philip/src/philsapp-parallax-hero/parallax")
IMG_PATH = ROOT / "storyboard/mt-hood-portland-dawn.png"
OUT = ROOT / "experiments/eval/masks/recut-city"
OUT.mkdir(parents=True, exist_ok=True)

# skyline band in 2048x1152 canvas coords (generous, includes bridge)
CROP = (380, 480, 1950, 680)  # left, top, right, bottom

tf = transforms.Compose(
    [
        transforms.Resize((1024, 1024)),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225]),
    ]
)


def main():
    img = Image.open(IMG_PATH).convert("RGB")
    crop = img.crop(CROP)
    cw, ch = crop.size
    big = crop.resize((cw * 2, ch * 2), Image.LANCZOS)

    print("loading BiRefNet...")
    model = AutoModelForImageSegmentation.from_pretrained(
        "ZhengPeng7/BiRefNet", trust_remote_code=True
    )
    device = "mps" if torch.backends.mps.is_available() else "cpu"
    model.to(device).eval()

    x = tf(big).unsqueeze(0).to(device)
    with torch.no_grad():
        preds = model(x)[-1].sigmoid().cpu()
    prob = preds[0].squeeze().numpy()  # 1024x1024, 0..1

    # back to crop coords, then canvas coords
    prob_crop = np.asarray(
        Image.fromarray((prob * 255).astype(np.uint8)).resize((cw, ch), Image.LANCZOS)
    ).astype(np.float32) / 255.0

    W, H = img.size
    canvas_prob = np.zeros((H, W), np.float32)
    canvas_prob[CROP[1] : CROP[3], CROP[0] : CROP[2]] = prob_crop

    Image.fromarray((canvas_prob * 255).astype(np.uint8)).save(OUT / "birefnet-prob.png")

    arr = np.asarray(img)
    for t in (0.35, 0.5, 0.65):
        m = canvas_prob > t
        Image.fromarray((m * 255).astype(np.uint8)).save(OUT / f"birefnet-t{int(t*100)}.png")
        overlay = arr.copy()
        overlay[m] = (0.5 * overlay[m] + 0.5 * np.array([255, 0, 0])).astype(np.uint8)
        Image.fromarray(overlay).save(OUT / f"overlay-birefnet-t{int(t*100)}.png")
        print(f"t={t}: coverage {m.mean():.2%}")


if __name__ == "__main__":
    main()
