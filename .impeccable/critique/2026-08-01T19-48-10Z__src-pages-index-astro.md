---
target: homepage
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 2
timestamp: 2026-08-01T19-48-10Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Contact form has no states, no validation feedback, off-site submit |
| 2 | Match System / Real World | 4 | First-person plain language, honest numbers, no jargon |
| 3 | User Control and Freedom | 3 | One anchor link on the whole page; blog unreachable |
| 4 | Consistency and Standards | 3 | Inverted heading levels (H2→H5→H3); anchor glyph artifact in blog prose |
| 5 | Error Prevention | 2 | Empty form submits; no required fields |
| 6 | Recognition Rather Than Recall | 3 | Real labels exist but visually hidden; placeholders vanish on typing |
| 7 | Flexibility and Efficiency | n/a | Persuade/Experience surface; no repeat-user task flows |
| 8 | Aesthetic and Minimalist Design | 3 | 23-tile skills wall; paragraph repeated verbatim three times |
| 9 | Error Recovery | 2 | Browser-default email validation only; Formspree errors off-site |
| 10 | Help and Documentation | n/a | Self-evident one-pager |
| **Total** | | **23/32** | **Good (72%)** |

## Design Specificity Verdict

Authored for this product via its content; deliberately generic in its chrome, which is the stated intent. The name-tag hero photo, real employer names and screenshots, $77,000 poker winnings, and the keyboard-mash dog joke could belong to no one else. The risk is not interchangeability; it is the implementation breaking the design system's own named rules.

Deterministic scan (detect.mjs, exit 2, 6 findings): 4x design-system-color (#d6d6d6, #ddd x3) all on internal content-audit dev pages (low impact, not public chrome); overused-font on Open Sans (false positive: Open Sans is the declared body font in DESIGN.md); design-system-font on Work Sans (real, and worse than stated: Layout.astro:28 loads Work Sans from Google Fonts but nothing in src/ uses it; a dead webfont download that violates the two-families rule). Browser overlay: homepage clean; blog post /blog/philsdictationapp/ has a skipped heading (H1→H3) from imported content.

## Overall Impression

The hero is the best thing on the page: the "MY NAME IS PHIL!" name tag is the North Star rendered literally, and the token discipline makes light and dark both read as one confident system. What does not work: the conversion path fumbles its own Rare Rose Rule (rose spent twice, the rose band's button missing), the page's only interactive feature ships without validation, and the blog (a core pillar) is unreachable from the homepage. Biggest opportunity: make the ask singular and reachable, and give the recruiter artifacts (blog, resume PDF) one-click paths.

## What's Working

1. The hero photo choice: humble, funny, handmade, verifiable positioning that no headline could match.
2. Token discipline pays off visibly: both color schemes verified coherent; one shadow, hairlines, band alternation give structure without decoration.
3. Copy specificity: "18+ years", "team of twelve", "$77,000", "SOC 2", first person, no inflation.

## Priority Issues

1. **[P0] Blog is unreachable from the homepage.** Zero links in DOM, footer, or hero socials; footer contradicts DESIGN.md ("carries contact links" but is a bare copyright line). Why: a core, growing product pillar is invisible to exactly the visitors who would value it. Fix: blog link row in SiteFooter.astro and/or a media item in Personal Life. Suggested command: $impeccable polish
2. **[P0] Broken heading hierarchy.** Skills section runs H2→H5→H3 (group titles h5, their children h3); the dictation blog post skips H1→H3; 23 skill tiles all H3 flood screen-reader heading lists. Why: screen readers announce nonsense structure; SEO outline inverted. Fix: skill-group titles to H3, skill tiles to H4 or non-headings; fix imported post heading levels. Suggested command: $impeccable audit
3. **[P1] Rare Rose Rule violation + dead rose band.** Hero CTA renders rose (should be primary blue per hero spec); the rose hire-me band has no button at all, just a heading duplicating the hero CTA label "Let's get in touch" 100px apart in the scroll journey. Why: the one ask is spent twice and one instance is a dead end that looks tappable. Fix: hero CTA to variant="primary"; give the hire-me band a real element or fold it into the contact section. Suggested command: $impeccable polish
4. **[P1] Contact form submits anything.** No required attributes on name/email/message; only browser type=email validation; submit leaves for Formspree with no designed success state. Why: the page's single interactive feature and conversion moment has no guardrails and no feedback. Fix: add required to all three fields; design a success state. Suggested command: $impeccable harden
5. **[P2] Recruiter artifacts buried.** Resume PDF is the last link before the footer, ~5,470px down; no resume link in the hero. Why: the 10-second recruiter who does not scroll never sees the artifact they actually want. Fix: "Download my resume" as a secondary hero link or in the hire-me band. Suggested command: $impeccable layout

## Persona Red Flags

**Jordan (first-timer):** Hero→contact path fine, but cannot find the blog at all; zero links anywhere on the page.

**Casey (distracted mobile, 375px):** No horizontal overflow, tap targets fine; but ~8 mobile screens of full-width skill tiles delay career evidence, and the rose "Let's get in touch" band looks tappable and is not.

**Sam (keyboard/screen-reader):** Focus ring excellent (3px rose, verified). Broken: H2→H5→H3 outline, 23 H3 skill tiles flooding the headings list, blog post H1→H3 skip, emojis in section titles read aloud.

**Technical recruiter (project persona, 10 seconds):** Hero delivers name/role/credential instantly (pass), but resume PDF and work screenshots sit far down the page; no scroll, no evidence.

## Minor Observations

- Same paragraph verbatim in About and Career sections, near-verbatim a third time in the contact intro (sections.json:7 and :27).
- "Rest in Peace #" visible header-anchor glyph in blog prose; should reveal on hover only.
- Dropcap missing on blog posts despite DESIGN.md promising it there; exists only on the contact intro.
- Poker Tracker's first "button" is a claim ("$77,000 of my own live poker winnings"), not an action.
- White on #007bff ≈ 3.98:1, below AA 4.5:1 for button text; deliberate Bootstrap blue, but name the trade-off.
- Work Sans webfont loaded in Layout.astro:28, unused anywhere; dead download violating the two-families rule.
- 4 hardcoded hex colors on internal content-audit dev pages (design-system-color findings).
- Blog index holds 3 posts from 2023 against "core and growing" positioning.
- Chess.com icon nearly invisible on the dark band in dark mode (decorative, minor).
- Skill tile descriptions/links exist in data but are stripped in the template (index.astro:65).

## Questions to Consider

- If rose means "the one ask," why is it spent in the hero before the visitor has read a single line of evidence? Is the ask the hero CTA or the hire-me band; if you cannot answer, can a visitor?
- After the warmest moment on the page ("I'll speak with you soon"), the last thing a visitor reads is a copyright string. What should the final sentence of Philip's handshake be?
- The skills wall (23 tiles) outweighs the career evidence (3 cards) in raw pixels. If a recruiter weighs proof over claims, why do claims get the bigger canvas?
- "Phil's App Store" lives inside the same dark band as MIT and NYU. Does coupling side projects to credentials elevate the projects or dilute the credentials?
