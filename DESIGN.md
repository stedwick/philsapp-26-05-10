---
name: phils.app — Philip Brocoum
description: Personal resume and blog site; a warm, honest handshake on the web.
colors:
  link-blue: "#007bff"
  link-blue-hover: "#0062cc"
  signal-rose: "#f43f5e"
  signal-rose-hover: "#e11d48"
  oxblood-dropcap: "#903"
  ink: "#212529"
  dark-band: "#343a40"
  paper: "#f8f9fa"
  muted: "#6c757d"
  muted-light: "#adb5bd"
  surface: "#fff"
  surface-alt: "#f8f9fa"
  surface-border: "rgb(0 0 0 / 12.5%)"
  rule: "rgb(0 0 0 / 10%)"
  border: "#dee2e6"
  input-border: "#ced4da"
  input-text: "#495057"
  input-addon-bg: "#e9ecef"
  card-title-red: "#dc3545"
  night-link: "#6ea8fe"
  night-link-hover: "#9ec5fe"
  night-surface-alt: "#2b3035"
  night-dropcap: "#d98080"
typography:
  display:
    fontFamily: 'Georgia, "Times New Roman", serif'
    fontSize: "clamp(2rem, 9vw, 3rem)"
    fontWeight: 300
    lineHeight: 1.2
  headline:
    fontFamily: 'Georgia, "Times New Roman", serif'
    fontSize: "2rem"
    fontWeight: 500
    lineHeight: 1.2
  title:
    fontFamily: 'Georgia, "Times New Roman", serif'
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "0.2rem"
  md: "0.25rem"
  lg: "0.5rem"
  pill: "999px"
spacing:
  space-1: "0.25rem"
  space-2: "0.5rem"
  space-3: "0.75rem"
  space-4: "1rem"
  space-5: "1.5rem"
  space-6: "2rem"
  space-7: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.link-blue}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "0.375rem 0.75rem"
  button-primary-hover:
    backgroundColor: "{colors.link-blue-hover}"
    textColor: "{colors.surface}"
  button-rose:
    backgroundColor: "{colors.signal-rose}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
  button-rose-hover:
    backgroundColor: "{colors.signal-rose-hover}"
    textColor: "{colors.surface}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "inherit"
    rounded: "{rounded.md}"
    padding: "0.375rem 0.75rem"
  icon-button:
    backgroundColor: "transparent"
    textColor: "inherit"
    rounded: "{rounded.md}"
    size: "3.125rem"
  work-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.input-text}"
    rounded: "{rounded.md}"
    padding: "0.375rem 0.75rem"
    height: "2.375rem"
---

# Design System: phils.app — Philip Brocoum

## Overview

**Creative North Star: "The Honest Handshake"**

This system is a warm, direct introduction to one person, not a brand campaign. It descends visibly from classic Bootstrap (the blue, the grays, the 0.25rem radius, the 576/768/992/1200 breakpoints) and keeps that familiarity as a feature: a recruiter or client has read a thousand pages that behave exactly like this one, and none of their attention is spent learning the interface. Warmth comes from the content and the serif voice, not from decoration.

The site lives in two color schemes at once. Light and dark are not variants of each other; they are one system with semantic surface tokens, so any new component that uses the tokens gets dark mode for free. The hero, footer, and alternating section bands keep the dark slate (`--color-dark`) as a constant spine in both schemes, which gives the page its rhythm of light and dark stripes.

Density is comfortable and editorial: generous section padding, centered section headers with a hairline rule, cards and media items doing quiet structural work. Nothing glows, slides, or sparkles. The one moment of flourish is the typographic dropcap, a small nod to the blog's reading character.

**Key Characteristics:**
- Bootstrap-familiar controls and grid; zero learning curve on purpose
- Warm and personal in voice, restrained in decoration
- One semantic token layer drives automatic dark mode; no hardcoded hex outside the token block
- Georgia serif headings over Open Sans body; dropcap as the single editorial flourish
- Dark slate bands (hero, footer, alternating sections) as the page's constant spine

## Colors

The palette is a classic web blue plus one rose accent, sitting on a Bootstrap-derived neutral ramp, with every themable value duplicated for dark mode in a single `prefers-color-scheme` block.

