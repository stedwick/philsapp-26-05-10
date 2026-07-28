# Repository Guidelines

## Project Structure & Module Organization

This is an Astro personal site managed with Bun. Page routes live in `src/pages/`, shared components in `src/components/`, the base layout in `src/layouts/Layout.astro`, and global styles in `src/styles/global.css`. Imported collection JSON is under `src/data/imported/`; `src/data/resume-data.mjs` adapts collections and asset IDs into component props. Static assets belong in `public/`, including `public/legacy/`, `public/blog/`, and `public/site-assets/`. Importers, verifiers, and tests live in `scripts/`.

## Build, Test, and Development Commands

Run commands from the repository root.

- `bun install`: install dependencies with the pinned Bun toolchain.
- `bun run dev`: start the Astro dev server, usually on `localhost:4321`.
- `bun run dev:portless`: start the dev server through Portless. In the main checkout the site is live at `https://philsapp.dev`; in a git worktree Portless prefixes the URL with the branch's last segment (e.g. branch `dark-mode` → `https://dark-mode.philsapp.dev`, branch `qa/integration` → `https://integration.philsapp.dev`). Each feature worktree runs its own dev server on its own subdomain for isolated testing; use the feature's URL (not `localhost:4321`) for visual checks.
- `bun run build`: build the static site into `dist/`.
- `bun run preview`: preview the production build locally.
- `bun run test`: run Node test files matching `scripts/*.test.mjs`.
- `bun run verify:content` / `bun run verify:blog`: one-time validation of the initial import — no longer needed; do not run as part of normal QA.
- `bun run import:legacy` / `bun run import:blog`: one-time import from the old sites — done; do not re-run.

## Coding Style & Naming Conventions

Use ES modules, TypeScript where the repo already uses it, and two-space indentation. Astro components are PascalCase files, for example `Hero.astro` and `MediaGrid.astro`. Keep props typed in frontmatter, rendering declarative, and collection-to-theme mapping in `src/data/resume-data.mjs`. Put importer parsing logic in `scripts/*.mjs`. CSS uses component classes such as `c-hero__content` and layout helpers such as `l-container`; follow those patterns.

## Testing Guidelines

Unit tests use Node's built-in `node:test` runner with `node:assert/strict`. Name test files `*.test.mjs` in `scripts/`, near the parser/import logic they cover. For each new piece of parsing or resume mapping logic, prefer one pure function and one focused unit test.

## Resume Data & Asset Flow

The homepage should use Astro Collections as the source of truth, not hand-copied arrays in `src/data/site.ts`. Keep `site.ts` for shared icon imports and styleguide fixtures. Use `src/data/resume-data.mjs` to sort collection entries, resolve asset IDs, recover legacy display labels, and create component-ready props. When rendering imported images, prefer `/legacy/` assets from the collections and include high-res `@2x` paths as `srcset` candidates when available. Work screenshots, skill icons, personal-link icons, portrait images, and the resume PDF should all flow through this collection asset mapping.

The import from `philipbrocoum.com` and `phils.app` is finished and the data in `src/data/imported/` is final. We are no longer importing or verifying data — do not run `bun run import:legacy`, `bun run import:blog`, `bun run verify:content`, or `bun run verify:blog`.

## Theming & Dark Mode

The site supports dark mode automatically via `@media (prefers-color-scheme: dark)`; there is no manual toggle. All themable surface/text colors must go through the `--color-surface*` / `--color-on-surface*` / `--color-link*` custom properties (plus `--color-input-*`, `--color-rule`, `--color-dropcap`), with dark variants defined in the single `@media (prefers-color-scheme: dark)` block in the theme layer of `src/styles/global.css`. Never hardcode hex colors in components or pages. Any future page (e.g. a blog) must use these vars for backgrounds, text, borders, and form elements so it picks up dark mode automatically, and must be spot-checked with emulated dark mode.

## Commit & Pull Request Guidelines

Recent commits use short imperative subjects such as `Add blog content import pipeline` and `Refine page spacing and section headings`. Keep commits atomic and limited to files you changed. Pull requests should include a concise summary, the commands run for verification, linked issues when applicable, and screenshots or local preview notes for visual changes.

## Dev Topology

The QA/integration worktree lives at `/Users/philip/src/philsapp-qa` (branch `qa/integration`), owned by the QA agent; its dev server at `https://integration.philsapp.dev` is the everything-merged build for final testing. Feature work branches live in their own worktrees (siblings of this checkout, e.g. `/Users/philip/src/philsapp-<feature>`), each with its own Portless dev server subdomain. `git rerere` is enabled in the QA worktree so QA conflict resolutions replay during the real merges.

## Agent-Specific Instructions

Make the smallest practical change and reuse existing components, data helpers, and scripts before adding new structure. Do not revert unrelated working-tree changes. After large changes, run `bun run test` and `bun run build`, then update docs if the workflow changed. For final visual checks, run `bun run dev:portless`, open the branch's `https://<branch>.philsapp.dev` URL with `agent-browser --session-name philip`, verify lazy images after scrolling, check for mobile horizontal overflow, and inspect browser errors/console output.
