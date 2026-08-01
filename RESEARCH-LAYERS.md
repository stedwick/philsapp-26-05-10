# Parallax Layers — Deep Research (scratch, do not commit)

Phase 2 research: how to cut `parallax/storyboard/mt-hood-portland-dawn.png`
(2048×1152 flat AI-generated dawn scene: Mt. Hood alpenglow, Portland skyline,
layered forested hills, framing pines, mist between layers) into ~12 depth
layers for the scroll-parallax hero, with mist as separable layers.

Target layer stack (Philip's list, back to front):
sky → clouds → mountain → rolling hills behind city → city → hill in front of
city → valley of clouds/stream → second hill → third nearer hill → close tree
layer → very close framing pines → rocky foreground. Plus inserted mist between
many layers.

---

## 0. Why the two previous attempts failed

### Attempt 1 — Python cutouts (`scripts/analyze.py`, `build_layers.py`, `build_image_layers.py`, `detect_hood.py`)

Approach: k-means color clustering of the image → assign clusters to layers →
model each layer as a 1D "curtain": a top edge y(x) with a 4px alpha ramp,
then **solid to the bottom of the canvas**. `composite-img.png` looks identical
to the storyboard because it *is* the storyboard's pixels over-composited.

Failure modes:

1. **Layers contain ghost copies of everything in front of them.** Each back
   curtain physically includes the pixels of every nearer layer (that's how the
   composite reproduces the original exactly). The moment a layer slides in
   parallax, it drags a duplicate copy of the city/forest/mountain baked inside
   it → double images, tearing. The script's own comment admits the constraint:
   "scrolling only ever reveals bands visible in the original (front layers
   only slide *down*)" — i.e., it only works if layers barely move, which
   defeats the purpose. This is the core "looked too flat / falls apart when
   moved" problem: **no occlusion fill existed, so the design compensated by
   duplicating content, which breaks under motion.**
2. **1D curtain edges can't represent the scene.** Framing pines overlap hills
   at many x positions; the mountain sits inside the sky; mist weaves between
   ridges. A single y(x) function per layer can't express any of that.
3. **K-means color clustering conflates regions** (pink alpenglow snow ≈ pink
   horizon band ≈ mist), so the pipeline needed hand-picked cluster indices,
   per-layer `y_min` hacks, and a bespoke hand-rolled edge detector just for
   the mountain (`detect_hood.py` + `hood_edge_debug*.png`). Brittle, and the
   edges were still stair-stepped label boundaries.
4. **Mist is baked into the bands** — it can't move as its own layer.

### Attempt 2 — AI image generation layer-by-layer (`storyboard/Kimi_Agent_Mountain Extraction Request/`, `assets/generated-layers/`)

