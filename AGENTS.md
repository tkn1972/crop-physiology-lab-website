# Crop Physiology Lab Website

## Project

- **Type:** Static multi-page academic site
- **Stack:** Astro 5 + Tailwind CSS 3, ESM (`"type": "module`)
- **Output:** Static HTML in `dist/` (Netlify/Vercel-ready)
- **No custom backend.** Forms via Netlify Forms or Formspree.

## Key Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Astro dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |

No test suite, no linter, no type checker currently configured.

## Content Architecture (Critical)

**Content portability is sacred.** All content lives in standard Markdown + JSON. Do **not** use Astro Content Collections, `.astro` files for content storage, or any Astro-specific content features.

- **Pages:** `src/pages/*.astro` — Astro file-based routing
- **Components:** `src/components/*.astro`
- **Layout:** `src/layouts/BaseLayout.astro` — wraps all pages (Header + Footer, Google Fonts CDN)
- **Content:** `src/content/` — Markdown with YAML frontmatter (currently READMEs only; real content files to be added Phase 2+)
- **Data:** `src/data/*.json` — drives page content. Key files:
  - `site.json` — lab identity, hero CTAs, contact info
  - `navigation.json` — main nav (8 items) + footer links
  - `research.json`, `publications.json`, `team.json`, `students.json`, `resources.json` — page data
- **Client JS:** Minimal inline `<script>` tags (Publications and Methods pages only)

## Navigation = Page Visibility

To add a page to the site, add it to `src/data/navigation.json` `main` array. The Header component renders nav from this file. Pages without nav entries are orphaned.

## Design System

Defined in `tailwind.config.js` + `src/index.css`.

- **Colors:** `parchment`, `pine`, `sage`, `earth`, `forest`, `moss`, `cream`, `ink`, `muted`, `line`, `soft`, `surface`
- **Fonts:** DM Sans (headings), Source Sans 3 (body), IBM Plex Mono (labels/metadata)
- **Semantic utilities (use these, don't invent new):** `.page-shell`, `.section-space`, `.eyebrow`, `.surface-card` (now borderless), `.page-divider`, `.button-primary`, `.button-secondary`, `.button-tertiary`, `.bg-cream`, `.bg-moss-light`
- **Design system is locked.** Do not modify `tailwind.config.js` or `src/index.css`.

## Naming Conventions

- Components → PascalCase (`TeamCard.astro`)
- Content → kebab-case (`hplc-sop.md`)
- JSON keys → camelCase
- Utilities → camelCase (`safeHref.js`)

## URL Safety

Use `safeHref()` from `src/utils/safeHref.js` for any URL rendered from data. Rejects non-safe schemes. Use `isExternalHref()` to detect external links.

## Build Tips

- Build output goes to `dist/`. Verify with `npm run build && ls dist/`.
- The site references `/images/...` and `/favicon.svg` — ensure these exist in `public/` (or they will 404).
- Manual QA checklist: responsive layout, filter interactions (Publications/Methods), form submissions, keyboard nav.

## Project State

See `.planning/STATE.md` for current phase and roadmap. Phase 1 (Foundation) is complete. Phase 2 (Core Content: Research, Team, Publications population) is pending.
