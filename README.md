# Astro Starter Kit: Basics

```sh
bun create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

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

The imported resume data lives in Astro Collections backed by JSON files in `src/data/imported/`.

| Command                    | Action                                                       |
| :------------------------- | :----------------------------------------------------------- |
| `bun run import:legacy`    | Re-import resume content and assets from `philipbrocoum.com` |
| `bun run import:blog`      | Re-import blog posts and assets from `phils.app`             |
| `bun run verify:content`   | Verify resume collection shape and local asset files         |
| `bun run verify:blog`      | Verify blog collection shape and local asset files           |
| `bun run test:legacy-live` | Compare resume collections against the live resume site      |
| `bun run test:blog-live`   | Compare blog collections against the live blog feed/pages    |
| `bun run test`             | Run parser unit tests                                        |

Run `bun run dev:portless` and open `/content-audit/` to manually inspect every imported collection.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
