# Parallax Hero — Mt. Hood & Portland

Everything for the Firewatch-style layered parallax hero, self-contained.
Nothing here is wired into the Astro site yet; this directory holds the
assets, prototypes, evaluation history, and the full regeneration pipeline.

## The technique

Vanilla CSS/JS, no library (the Alistair Shepherd approach):

- One `requestAnimationFrame` loop writes `window.scrollY` into a
  `--scrollPos` CSS custom property.
- Each layer is a full-bleed `<img>` with
  `transform: translateY(calc(var(--scrollPos) * var(--offset)))`.
- `--offset` sets depth per layer: `0` scrolls with the page (foreground),
  values toward `1` appear nearly pinned (sky). Gaps between adjacent
  offsets create perceived physical distance.
- Layers are bottom-anchored with `object-fit: cover; object-position: bottom`
  and `prefers-reduced-motion` disables the effect.

Reference: https://alistairshepherd.uk/writing/parallax-svg-landscape-1/

## Prototypes

| | Prototype 1 | Prototype 2 |
|---|---|---|
| Preview | `previews/parallax-preview.html` | `previews/parallax-preview2.html` |
| Assets | `assets/proto1-final/` | `assets/proto2/` |
| Source art | AI-generated layer-by-layer (`assets/generated-layers/`) | Hand-off extraction set (`storyboard/Kimi_Agent_Mountain Extraction Request/`) |
| Canvas | 2048×820 (2.5:1) | 2048×1024 (2:1) |
| Hero height | 75vh | 100svh (full page above the fold) |
| Evaluator score | **90/100** (68 → 87 → 90) | not yet scored |
| Palette | close to dawn reference | softer, dreamier (pink mist, teal forests) |

Open either preview HTML directly in a browser and scroll.

**Framing rule learned the hard way:** bottom-anchored `cover` scaling crops
the *top* of the artwork whenever the viewport is wider than the layer
canvas aspect ratio. The canvas must be at least as wide (aspect-wise) as
the widest expected viewport — that's why both prototypes use wide canvases
instead of the layers' native 3:2.

## Directory map

```
storyboard/    Source art. The three storyboard concepts (sunset/dawn/midday;
               dawn was chosen) and the independently produced extraction set.
assets/
  proto1-final/     Prototype 1 ship candidate. 11 PNG layers, 2048×820.
  proto2/           Prototype 2. 10 PNG layers (01-sky … 10-ground), 2048×1024.
                    01-sky.png was generated here; 02–10 are reframed copies
                    of the extraction set (mountain centered unstretched,
                    bands stretched horizontally).
  generated-layers/ Raw AI layer generations (1536×1024, transparent bg).
  webp-cutouts/     Superseded: layers cut from the storyboard by color
                    segmentation (perfect registration, looked too flat).
  svg-layers/       Superseded: hand-traced SVG silhouette version.
previews/      Standalone HTML parallax previews (open via file://).
scripts/       The full pipeline plus every composite/eval/screenshot artifact.
```

## Scripts (run from repo root, managed Python)

In pipeline order for prototype 1:

1. `scripts/analyze.py` — k-means color clustering of the dawn storyboard;
   writes `labels.npy` / `centers.npy`.
2. `scripts/build_layers.py` — SVG silhouette layers (superseded approach).
3. `scripts/build_image_layers.py` — WebP cutout layers (superseded).
4. AI layer generation — done via the `image_generation` plugin, one
   transparent PNG per layer (see prompts in session history; rate limit
   is ~1 request / 10 s, HTTP 424 means back off).
5. `scripts/reframe_v2.py` — recompose generated 3:2 layers onto the wide
   2048×820 canvas: bands placed by silhouette-top targets, Mt. Hood
   uniform-scaled with its apex at 21% height. Also emits
   `composite-final.png` and a 1400×568 browser-crop simulation.

Prototype 2 staging was scripted inline (see session history): copy the
extraction set with depth-order prefixes, build `01-sky.png` from the dawn
storyboard's far-left sky column (includes the pink horizon band), reframe
to 2048×1024.

`detect_hood.py` and the `hood_edge_debug*.png` files document the mountain
silhouette edge-detection work used by the superseded pipelines.

## Evaluation

Scores came from an evaluator sub-agent comparing browser screenshots
(agent-browser, session `philip-parallax-eval`) of the scroll-0 hero against
`storyboard/mt-hood-portland-dawn.png`, rubric: structure 40 / color 30 /
separation 20 / craft 10. Screenshot history: `eval-*.png` (68/100),
`eval2-*.png` (87/100), `eval3-*.png` (90/100).

## Gotchas

- The image generator burns an `AI生成` watermark into the bottom-left of
  every image; `watermark_patch()` in the reframe scripts paints it over
  with neighboring pixels. Re-check if new layers are generated.
- AI-generated "mist" layers can come out near-white; prototype 1's
  mist-hills had to be retoned to steel blue (`#224d87` → `#6a92c4`).
- HTTP 424 from the generator = rate limited; serialize calls with ~10 s
  sleeps, longer after a failure.

## Next step (not done yet)

Wire a prototype into the site as a `ParallaxHero.astro` component:
convert layers to WebP, port the preview's rAF/`--scrollPos` script, and
route container colors through the `--color-surface*` custom properties so
dark mode behaves (see `AGENTS.md` theming rules).
