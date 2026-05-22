---
title: Architecture
last_mapped: 2026-05-22
scope: Full repository
---

# Architecture

## Pattern: Static Site Generation (SSG)

Astro compiles all `.astro` page components to pre-rendered HTML at build time. Zero client-side JavaScript is shipped by default, except for two pages that include inline `<script>` tags for client-side filtering.

```
Build Flow:
src/pages/*.astro + src/components/*.astro + src/data/*.json
  ↓
Astro compiler (Vite-based)
  ↓
dist/*.html (flat static files)
```

## System Layers

```
┌─────────────────────────────────────────┐
│  Layer 4: Static Output (dist/)         │
│  - Pre-rendered HTML files              │
│  - No server, no hydration              │
├─────────────────────────────────────────┤
│  Layer 3: Pages (src/pages/*.astro)     │
│  - File-based routing                   │
│  - Import JSON data                     │
│  - Compose components                   │
│  - Define SEO metadata                  │
├─────────────────────────────────────────┤
│  Layer 2: Components (src/components/)  │
│  - Reusable UI sections                 │
│  - Card components, archive views       │
│  - Client-side scripts (2 components)   │
├─────────────────────────────────────────┤
│  Layer 1: Layout (src/layouts/)         │
│  - BaseLayout: HTML shell               │
│  - Header, Footer, global CSS           │
├─────────────────────────────────────────┤
│  Layer 0: Data (src/data/*.json)        │
│  - Static JSON content source           │
│  - No CMS, no external data source      │
└─────────────────────────────────────────┘
```

## Data Flow

```
JSON Data → Astro Frontmatter (import, sort, filter)
                    ↓
          Props → Components (Astro props)
                    ↓
          Static HTML at build time
```

## Routing (File-Based)

| File | Route | Purpose |
|------|-------|---------|
| `src/pages/index.astro` | `/` | Home page — hero, about, featured publications, resources preview, CTA |
| `src/pages/research.astro` | `/research` | Research themes listing |
| `src/pages/team.astro` | `/team` | Team members with groups |
| `src/pages/resources.astro` | `/resources` | Searchable resource library |
| `src/pages/publications.astro` | `/publications` | Filterable publications archive |
| `src/pages/students.astro` | `/students` | Student onboarding and guidance |
| `src/pages/contact.astro` | `/contact` | Contact info + cosmetic form |

## Component Architecture

### Layout Components

**`src/layouts/BaseLayout.astro`** — Page shell
- Props: `title`, `description`
- Renders `<html>`, `<head>` (meta, OG tags, favicon), `<body>`
- Includes `Header` and `Footer` components
- Imports `src/index.css` (Tailwind + custom utilities)

```astro
<BaseLayout title="..." description="...">
  <!-- page content -->
</BaseLayout>
```

### Section / Reusable Components

| Component | Source | Purpose |
|-----------|--------|---------|
| `Header` | `src/components/Header.astro` | Sticky nav bar, mobile hamburger menu, active route highlighting |
| `Footer` | `src/components/Footer.astro` | Multi-column footer with nav links, contact info |
| `PageHero` | `src/components/PageHero.astro` | Page header section with eyebrow, title, description |
| `CTASection` | `src/components/CTASection.astro` | Call-to-action banner with buttons |
| `SectionHeader` | `src/components/SectionHeader.astro` | Reusable section header (eyebrow + title + description) |

### Card / Item Components

| Component | Source | Purpose |
|-----------|--------|---------|
| `ResearchCard` | `src/components/ResearchCard.astro` | Research area card with methods/tools/outputs |
| `TeamCard` | `src/components/TeamCard.astro` | Team member card with bio and links |
| `ResourceCard` | `src/components/ResourceCard.astro` | Resource card with category/format/status |
| `PublicationItem` | `src/components/PublicationItem.astro` | Publication row with title/authors/journal/year |

### Feature Components (with client-side JS)

**`PublicationsArchive.astro`**
- Props: none (imports JSON directly)
- Server: renders year/topic filter buttons + sorted publication list
- Client: inline `<script>` handles filter button clicks, toggles visibility, updates `aria-pressed`
- Featured publication excluded by title comparison (not ID)

**`ResourceLibrary.astro`**
- Props: none (imports JSON directly)
- Server: renders search input + category filter buttons + resource cards
- Client: inline `<script>` handles search input (debounced via `input` event) + category filtering
- Shows empty state when no matches

## State Management

- **None.** No React state, no stores, no contexts.
- Client-side interactivity uses vanilla JS in inline `<script>` tags
- Data persistence: static JSON files only

## Abstractions

### Utility Module

**`src/utils/safeHref.js`** — URL safety validation
```js
export function safeHref(value, fallback = '/') { /* ... */ }
export function isExternalHref(value) { /* ... */ }
```

### Design System (CSS)

**`src/index.css`** — Semantic utility layer atop Tailwind:
- `.page-shell` — Max-width container with responsive padding
- `.section-space` — Consistent vertical spacing
- `.eyebrow` — Uppercase, tracked, monospace labels
- `.surface-card` — Card container with border, shadow, rounding
- `.page-divider` — Section dividers
- `.button-primary/secondary/tertiary` — Button variants

### Configuration Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Minimal Astro config (Tailwind integration only) |
| `tailwind.config.js` | Custom colors, fonts, shadows, easing |
| `postcss.config.js` | Tailwind → Autoprefixer pipeline |

## Entry Points

| Entry Point | Description |
|-------------|-------------|
| `astro dev` | Dev server (Vite HMR) |
| `astro build` | Static site compilation to `dist/` |
| `astro preview` | Preview static build locally |

## Notable Design Decisions

1. **JSON-as-CMS:** All content lives in `src/data/*.json`, not in markdown or a CMS
2. **Minimal JS:** Only two components ship client-side scripts
3. **No API layer:** No data fetching at build time (all data imported from local JSON)
4. **No component props for data:** Components like `PublicationsArchive` import JSON directly rather than receiving as props
5. **Reused SVG placeholder:** All team members share the same SVG image (`/images/team/lab-group.svg`)