### Primary
- **Link Blue** (#007bff): links, primary buttons, the default interactive color. It is deliberately the familiar Bootstrap blue; its job is instant recognition, not distinction. Hover deepens to #0062cc. In dark mode it swaps to the lighter **Night Link** (#6ea8fe, hover #9ec5fe) for contrast against dark surfaces.

### Secondary
- **Signal Rose** (#f43f5e): reserved for the hire-me call-to-action band and its button, plus the focus-visible ring (mixed 70% with white). Hover deepens to #e11d48. Its rarity is what makes the one ask on the page impossible to miss.

### Neutral
- **Ink** (#212529): body text and dark-mode page surface. Doubles as the text-on-light color.
- **Dark Band** (#343a40): the constant spine; hero background, footer, and alternating section bands in both color schemes.
- **Paper** (#f8f9fa): alt surface in light mode; light text on dark bands.
- **Muted** (#6c757d): secondary text, secondary buttons, addenda.
- **Muted Light** (#adb5bd): tertiary text on dark bands, scroll hint, muted text in dark mode.
- **Surface** (#fff light / #212529 dark) and **Surface Alt** (#f8f9fa light / #2b3035 dark): the page and card backgrounds; every component reads these, never a literal white or gray.
- **Surface Border / Rule / Border** (translucent black in light, translucent white in dark): hairlines, card borders, the section-header rule.
- **Input Border** (#ced4da light / #495057 dark), **Input Text** (#495057 light / #f8f9fa dark), **Input Addon BG** (#e9ecef light / white 8%): the contact form's control colors.
- **Card Title Red** (#dc3545): work-card project titles, a legacy accent carried over from the imported theme.
- **Oxblood Dropcap** (#903 light / #d98080 dark): the blog dropcap only; never used anywhere else.

### Named Rules
**The Two-Scheme Rule.** Every themable color exists twice: a light value in the token layer and a dark value in the single `@media (prefers-color-scheme: dark)` block in the theme layer of `src/styles/global.css`. A color used in a component without a token and a dark variant is a bug, not a choice.

**The Rare Rose Rule.** Signal Rose appears in exactly three places: the hire-me band, its button, and the focus ring. Do not spend it on decoration; the page has one ask and the rose marks it.

## Typography

**Display/Heading Font:** Georgia (with "Times New Roman", serif fallback)
**Body Font:** Open Sans (with system sans fallbacks)

**Character:** A bookish serif voice over a plainspoken sans; the serif carries identity (name, section titles, project names, the dropcap), the sans carries information. Two families, no third.

### Hierarchy
- **Display** (Georgia, 300 weight, clamp(2rem, 9vw, 3rem), line-height 1.2): the hero name only. The lightest weight at the largest size keeps the biggest text on the page quiet.
- **Headline** (Georgia, 500, 2rem): section band titles; h3 variants step down to 1.75rem and h4 to 1.5rem.
- **Title** (Georgia, 500, 1.25rem): media-item and skill-group titles; work-card project names render at 1.5rem in Card Title Red.
- **Body** (Open Sans, 400, 1rem, line-height 1.5): everything else. Blog prose loosens to 1.6 line-height in the narrow (58rem) container.
- **Label** (Open Sans, 400, 0.875rem): small buttons, skill tile descriptions, styleguide annotations. No uppercase, no letter-spaced eyebrows anywhere in the system.
- **Dropcap** (Georgia, 3.125rem growing to 4.6875rem at ≥768px, Oxblood Dropcap): the first letter of blog posts and the contact intro.

### Named Rules
**The Two Voices Rule.** Serif for identity, sans for information, nothing else. Do not add a third family, a display cut, or a webfont without a deliberate world decision.

## Layout

A centered container caps at 71.25rem (1140px) with a narrow 58rem variant for reading (blog posts, contact). Section bands stack full-bleed with 1.5rem vertical padding rhythm (space-5), alternating Surface and Surface Alt with Dark Band interludes. Section headers are centered with a hairline rule underneath.

Content grids are Bootstrap-shaped: media grids run 1 / 2 / 3 / 4 columns and card grids 1 / 2 / 3 / 3 across the 576 / 768 / 992 / 1200px breakpoints, with the container itself stepping 33.75rem / 45rem / 60rem / 71.25rem. The hero is a full-viewport (100svh) centered grid: circular portrait, name, role, social row, one CTA, scroll cue. Mobile is the default; every enhancement is a `min-width` query, and 320px is the floor.

Spacing runs on a seven-step rem scale (0.25 / 0.5 / 0.75 / 1 / 1.5 / 2 / 3); grid gutters are 1.875rem, card internals 1.25rem. Transitions are a single token, 160ms ease, used only for hover state changes.

## Elevation & Depth

Subtle layering: the system is essentially flat, and depth comes from three deliberately small moves rather than a shadow vocabulary. First, tonal banding; Surface and Surface Alt alternate down the page so structure reads without lines. Second, hairlines; card borders and section rules in low-alpha Surface Border. Third, one soft shadow.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 7.5%)`): work cards only. It is the single shadow in the system.

### Named Rules
**The One Shadow Rule.** There is one shadow and it belongs to work cards. New components join the flat layering (bands, hairlines, tonal steps) instead of inventing elevation; in dark mode, where the shadow all but disappears, the translucent-white border does the work.

## Shapes

Corners are gently curved and small: 0.25rem is the default radius for buttons, cards, and inputs, with 0.2rem and 0.5rem as the adjacent steps. Nothing is sharp and nothing is blobby. Two exceptions break the grid of small rectangles: the hero portrait is a full circle (999px radius with a 0.25rem Paper ring), and skill tiles take the larger 0.5rem radius with a faint outline to read as structured chips. Images inside cards and blog prose inherit the 0.25rem radius via overflow clipping.

## Components

The philosophy is tactile and confident: controls look pressable, states change clearly, and hover always does something visible within 160ms.

### Buttons
- **Shape:** gently curved (0.25rem radius), 1px border matching the fill.
- **Primary:** Link Blue fill, white text; three sizes (sm 0.25/0.5rem at 0.875rem, md 0.375/0.75rem, lg 0.5/1rem at 1.25rem). Hover deepens to Link Blue Hover.
- **Rose:** Signal Rose fill, white text; used for the hire-me CTA. Hover deepens to Signal Rose Hover.
- **Secondary:** Muted gray fill, white text; hover deepens to #5a6268.
- **Outline:** transparent fill, currentColor border and text; on dark bands hover flips to a Paper fill with Ink text. Used for social and card actions on dark or colored bands.
- **Icon button:** 3.125rem square, 1px currentColor border, 2rem icon; social links in the hero. Same hover flip as outline.

### Cards / Containers
- **Work card:** 0.25rem radius, Surface background, 1px Surface Border, the one card-lift shadow. A subtle-header (Surface Alt, hairline below) holds the project icon and link; the body pads 1.25rem with a full-bleed 600/341 screenshot pulled to the edges; the footer mirrors the header and caps at 9.625rem minimum on desktop so rows align. Project titles are Georgia 1.5rem in Card Title Red.
- **Media item:** icon (4rem, or 2.25rem in dense skill grids) beside a Georgia title and body text; no box, no fill. Skill grids wrap items in faint-outlined 0.5rem tiles.
- **Section band:** full-bleed padding-block 1.5rem (space-5), four tones: white (Surface), light (Surface Alt), dark (Dark Band, constant across schemes), info (Signal Rose, hire-me only).

### Inputs / Fields
- **Style:** 1px Input Border, Surface background, Input Text color, 0.25rem radius, 0.375/0.75rem padding, 2.375rem minimum height.
- **Input group:** field and icon addon fuse into one control; the addon takes Input Addon BG and shares the border, square on the fused side.
- **Textarea:** same treatment, 9rem minimum, vertical resize only.
- **Focus:** the global focus-visible ring (3px, Signal Rose at 70% on white, 3px offset) is the focus treatment everywhere; inputs do not restyle their borders on focus.

### Navigation
There is no nav bar. The page is a single scroll anchored by the hero CTA ("Let's get in touch" → #contact) and a scroll cue; the blog adds a back link ("← All posts") and the footer carries contact links. Do not add chrome the one-page flow does not need.

### The Hero (signature)
Full viewport over a dark cover photograph (fixed attachment on fine pointers, three responsive image sizes). Circular portrait with a Paper ring, the name in Display weight 300, role and italic credential, a row of outline icon buttons, one Primary CTA, and a muted scroll cue, all centered with the content nudged 2.75rem above true center. It is the only fully composed moment on the page; everything after it is bands and grids.

## Do's and Don'ts

### Do:
- **Do** read every surface, text, border, input, link, and rule color from the semantic tokens, and add a dark-mode variant in the single theme-layer media block when introducing a new one.
- **Do** build sections as bands (Surface / Surface Alt / Dark Band) with the standard container, centered header, and hairline rule.
- **Do** keep hover states visible and quick (160ms ease); every interactive element answers the pointer.
- **Do** use Georgia for headings and identity moments, Open Sans for everything informational.
- **Do** spot-check new work with emulated dark mode and at 320px width before calling it done.

### Don't:
- **Don't** hardcode a hex color in a component or page; if a value has no token, the work is not finished.
- **Don't** add shadows, gradients, glass effects, or a second accent color; the system has one shadow and one rose, both spoken for.
- **Don't** introduce uppercase eyebrow labels, letter-spaced kickers, or a third typeface.
- **Don't** add a manual dark-mode toggle or per-component scheme logic; the single media query owns it.
- **Don't** give blog prose or new pages their own color rules outside the token layer; they inherit the system or they are wrong.
