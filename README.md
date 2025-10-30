# Electrical Engineering Portfolio (Astro)

Personal portfolio built with [Astro](https://astro.build) for showcasing electrical engineering projects, technical writing, and background.

## Getting Started

```bash
npm install
npm run dev
```

- Development server runs at `http://localhost:4321`.
- Build for production with `npm run build` and preview using `npm run preview`.

## Content Model

All long-form content is managed through Astro Content Collections so you can add new work by dropping Markdown files in the right folder.

### Projects

1. Add a new Markdown file to `src/content/projects`.
2. Include frontmatter that matches the schema below:

```yaml
---
title: Name of the project
publishedAt: 2024-01-15
description: Short summary that appears in listings.
tech:
  - Tool 1
  - Tool 2
featured: true # Optional, highlights on the home page
links:
  live: https://example.com # Optional
  source: https://github.com/you/project # Optional
---

## Summary
Provide the case study body here using Markdown.
```

Each file automatically creates a project detail page at `/projects/<slug>`.

### Blog Posts

1. Add a Markdown file to `src/content/blog`.
2. Use this frontmatter:

```yaml
---
title: Post title
publishedAt: 2024-01-15
summary: Short blurb used in cards and meta tags.
tags:
  - topic-one
  - topic-two
---

Write the article body here.
```

Every post renders at `/blog/<slug>` and is listed on both the home page and `/blog`.

## Customization Checklist

- Update branding and contact details in `src/layouts/Layout.astro`.
- Adjust hero copy, focus areas, and background text in `src/pages/index.astro`.
- Refresh About page content in `src/pages/about.astro` to reflect your experience.
- Replace placeholder social/demo URLs in the content files.
- Swap the favicon under `public/` if desired.

## Project Structure

```
src/
|-- components/       # Reusable UI pieces (cards, etc.)
|-- content/          # Markdown content collections for blog & projects
|-- layouts/          # Site-wide layout shell
|-- pages/            # Routed Astro pages
\-- styles/           # Global styles
```

Feel free to enhance the styling, add integrations (Tailwind, React, etc.), or extend the content model as your portfolio grows.
