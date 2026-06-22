# Repository Guidelines

## Project Structure & Module Organization

This is an Astro personal site managed with Bun. Page routes live in `src/pages/`, shared components in `src/components/`, the base layout in `src/layouts/Layout.astro`, global styles in `src/styles/global.css`, and curated site data in `src/data/site.ts`. Imported content is JSON under `src/data/imported/`. Static assets belong in `public/`, including `public/blog/`, `public/site-assets/`, and legacy resume files. Importers, verifiers, and tests live in `scripts/`.

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

Use ES modules, TypeScript where the repo already uses it, and two-space indentation. Astro components are PascalCase files, for example `Hero.astro` and `MediaGrid.astro`. Keep props typed in frontmatter, rendering declarative, and reusable parsing/import logic in `scripts/*.mjs` modules. CSS uses component classes such as `c-hero__content` and layout helpers such as `l-container`; follow those patterns.

## Testing Guidelines

Unit tests use Node's built-in `node:test` runner with `node:assert/strict`. Name test files `*.test.mjs` in `scripts/`, near the parser/import logic they cover. For each new piece of import or parsing logic, prefer one pure function and one focused unit test. Run the relevant verifier after changing imported data shape or asset rewriting.

## Commit & Pull Request Guidelines

Recent commits use short imperative subjects such as `Add blog content import pipeline` and `Refine page spacing and section headings`. Keep commits atomic and limited to files you changed. Pull requests should include a concise summary, the commands run for verification, linked issues when applicable, and screenshots or local preview notes for visual changes.

## Agent-Specific Instructions

Make the smallest practical change and reuse existing components, data helpers, and scripts before adding new structure. Do not revert unrelated working-tree changes. After large changes, run the relevant build, tests, and verifiers, then update docs if the workflow changed.
