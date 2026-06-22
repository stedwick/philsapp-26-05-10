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

## Commit & Pull Request Guidelines

Recent commits use short imperative subjects such as `Add blog content import pipeline` and `Refine page spacing and section headings`. Keep commits atomic and limited to files you changed. Pull requests should include a concise summary, the commands run for verification, linked issues when applicable, and screenshots or local preview notes for visual changes.

## Agent-Specific Instructions

Make the smallest practical change and reuse existing components, data helpers, and scripts before adding new structure. Do not revert unrelated working-tree changes. After large changes, run the relevant build, tests, and verifiers, then update docs if the workflow changed.
