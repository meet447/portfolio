# Portfolio

Personal portfolio site for [meetsonawane.com](https://meetsonawane.com).

Built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui. Projects and blog posts are driven by local content files — no CMS.

## Quick start

```bash
git clone https://github.com/meet447/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run optimize-images` | Compress project thumbnails in `public/projects/` |

## Editing content

### Projects

Edit `src/content/projects.json`. Each project supports:

- `title`, `description`, `tech`, `github`, `live`, `year`
- `image` — path under `public/` (e.g. `/projects/koraku.png`)
- `featured` — `true` to show in the homepage and **Featured Projects** section on `/projects`

Add a thumbnail to `public/projects/`, then run:

```bash
npm run optimize-images
```

This generates compressed `.png`, `.webp`, and `.avif` variants and backs up originals to `public/projects/_originals/`.

### Blog posts

Add a markdown file to `src/content/blogs/` with frontmatter:

```md
---
title: "Post Title"
date: "2026-06-08"
description: "Short summary for listings and SEO."
tags: ["AI", "Rust"]
---

# First heading

Post content here.
```

The post is available at `/blog/<filename-without-.md>`.

### LLM-friendly pages

The build emits markdown routes for agents and crawlers:

- `/llms.txt` — site index
- `/index.md` — about page
- `/projects.md` — all projects
- `/blog.md` — blog index
- `/blog/<slug>.md` — individual posts

## Project structure

```
src/
  components/     # UI components
  content/
    projects.json # Project listings
    blogs/        # Blog markdown files
    llm/          # Static LLM-facing markdown
  pages/          # Route pages
public/
  projects/       # Project thumbnails
```
