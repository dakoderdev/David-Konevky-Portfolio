# David Konevky - Portfolio

This is the third version of my personal portfolio, built from scratch with Astro.

The goal was to edit down the sections I didn't like from the original, breathe more life and personality into it, and just show off more of my skills in general instead of just telling the viewer.

It also now includes a blog section where I can write more about projects of mine related in some way or another with my work.

## What Is Inside

- A homepage for my work as a developer.
- A skills section, education section, and contact footer.
- A small blog for writing about design, development, and the making-of behind projects.

## Stack

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://gsap.com/)

## Running Locally

This project uses Node `>=22.12.0`.

```sh
npm install
npm run dev
```

The local site will usually be available at:

```text
http://localhost:4321
```

Useful commands:

| Command | What it does |
| :-- | :-- |
| `npm run dev` | Starts the local dev server |
| `npm run build` | Builds the production site |
| `npm run preview` | Previews the production build locally |
| `npm run astro -- --help` | Shows Astro CLI help |

## Project Structure

```text
/
+-- public/
|   +-- blog/
|   +-- curriculums/
|   +-- projects/
|   +-- skills/
+-- src/
|   +-- assets/
|   +-- components/
|   +-- content/
|   +-- data/
|   +-- layouts/
|   +-- pages/
|   +-- styles/
|   +-- utils/
+-- package.json
```

Most of the writing lives in `src/content/blog`. Project and skills data live in `src/data`, and the main page is assembled in `src/pages/index.astro`.