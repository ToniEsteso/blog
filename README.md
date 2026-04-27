# Personal Blog

A static blog built with Astro and markdown.

## Structure

```
/
├── src/
│   ├── content/
│   │   └── blog/        # Blog posts (markdown)
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   └── pages/
│       ├── index.astro       # Home page
│       ├── about.astro       # About page
│       └── blog/
│           └── index.astro   # Blog index
├── public/
│   └── style.css       # Styles
├── astro.config.mjs
└── package.json
```

## Adding a Post

Create a new markdown file in `src/content/blog/`:

```
src/content/blog/YYYY-MM-DD-title.md
```

Example:
```
src/content/blog/2024-01-15-ai-adoption-challenges.md
```

Add front matter:

```yaml
---
title: "Your Post Title"
description: "Brief description for SEO"
pubDate: 2024-01-15
---
```

Then write your content below the front matter.

## Local Development

Install dependencies:
```bash
npm install
```

Run locally:
```bash
npm run dev
```

Visit http://localhost:4321

## Customization

- Edit `astro.config.mjs` for site configuration
- Modify `public/style.css` for design changes