Approach: prompt an image generator for each layer separately ("isolated
Portland skyline, transparent background", etc.).

Failure modes:

1. **Redrawing, not extraction.** The "isolated" skyline is a flat solid
   purple silhouette with different buildings than the storyboard; the
   "isolated" mountain has different snow detail, different silhouette, and a
   huge solid base that doesn't exist in the original. Regeneration cannot
   preserve exact silhouettes, internal texture, or palette.
2. **Layers don't match each other or the composition.** Proto 1 composited
   into a nice painting (evaluator: 90/100) but it is a *different painting* —
   different mountain, purple hill, different skyline. Philip wants THIS image,
   sliced.
3. Generator watermark (`AI生成`) burned into every image; mist layers came
   out near-white and had to be retoned. More manual repair per layer.

**Lesson that frames all options below:** the correct pipeline shape is
*segment the real pixels* (so silhouettes and texture are the storyboard's own)
*+ inpaint the occluded content* (so layers can actually slide) — Philip's
guess is exactly what the research converges on.

---

## 1. What the 2.5D/parallax community actually does

- **After Effects / Photoshop manual workflow** (the canonical "2.5D photo
  effect"): pen-trace each element → cut to layer → expand selection →
  Content-Aware Fill the hole → clone-stamp cleanup → import PSD into AE,
  spread layers in Z, animate camera. Documented by
  [Motion Array](https://motionarray.com/learn/after-effects/animate-flat-2d-images-after-effects/),
  [PetaPixel/McKinnon](https://petapixel.com/2017/08/09/give-still-photos-2-5d-parallax-effect-photoshop/),
  GIMP/Blender variant at
  [DIY Photography](https://www.diyphotography.net/2-5d-parallax-animated-photo-effect-using-free-software/)
  ("All of them suck. There is no fast and easy method of doing this well").
  Consensus: hours per image for a few layers; 12 layers = days. **This is the
  quality bar, not a practical method.**
- **Game dev / Firewatch-style sites**: layers are *drawn separately from
  scratch*, back to front — never sliced from a flat image
  ([GameMaker blog](https://gamemaker.io/blog/creating-depth-and-immersion-parallax)).
  Alistair Shepherd's landscape was painted as separate raster layers by an
  artist, then vectorized. (Disney's 1937 multiplane camera worked the same
  way: art authored per plane.)
- **Facebook 3D Photos**: neural depth + LDI inpainting, output locked in the
  FB feed — no layer export. Dead end.
- **depthy** ([panrafal/depthy](https://github.com/panrafal/depthy), 2014):
  depth-map-driven parallax in browser; outputs depth map + GIF, not color
  layers. Hosted app effectively dead.
- **Immersity AI** (formerly LeiaPix, [immersity.ai](https://immersity.ai/)):
  cloud 2D→3D depth animation; **does export the grayscale depth map** (their
  own tutorials pitch it for Photoshop depth segmentation). $4.99/mo tier
  un-watermarks. A cheap depth-map source, not a layer splitter.
- **Research line** (Shih et al. CVPR 2020
  [3d-photo-inpainting](https://github.com/vt-vl-lab/3d-photo-inpainting), MIT;
  Niklaus [3D Ken Burns](https://sniklaus.com/kenburns)): RGB + depth → layered
  depth image with **context-aware inpainting of occluded content** → parallax
  video. The concept is exactly right (inpaint what's *behind* each layer,
  back to front) but the code is CUDA-locked, 2020-era PyTorch, and its
  bundled EdgeConnect inpainting is CC-BY-NC. **Run the idea, not the code.**
  2023–25 successors (SceneScape, LucidDreamer, GenWarp, CAT3D…) target 3D
  video synthesis — overkill, CUDA-assumed.

**Nobody — community or commercial — turns a flat painterly image into 12
crisp depth layers with one click.** Every credible pipeline is
"segmentation/depth + occlusion inpainting" with manual cleanup expected.

---

## 2. Building blocks (with licenses + Mac feasibility)

### Cutting (segmentation)

- **SAM 2.1** ([facebookresearch/sam2](https://github.com/facebookresearch/sam2),
  **Apache-2.0** code+weights). Box/point prompts per region → crisp masks;
  runs on Apple Silicon via PyTorch **MPS** (`PYTORCH_ENABLE_MPS_FALLBACK=1`);
  community CoreML ports exist. Masks slightly coarse on wispy edges → refine
  with **HQ-SAM** ([SysCV/SAM-HQ](https://github.com/SysCV/SAM-HQ), Apache-2.0)
  or BiRefNet. SAM was evaluated on paintings/art and holds up.
- **BiRefNet** ([ZhengPeng7/BiRefNet](https://github.com/ZhengPeng7/BiRefNet),
  **MIT**): SOTA high-res (2048²) dichotomous segmentation, one-line HF load,
  MPS. Binary subject/bg → one pass per layer against cropped regions; best
  full-res edge refiner. (Avoid BRIA RMBG-2.0: non-commercial gated.)
- **ViTMatte** ([hustvl/ViTMatte](https://github.com/hustvl/ViTMatte), MIT):
  trimap-driven true fractional alpha — the standard for tree-fringe and soft
  edges. **Matte Anything** ([hustvl/Matte-Anything](https://github.com/hustvl/Matte-Anything),
  MIT) chains GroundingDINO→SAM→ViTMatte: text-prompt a layer, get a soft matte.
- **Grounded-SAM-2** ([IDEA-Research](https://github.com/IDEA-Research/Grounded-Segment-Anything),
  Apache-2.0): free-text prompts ("mountain", "city skyline", "pine trees").
  Trained on photos; hit-or-miss on illustrated scenes — worth one experiment,
  but manual box prompts into SAM 2.1 are more predictable.
- **Semantic segmentation** (OneFormer/Mask2Former/SegFormer on ADE20K — classes
  include `sky`, `mountain`, `hill`, `tree`, `building`, `skyscraper`, `rock`,
  `earth`): labels for free, but trained on photos → 40–70% accuracy and jagged
  edges on painterly art. Coarse initialization only.

### Depth (ordering + band assignment)

- **Depth Anything V2-Small** ([repo](https://github.com/DepthAnything/Depth-Anything-V2)):
  Small is **Apache-2.0** (Base/Large are CC-BY-NC — avoid); **official Apple
  CoreML port** ([apple/coreml-depth-anything-v2-small](https://huggingface.co/apple/coreml-depth-anything-v2-small),
  ~25 ms on M-series ANE). Best-supported depth model on Mac.
- **Depth Anything 3** (Nov 2025, [ByteDance-Seed](https://github.com/bytedance-seed/depth-anything-3)):
  DA3Mono-Large is **Apache-2.0** and beats DA2 monocularly. New SOTA worth
  testing. No CoreML yet; MPS with fallback.
- **Apple Depth Pro** ([apple/ml-depth-pro](https://github.com/apple/ml-depth-pro)):
  sharpest depth edges, Mac-native — but restrictive Apple license; fine as
  internal tooling only.
- **Marigold** ([prs-eth](https://github.com/prs-eth/Marigold), Apache-2.0):
  finest detail, slower, diffusers/MPS.
- Known failure modes for depth-banding THIS image: sky saturates to "far" and
  merges with the mountain (needs separate sky mask — trivial with SAM); mist
  reads as a depth gradient and smears across band boundaries (a feature for
  soft transitions, not for crisp silhouettes); framing pines and foreground
  rocks share a depth band; city vs. its hill collapse into one band.
  **Conclusion: depth map = ordering guide + sanity check; SAM-family masks =
  the actual cuts.** Hybrid beats either alone.

### Occlusion fill / extension (inpainting & outpainting)

- **LaMa** ([advimman/lama](https://github.com/advimman/lama), WACV 2022,
  **Apache-2.0**): built for large masks, deterministic, ~10–30 s/image on Mac
  CPU (MPS unreliable for its TorchScript; CoreML port exists). Easiest via
  [`simple-lama-inpainting`](https://pypi.org/project/simple-lama-inpainting/)
  or **IOPaint** ([Sanster/IOPaint](https://github.com/Sanster/IOPaint),
  Apache-2.0, explicit Apple Silicon support, batch CLI:
  `iopaint run --model=lama --device=cpu --image=… --mask=…`; also bundles
  LDM/ZITS/MAT + SD-inpaint + PowerPaint + a SAM plugin). Excellent on
  gradients, mist, foliage texture, simple ridgelines; blurs on large
  *semantic* holes — much less visible in flat-art than in photos.
- **FLUX.1 Fill [dev]** ([HF](https://huggingface.co/black-forest-labs/FLUX.1-Fill-dev)):
  quality ceiling for semantic fills (ridgeline continuing behind skyline,
  trees behind pines) and outpainting; best prompt-following → best shot at
  style-matching ("flat vector-style dawn landscape, layered forested hills,
  soft mist"). **Non-commercial weights license; BFL says outputs are usable
  personally/commercially** — fine for a personal site, re-read the license if
  ever monetized. Mac paths: **mflux** ([filipstrand/mflux](https://github.com/filipstrand/mflux),
  native MLX, inpaint+outpaint, quantized, CLI — most scriptable), diffusers
  `FluxFillPipeline` on MPS (32 GB+ ideally), Draw Things (free GUI, hand-
  polishing), ComfyUI (API-scriptable).
- **SD 1.5 / SDXL inpaint** (OpenRAIL, permissive): middle option via
  diffusers/MPS or IOPaint; more edge color-mismatch tuning than Flux.
- **Classical** (OpenCV Telea/NS; GIMP Resynthesizer/PatchMatch, GPL): only
  for hairline seams and small feather fixes; no semantic fill.
- Outpainting practice: extend in ~256–512 px strips with overlap; feather/
  dilate masks ~12 px; composite **only the masked region** back to avoid
  global color drift; color-match at seams (e.g. Acly/comfyui-inpaint-nodes).
- Benchmarks: [COCO-Inpaint](https://arxiv.org/html/2504.18361v2) and
  [arXiv 2510.03317](https://www.arxiv.org/pdf/2510.03317) treat Flux Fill as
  the quality reference, LaMa as the deterministic workhorse.

### Mist / haze (topic e)

- **Extract the real mist**: Photoshop's Dehaze is a physical transmission
  model and runs bidirectionally; as of Photoshop 2026 it's a maskable
  adjustment layer. Recipe: copy → strong Dehaze → Difference blend → the
  difference IS the haze field → luminance→alpha, tint pale blue/peach. The
  arithmetic is trivially scriptable in numpy (subtract a dehazed version;
  OpenCV has no Dehaze but dark-channel-prior dehazing is ~30 lines, and
  simple contrast/saturation boosts approximate it for difference purposes).
  Apply per depth band → between-hills mist PNGs from the image's own content.
- **Procedural / shipped-web fog**: semi-transparent fog PNGs parallaxing
  between layers; CSS gradient haze strips above each hill; SVG `feTurbulence`
  noise for texture. Fog/grain on top also glues composite seams (Motion
  Array's 2.5D tutorial recommends exactly that).
- **Painting tradition**: bake atmospheric perspective INTO each hill layer
  (farther = lighter/bluer/lower contrast) — already true of this storyboard —
  plus 1–2 separate drifting mist layers for actual motion.
- **Recommended hybrid**: bake band haze into hill layers; extract 2–3 real
  mist layers (behind city, valley clouds/stream, between near hills) as
  semi-transparent PNGs.

### Vectorization (finishing tool)

- vtracer ([visioncortex/vtracer](https://github.com/visioncortex/vtracer),
  free/local) or Vectorizer.AI/Vector Magic (paid, quality leaders): per-color
  SVG shapes are NOT depth layers, but after cutting, vectorizing a layer
  gives razor-sharp edges and tiny files — the Shepherd approach. Optional
  finishing pass, not a splitter.

---

## 3. Ranked options for THIS image

### Option 1 — Turnkey-ish: `parallax-maker` (try first, ~hours)

[provos/parallax-maker](https://github.com/provos/parallax-maker) (2024, free,
open source, local web UI, runs on Mac). It IS the AE-manual workflow
automated: depth (MiDaS/ZoeDepth/DINOv2) or **SAM point-click segmentation** →
cut layer "cards" → **inpaint occluded regions** (LaMa/SDXL via pluggable
backends) → per-layer PNGs + glTF scene.

- Steps: install → load dawn storyboard → click-prompt SAM for each of the ~12
  regions (sky, clouds, mountain, each ridge, city, pines, ground) → let it
  inpaint behind each cut → export PNG cards → evaluate composite + scroll sim.
- Why this image suits it: flat-shaded painterly bands segment cleanly; SAM
  handles illustrated art; hidden content is mostly soft hills/haze — LaMa's
  sweet spot.
- Risks: hobbyist-grade project (rough edges, may need fixes); inpaint backend
  config (A1111/ComfyUI) on Mac may need tweaking; mist still needs the
  separate extraction trick (§2).
- Effort: half a day to evaluate. If it produces 8/12 good layers, fix the
  rest manually per Option 2's tools.

### Option 2 — DIY hybrid pipeline (highest expected quality, 1–3 days)

Philip's guess, validated by all three research threads. Fully scriptable
Python on this Mac; no CUDA anywhere.

1. **Depth map**: Depth Anything V2-Small (official Apple CoreML, Apache-2.0)
   or DA3Mono-Large (Apache-2.0, SOTA). Use for global ordering and resolving
   "which ridge is in front of which" — never as the cutter.
2. **Sky mask** first (SAM one click) — depth models merge sky and mountain.
3. **Cut each layer with SAM 2.1 (MPS) box/point prompts** — one prompt per
   region (12 layers ≈ 15–25 prompts). Refine edges at full 2048² with
   **BiRefNet** (MIT) per cropped region; **ViTMatte** on tree fringes for
   fractional alpha. Optionally try Grounded-SAM-2 text prompts once to see if
   "mountain"/"city skyline"/"pine trees" auto-detect on this illustration.
4. **Inpaint back-to-front, LDI-style** (the Shih et al. idea, modern tools):
   for each layer from farthest to nearest, mask the region occluded by all
   nearer layers + a dilation margin and fill it — **LaMa via IOPaint batch
   CLI** (Apache-2.0, CPU) as default; escalate the 2–3 hardest semantic holes
   (hills behind the skyline, forest behind framing pines) to **FLUX.1 Fill
   via mflux (MLX)** prompted with the original art's style words.
5. **Outpaint** each layer horizontally past the frame edges (and vertically
   where parallax travel demands) in ~256–512 px strips — LaMa for hill/mist
   bands (zero style drift), Flux Fill where new structure is needed.
   Composite masked-region-only; color-match seams.
6. **Mist**: extract 2–3 semi-transparent mist PNGs via the Dehaze-difference
   trick (numpy; mask per depth band); bake remaining haze into hill layers.
7. Optional finishing: vtracer any layer that needs SVG-crisp edges; convert
   finals to WebP.

- Quality ceiling: the AE-manual bar, automated ~90%. Every pixel of visible
  art is the storyboard's own; only hidden content is synthesized.
- Effort: 1–2 days scripting + iteration, plus manual polish on a few layers
  (Draw Things / Krita AI for hand fixes).
- License note: everything above is Apache/MIT except Flux Fill (non-commercial
  weights, outputs usable) — or substitute SDXL-inpaint to stay fully
  permissive.

### Option 3 — Cloud black box: imagetolayers.com (30 minutes to evaluate)

[imagetolayers.com](https://www.imagetolayers.com/solutions/landscape-into-layers)
advertises exactly "landscape into layers" with generative inpainting →
layered PNG/PSD. Free test tier, then credits.

- Steps: upload storyboard → download layered PSD → inspect.
- Value: instant baseline; if it's good, it collapses Option 2 to mist
  extraction + wiring. Proprietary SaaS, unknown quality on painterly mist,
  per-image credits, and Philip's assets leave the machine (privacy-first
  instinct says this is a test-only tool, not the pipeline).
- Also-rans checked and dismissed: Codia Magic Layers / llamagen.ai / Figma AI
  separator (object-oriented splitters — depth strata aren't "objects");
  layerdivider ([mattyamonaca/layerdivider](https://github.com/mattyamonaca/layerdivider),
  CIEDE2000 color clusters → PSD — basically a better k-means; worth a cheap
  shot since color bands ≈ depth bands here, but it repeats attempt 1's core
  weakness: no occlusion fill).

### Option 4 — Manual AE/Photoshop workflow (quality bar / fallback polish)

Pen-trace, cut, Content-Aware Fill, clone stamp — days of manual work for 12
layers, but it defines "done". Practically: use it as the *polish* stage for
whatever Options 1–3 get wrong (2–3 layers), via Photoshop/Affinity/Krita +
Generative Fill. Draw Things (free, Mac) covers the Flux Fill part locally.

### Option 5 — Sidestep: don't extract — regenerate the art as layers (what proto 1 did)

Have an artist (or the AI generator, carefully, or Philip's proto 1 at 90/100)
author the scene as separate layers from scratch — the way the entire
Firewatch/web community actually does it. Not "this image sliced", but proto 1
already exists and scored well. Include in the decision because it may be the
right cost/benefit answer if fidelity-to-storyboard is negotiable. (Philip's
brief implies it is not negotiable, so this ranks last.)

---

## 4. Recommendation

1. **Spend half a day on Option 1** (`parallax-maker`) — cheapest path to a
   real layered set; its output either ships (after Option 4 polish + mist
   extraction) or becomes the segmentation baseline for Option 2.
2. **In parallel, spend 30 minutes on Option 3** (imagetolayers.com free tier)
   as a black-box baseline to compare against.
3. **If neither clears the bar, build Option 2** — SAM 2.1 + BiRefNet/ViTMatte
   cuts, Depth Anything for ordering, LaMa → Flux Fill inpainting,
   Dehaze-difference mist. Every component is confirmed Mac-local and
   permissively licensed (Flux Fill excepted, outputs OK).
4. Whichever path wins: mist = 2–3 extracted semi-transparent PNGs between key
   layers + haze baked into hills; keep manual polish budget for 2–3 layers.

Open questions for Philip:
- OK to upload the storyboard to imagetolayers.com (Option 3 test) given
  privacy-first preference?
- Flux Fill's non-commercial weights OK for generating assets for a personal
  site, or should we constrain to Apache/MIT models only (LaMa/SDXL)?
- Is fidelity to the exact storyboard non-negotiable (rules out Option 5), and
  is proto 1's 90/100 painting officially dead as a fallback?
- How much parallax travel do layers need? (Determines outpaint margins in
  step 5 of Option 2 — more travel = more hallucinated content required.)
