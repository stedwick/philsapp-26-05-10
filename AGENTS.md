# Repository Guidelines

## Project Structure & Module Organization

This is an Astro personal site managed with Bun. Page routes live in `src/pages/`, shared components in `src/components/`, the base layout in `src/layouts/Layout.astro`, and global styles in `src/styles/global.css`. Imported collection JSON is under `src/data/imported/`; `src/data/resume-data.mjs` adapts collections and asset IDs into component props. Static assets belong in `public/`, including `public/legacy/`, `public/blog/`, and `public/site-assets/`. Importers, verifiers, and tests live in `scripts/`.

## Build, Test, and Development Commands

Run commands from the repository root.

- `bun install`: install dependencies with the pinned Bun toolchain.
- `bun run dev`: start the Astro dev server, usually on `localhost:4321`.
- `bun run dev:portless`: start the dev server through Portless as `philsapp`.
- `bun run build`: build the static site into `dist/`.
- `bun run preview`: preview the production build locally.
- `bun run test`: run Node test files matching `scripts/*.test.mjs`.
- `bun run verify:content` / `bun run verify:blog`: validate imported JSON and referenced assets.
- `bun run import:legacy` / `bun run import:blog`: refresh imported resume or blog data.

## Coding Style & Naming Conventions

Use ES modules, TypeScript where the repo already uses it, and two-space indentation. Astro components are PascalCase files, for example `Hero.astro` and `MediaGrid.astro`. Keep props typed in frontmatter, rendering declarative, and collection-to-theme mapping in `src/data/resume-data.mjs`. Put importer parsing logic in `scripts/*.mjs`. CSS uses component classes such as `c-hero__content` and layout helpers such as `l-container`; follow those patterns.

## Testing Guidelines

Unit tests use Node's built-in `node:test` runner with `node:assert/strict`. Name test files `*.test.mjs` in `scripts/`, near the parser/import logic they cover. For each new piece of import, parsing, or resume mapping logic, prefer one pure function and one focused unit test. Run the relevant verifier after changing imported data shape or asset rewriting.

## Resume Data & Asset Flow

The homepage should use Astro Collections as the source of truth, not hand-copied arrays in `src/data/site.ts`. Keep `site.ts` for shared icon imports and styleguide fixtures. Use `src/data/resume-data.mjs` to sort collection entries, resolve asset IDs, recover legacy display labels, and create component-ready props. When rendering imported images, prefer `/legacy/` assets from the collections and include high-res `@2x` paths as `srcset` candidates when available. Work screenshots, skill icons, personal-link icons, portrait images, and the resume PDF should all flow through this collection asset mapping.

## Commit & Pull Request Guidelines

Recent commits use short imperative subjects such as `Add blog content import pipeline` and `Refine page spacing and section headings`. Keep commits atomic and limited to files you changed. Pull requests should include a concise summary, the commands run for verification, linked issues when applicable, and screenshots or local preview notes for visual changes.

## Agent-Specific Instructions

Make the smallest practical change and reuse existing components, data helpers, and scripts before adding new structure. Do not revert unrelated working-tree changes. After large changes, run the relevant build, tests, and verifiers, then update docs if the workflow changed. For final visual checks, run `bun run dev:portless`, open `https://philsapp.dev` with `agent-browser --session-name philip`, verify lazy images after scrolling, check for mobile horizontal overflow, and inspect browser errors/console output.
