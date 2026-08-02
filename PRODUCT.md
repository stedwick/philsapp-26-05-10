# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A general-purpose personal site serving three audiences at once: prospective employers and recruiters evaluating Philip, potential consulting/freelance clients, and peers and network contacts. No single audience outranks the others; confirmed by the owner.

## Product Purpose

Philip Brocoum's canonical personal website: resume, portfolio of work, and blog in one place. It exists to represent him credibly to anyone who looks him up, and to make getting in touch easy (contact section and form). Success means visitors understand who he is and what he has done, and a meaningful share reach out.

## Positioning

A personal site that is genuinely his: real imported content from 18+ years of career, his own voice, his own photos and project screenshots, plus an active blog. The claim a neighbor could not copy is the specific, verifiable record (Olio Apps, Watts Syncta, BlackLine AI Account Recs, Grace and Mercy Daily Reading app, Claude Certified Architect, poker winnings) told in first person without inflation.

## Operating Context

Built with Astro 7 + Bun, deployed via Wrangler (Cloudflare). Content is the source of truth in Astro Collections backed by JSON in `src/data/imported/`, adapted to components by `src/data/resume-data.mjs`. The import from philipbrocoum.com and phils.app is finished and final; importers/verifiers in `scripts/` are not re-run. Dev topology uses git worktrees with Portless subdomains; the main checkout serves `https://philsapp.dev`. Site copy rule: no em dashes or en dashes in user-visible text (en dash only in date ranges).

## Capabilities and Constraints

- Homepage resume: profile, experience, projects, skills, education, contact form, personal links.
- Blog: imported posts from phils.app, rendered under `/blog/`; confirmed as core and growing, new writing planned.
- Automatic dark mode via `prefers-color-scheme`; all colors through `--color-surface*` / `--color-on-surface*` custom properties; no manual toggle, no hardcoded hex in components.
- Resume PDF and portrait/photo assets on hand; legacy `@2x` retina assets preferred via srcset.
- Static site; the contact form is the only interactive feature.
- Canonical-domain migration details (redirects from philipbrocoum.com, final hostname) are an open decision.

## Brand Commitments

- Name: Philip Brocoum; headline "Lead Software Engineer"; Claude Certified Architect credential with Credly badge link.
- Voice (from `tmp/website_update_instructions.md`, confirmed approved wording): first person, warm, direct, plain-spoken; short punchy sentences; light humor welcome; never inflate claims ("seasoned", "world-class", "cutting-edge" banned); no em dashes anywhere, en dashes only for date ranges.
- Approved factual updates from the July 2026 resume handoff are source of truth for numbers and job history.

## Evidence on Hand

- Imported collections in `src/data/imported/` (profile, experience, projects, skills, education, personal links, blog posts) with real copy and asset references.
- Assets: `public/legacy/` (resume images incl. @2x), `public/blog/`, `public/site-assets/`; portrait `tmp/philip-sq.jpg` and headshot; resume PDFs in `tmp/`.
- Social links: LinkedIn, GitHub (stedwick), Twitter, World Vibe Web.
- No testimonials, press, or client logos beyond the project records themselves; future work must not fabricate any.

## Product Principles

- Honesty over polish: every claim on the site is verifiable and plainly stated; never inflate.
- Philip's voice, verbatim where approved: copy follows the handoff wording and voice rules.
- Content is data: resume and blog truth lives in collections, not components; the theme adapts to it.
- One site, light and dark: every surface works in both color schemes through the token system.
- Ship the simple thing: smallest practical change, reuse existing components and helpers first.
