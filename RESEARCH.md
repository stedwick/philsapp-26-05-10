# Parallax Hero — Research Summary (scratch, do not commit)

Phase 1 research for the `parallax-hero` feature. No code changes made.

Sources:
- [Parallax SVG Landscape, part 1 — Alistair Shepherd](https://alistairshepherd.uk/writing/parallax-svg-landscape-1/)
- [Parallax SVG Landscape, part 2 (colour themes + sun) — Alistair Shepherd](https://alistairshepherd.uk/writing/parallax-svg-landscape-2/)
- [Rellax.js — Dixon & Moe](https://dixonandmoe.com/rellax/)

## 0. How the hero works today

- `src/components/Hero.astro` renders `<section class="c-hero">` at `min-height: 100svh` with a photographic background (`hero-sm/md/lg.jpg`, 576/1200/2048px wide, progressive JPEGs, 20–64 KB) applied via inline custom properties `--hero-image-sm/md/lg` and switched in media queries (`src/styles/global.css:281`, `:943`, `:965`).
- Content (portrait, h1 name, role, tagline, socials, CTA, "scroll" hint) sits in a 3-row grid (`.c-hero__grid`), centered, light text over the dark photo (`background-color: var(--color-dark)` fallback).
- There is already a crude "parallax" effect: `background-attachment: fixed` on `(pointer: fine) and (hover: hover)` (`global.css:976`) — the photo stays pinned while content scrolls over it. This is the thing a real layered parallax would replace or augment.
- Hero image paths come from the `assets` collection via `src/data/resume-data.mjs` (`heroImages: { sm, md, lg }`).
- Theming: the site has no manual dark toggle; dark mode is one `@media (prefers-color-scheme: dark)` block (`global.css:102`). The hero currently ignores dark mode entirely — it's always a dark photo with light text, which is safe. Any new layers must use custom properties with dark variants per AGENTS.md ("never hardcode hex colors").
- Reduced motion: the site currently has **no** `prefers-reduced-motion` handling anywhere.

## (a) Rellax.js — how it works, and what Astro integration looks like

- Tiny library (~3 KB min+gz). Markup-driven: add class `rellax` and optional `data-rellax-speed="-10..10"` (negative = slower than scroll, positive = faster; default `-2`). Extras: `data-rellax-percentage` / `center: true` for viewport centering, `data-rellax-zindex`, responsive speeds (`data-rellax-mobile-speed` etc. with a `breakpoints` option), `wrapper`, `horizontal`, `rellax.refresh()` / `rellax.destroy()`.
- Internally: rAF loop + `transform: translate3d`, so it stays on the compositor thread; positions are computed from element offset relative to scroll.
- Init: `new Rellax('.rellax')` once on page load.
- Astro integration options:
  1. **npm package** (`bun add rellax`) + an Astro `<script>` in `Hero.astro`: Astro bundles the script, so `import Rellax from 'rellax'; if (!matchMedia('(prefers-reduced-motion: reduce)').matches) new Rellax('.rellax');` — clean, typed-ish, one small bundle.
  2. **Script tag** with a vendored `rellax.min.js` in `public/` — avoids a dependency but loses bundling; not recommended.
- Important: **Rellax does not handle `prefers-reduced-motion` itself.** You must gate initialization (or call `destroy()`) based on `matchMedia`, and ideally listen for changes. Rellax sets inline `transform` styles, so a CSS media-query override would need `!important` — gating the JS init is cleaner.

## (b) Layered-SVG parallax landscape — how it works, and what it needs

Technique (Shepherd part 1):

- Artwork is split into N layers (his: 10), each an **SVG with an identical `viewBox`** (his: `0 0 4000 1000`), absolutely stacked inside an `overflow: hidden` container (`height: 75vh`, `position: relative`). Each layer sits bottom-center via flexbox wrappers; `role="img"` + `aria-label` on the container since the whole thing is a fancy image.
- The author tried CSS `perspective`/`translateZ` first (the "correct" GPU approach) and abandoned it after two weeks: Firefox `preserve-3d` propagation issues, Android Firefox inconsistency, iOS Safari reversing the direction. Hand-rolled JS won on reliability.
- The JS is ~15 lines: a rAF loop watches `scrollTop`; when it changes it writes a `--scrollPos` custom property on `<html>`.
- The parallax lives in CSS: each layer has `transform: translateY(calc(var(--scrollPos, 0) * var(--offset, 0)))` with a per-layer `--offset` set inline in the HTML (`0` = scrolls normally, `1` = pinned in place, values in between = depth). Front layer `0`, distant layers near `1`; gaps between offset values mirror real-world depth gaps. No extra CSS needed per layer — one rule, N inline offsets.
- Reduced motion: `@media (prefers-reduced-motion: reduce) { transform: translateY(0); }`.

Part 2 extras (probably out of scope, but cheap and relevant to dark mode):

- Landscape colors are CSS custom properties; JS lerps between palette states (night/sunrise/day/sunset) to make the scene match local time ("Live" mode) or cycle. Fallback greys for no-JS.
- A "sun" element positioned via `--sun-h`/`--sun-v` custom properties + sin/cos math. Nice-to-have at most.

Assets needed:

- A layered landscape illustration split into separate SVGs (one per depth layer), all sharing the same viewBox. Shepherd's flow: raster art → Vector Magic (raster→vector) → path cleanup → SVGOMG optimize. Alternative: slice an existing photo into layers (masking per layer), but true SVG layers are cleaner and tiny.
- No runtime dependencies. Total JS is the small rAF scroll-watcher.

## (c) Applying this to this hero

Two coherent directions:

**Option A — Rellax on the existing hero (keep the photo).**
Minimal, low-risk: keep the current photo, split it into 2–3 depth layers (e.g. blurred-back full photo, a mid overlay, the content block) and give each `data-rellax-speed`. Even simpler: leave the photo as-is and only parallax the content block + scroll hint. Drop `background-attachment: fixed` (it conflicts conceptually and is janky on some browsers). Effort: small. Visual payoff: modest — a photo doesn't separate into depth layers convincingly without artwork work.

**Option B — Shepherd-style layered SVG landscape (replace the photo).**
The hero becomes a stacked SVG landscape behind (or around) the existing content grid; content scrolls normally while layers translate at different offsets. This is the "wow" option and the tutorial's full pattern applies almost verbatim: container + absolute layers + `--scrollPos` rAF loop + inline `--offset` per layer. Effort: dominated by **artwork**, not code. The code is ~30 lines total and no dependency.

Either way, the integration points are the same:
- Markup: `Hero.astro` — add a layers container behind `.c-hero__grid` (keep content and its z-order above layers; layers `aria-hidden` or the container `role="img"` + `aria-label`).
- Styles: new `.c-hero__landscape*` classes in the components layer of `global.css`, colors via custom properties only.
- Script: Astro `<script>` (bundled) in `Hero.astro` — either the Rellax init or the 15-line `--scrollPos` loop.

Accessibility concerns:
- `prefers-reduced-motion`: gate it. For Option B the CSS `@media` transform-override from the tutorial suffices even with JS running (custom property still updates but transform is zeroed — actually better to also skip the rAF work; both is easy). For Option A, gate Rellax init with `matchMedia` (+ change listener → `destroy()`/`refresh()`).
- Contrast: hero text is light-on-dark today. New layers must preserve contrast for name/role/tagline/CTA in both light and dark OS mode — likely means a scrim/gradient layer or choosing layer palettes that keep the center dark.
- Semantics: the landscape is decorative → `role="img"` + `aria-label` (tutorial approach) or `aria-hidden` if it's pure decoration; keep the real h1 and content untouched.

Dark-mode interactions:
- The hero is currently mode-independent (dark photo). Introducing colored SVG layers makes the hero mode-sensitive: per AGENTS.md, layer colors must be custom properties with dark variants in the single `prefers-color-scheme: dark` block (e.g. `--color-hero-sky`, `--color-hero-hill-1..n`). Part 2's palette-as-custom-properties pattern maps neatly onto this: define light/dark palettes as two sets of vars, no JS needed for theming.
- SVG layers should use `fill="var(--color-hero-…)"` (or CSS targeting classes) rather than hardcoded fills so dark mode re-themes them for free.

Performance notes:
- Both approaches are transform-only → compositor-friendly. The hand-rolled loop writes one custom property per frame only when scroll changes — cheaper than Rellax's per-element updates, and no dependency.
- SVG layers are typically a few KB each after SVGOMG vs. 128 KB of hero JPEGs today.

## (d) Open questions for Philip

1. **Photo vs. SVG landscape?** Keep the existing photographic background (Option A, quick) or replace it with a Firewatch-style layered SVG scene (Option B, needs artwork)? A hybrid is possible: photo kept as the farthest layer, SVG silhouettes in front.
2. **Library vs. hand-rolled?** Rellax (mature, data-attribute API, but no built-in reduced-motion) vs. the tutorial's ~15-line hand-rolled `--scrollPos` loop (zero deps, reduced-motion handled in pure CSS, matches the site's custom-property style). My lean: hand-rolled for Option B; Rellax only makes sense for Option A.
3. **Where does the artwork come from?** Option B needs a layered landscape. Do you have artwork in mind, should I generate/compose one procedurally-ish (simple hill/sky gradients), or commission-style placeholder until you supply art?
4. **Scope of motion:** only the background layers, or should hero content (portrait/text/CTA) also drift at its own speed? Should the existing `background-attachment: fixed` behavior be removed either way?
5. **Time-of-day palettes (part 2)?** In scope as a stretch goal, or keep it to light/dark `prefers-color-scheme` palettes only?
6. **Hero height:** tutorial uses `75vh`; current hero is `100svh`. Keep full-viewport or shrink to make the parallax more visible on first scroll?
