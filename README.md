# philsapp Astro Resume Site

This is Philip Brocoum's resume site rebuilt in Astro. The current homepage uses imported resume content from Astro Collections while keeping the visual theme in reusable Astro components and CSS.

## Project Structure

Key paths:

```text
/
├── public/
│   ├── legacy/          # imported resume assets, including @2x images
│   ├── blog/            # imported blog assets
│   └── site-assets/     # hand-curated current-site assets
├── src/
│   ├── components/      # reusable theme components
│   ├── data/
│   │   ├── imported/    # JSON-backed Astro Collections
│   │   ├── resume-data.mjs
│   │   └── site.ts      # icons and styleguide fixtures
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── scripts/             # importers, verifiers, and unit tests
└── package.json
```

## Data and Theme Flow

Astro Collections are defined in `src/content.config.ts` and load JSON from `src/data/imported/`. The homepage calls `getCollection(...)` in `src/pages/index.astro`, then passes those entries to `src/data/resume-data.mjs`.

`resume-data.mjs` is the adapter between imported data and themed components. It sorts entries by `order`, resolves asset IDs to `/legacy/...` paths, adds retina `srcset` values when `@2x` assets exist, and maps collection links into component actions. To update resume data, edit or re-import the JSON collections. To change the theme, edit `src/components/` and `src/styles/global.css`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run dev:portless`    | Starts local dev server on Portless host/port    |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

## Content import audit

The imported resume and blog data live in Astro Collections backed by JSON files in `src/data/imported/`.

| Command                    | Action                                                       |
| :------------------------- | :----------------------------------------------------------- |
| `bun run import:legacy`    | Re-import resume content and assets from `philipbrocoum.com` |
| `bun run import:blog`      | Re-import blog posts and assets from `phils.app`             |
| `bun run verify:content`   | Verify resume collection shape and local asset files         |
| `bun run verify:blog`      | Verify blog collection shape and local asset files           |
| `bun run test:legacy-live` | Compare resume collections against the live resume site      |
| `bun run test:blog-live`   | Compare blog collections against the live blog feed/pages    |
| `bun run test`             | Run parser unit tests                                        |

Run `bun run dev:portless`, open `https://philsapp.dev/content-audit/`, and inspect every imported collection when changing import behavior.

## Verification

For normal changes, run `bun run test`. After changing imports, collection schemas, or asset mapping, also run `bun run verify:content`, `bun run verify:blog`, and `bun run build`.
