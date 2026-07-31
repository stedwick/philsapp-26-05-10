"""Generate a scrollable parallax preview HTML for the extracted stack.

Reads eval/stack/layer-*.png and writes eval/preview/index.html implementing
the Alistair Shepherd --scrollPos technique (same pattern as
parallax/previews/parallax-preview.html).

Run from anywhere:
  python3 05_make_preview.py
"""
from pathlib import Path

from PIL import Image

ROOT = Path("/Users/philip/src/philsapp-parallax-hero/parallax")
STACK = ROOT / "experiments/eval/stack"
PREVIEW = ROOT / "experiments/eval/preview"
PREVIEW.mkdir(parents=True, exist_ok=True)

# back -> front: (layer file stem, --offset)
LAYERS = [
    ("layer-00-sky", 0.95),
    ("layer-01-clouds", 0.94),
    ("layer-02-mountain", 0.90),
    ("layer-03-hills-far", 0.85),
    ("mist-a-behind-city", 0.83),
    ("layer-04-city", 0.80),
    ("layer-05-hill-front-city", 0.70),
    ("mist-b-valley", 0.65),
    ("layer-07-hill-2", 0.60),
    ("layer-08-hill-3", 0.50),
    ("mist-c-near-hills", 0.45),
    ("layer-09-forest-close", 0.40),
    ("layer-10-pines", 0.20),
    ("layer-11-ground", 0.0),
]

# sample the storyboard's top-edge sky color for the reveal band background
sky = Image.open(ROOT / "storyboard/mt-hood-portland-dawn.png").convert("RGB")
r, g, b = sky.getpixel((sky.width // 2, 8))
bg = f"#{r:02x}{g:02x}{b:02x}"

layers_html = "\n".join(
    f'  <div class="landscape__layer" style="--offset:{o}">'
    f'<img src="../stack/{stem}.png" alt=""></div>'
    for stem, o in LAYERS
)

html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Mt Hood Parallax — extracted-layer preview (eval stack)</title>
<style>
  * {{ margin: 0; padding: 0; box-sizing: border-box; }}
  body {{ background: #021935; font-family: system-ui, sans-serif; }}

  .landscape {{
    position: relative;
    height: 100vh;
    overflow: hidden;
    background: {bg}; /* storyboard sky top color for the reveal band */
  }}
  .landscape__layer {{
    position: absolute;
    inset: 0;
    transform: translateY(calc(var(--scrollPos, 0px) * var(--offset, 0)));
  }}
  .landscape__layer img {{
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
    display: block;
  }}
  @media (prefers-reduced-motion: reduce) {{
    .landscape__layer {{ transform: none; }}
  }}

  .content {{
    max-width: 42rem;
    margin: 0 auto;
    padding: 4rem 1.5rem 80vh;
    color: #c3d2ec;
    line-height: 1.7;
  }}
  .content h1 {{ color: #fff; margin-bottom: 1rem; }}
  .content p {{ margin-bottom: 1rem; }}
  code {{ background: rgba(255,255,255,.1); padding: .1em .35em; border-radius: 4px; }}
</style>
</head>
<body>

<div class="landscape" role="img" aria-label="Layered dawn illustration of Mount Hood behind the Portland skyline">
{layers_html}
</div>

<div class="content">
  <h1>Extracted-layer parallax (eval stack + mist)</h1>
  <p>Fourteen layers cut from the actual storyboard: silhouettes segmented with
     SAM, occlusion gaps behind each layer filled by SDXL inpainting, plus three
     semi-transparent mist layers (dehaze-difference extraction) and a separate
     clouds layer. Depth per layer via inline <code>--offset</code>:
     <code>0</code> scrolls with the page (foreground), near <code>1</code> is
     nearly pinned (sky).</p>
  <p>Keep scrolling to feel the layers separate.</p>
</div>

<script>
  const root = document.documentElement;
  let scrollPos;
  function animation() {{
    if (scrollPos !== window.scrollY) {{
      scrollPos = window.scrollY;
      root.style.setProperty('--scrollPos', scrollPos + 'px');
    }}
    window.requestAnimationFrame(animation);
  }}
  window.requestAnimationFrame(animation);
</script>

</body>
</html>
"""

(PREVIEW / "index.html").write_text(html)
print("wrote", PREVIEW / "index.html", "| reveal bg:", bg)
