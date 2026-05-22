---
title: Technology Stack
last_mapped: 2026-05-22
scope: Full repository
---

# Technology Stack

## Overview

This is a static multi-page academic research lab website built with Astro. The project generates pre-rendered HTML suitable for static hosting (Netlify, Vercel, GitHub Pages, etc.).

## Runtime & Build

| Technology | Version | Purpose |
|-----------|---------|---------|
| Astro | 5.18.1 | Static site generator, file-based routing, zero-JS by default |
| Vite | ~6.x (via Astro) | Build tool, dev server, hot module replacement |
| Node.js | ^18+ | Runtime (implied by Astro v5 requirements) |

## Languages

| Language | Files | Purpose |
|----------|-------|---------|
| TypeScript (frontmatter) | `.astro` | Component logic, data transformation, type annotations |
| CSS | `.css`, Tailwind | Styling, design system |
| JSON | `.json` | Content data (CMS-like) |
| HTML | `.html` (output) | Generated static pages |
| SVG | `.svg` | Illustrations and favicon |

## Framework & UI

| Technology | Version | Purpose |
|-----------|---------|---------|
| Astro | 5.18.1 | Framework — compiles `.astro` files to static HTML at build time |
| Tailwind CSS | 3.4.17 | Utility-first CSS framework with custom design tokens |
| @astrojs/tailwind | 6.0.2 | Astro integration for Tailwind (removes double-processing) |
| PostCSS | ^8.5.6 | CSS pipeline (Tailwind → Autoprefixer) |
| Autoprefixer | ^10.4.21 | Vendor prefix automation |

## Key Design Tokens (Tailwind Config)

```js
// tailwind.config.js
content: ['./src/**/*.{astro,html,js,jsx}']

colors: {
  parchment: '#f8f7f5',   // Background
  surface:   '#ffffff',   // Card backgrounds
  ink:       '#1f2328',   // Primary text
  muted:     '#5b6257',   // Secondary text
  line:      '#d9d6cf',   // Borders
  pine:      '#4a7c59',   // Primary accent
  sage:      '#6b8e6f',   // Secondary accent
  earth:     '#b35844',   // Tertiary accent
  soft:      '#ece7df',   // Tertiary backgrounds
  charcoal:  '#2b2d31',   // Headings
}

fontFamily: {
  serif: ['"Playfair Display"', 'Georgia', 'serif'],
  sans:  ['"Source Sans 3"', 'system-ui', 'sans-serif'],
  mono:  ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
}
```

## Dependencies Summary

**Production:** None (pure static site)

**Development:**
- `astro@5.18.1` — Framework
- `@astrojs/tailwind@6.0.2` — Tailwind integration
- `tailwindcss@3.4.17` — Styling engine
- `postcss@^8.5.6` — CSS processing
- `autoprefixer@^10.4.21` — Vendor prefixes

## Package Scripts

```json
{
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview"
}
```

## Build Output

- **Source:** `src/` Astro components + JSON data
- **Output:** `dist/` flat HTML files (7 pages + assets)
- **Static assets:** `public/` copied as-is to `dist/`

## Missing from Stack

- No JavaScript framework (React, Vue, Svelte)
- No state management
- No backend/API server
- No database
- No CMS
- No image optimization pipeline

## Notes

- Despite the project name suggesting "plant-physiology-lab-site", the `instructions.md` originally specified a React + Vite + React Router stack. The actual implementation uses Astro static site generation, a significant deviation from the original specification.
- Fonts (Playfair Display, Source Sans 3, IBM Plex Mono) are declared in Tailwind config but **not actually loaded** via `<link>` or `@import` anywhere in the codebase.
