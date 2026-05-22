---
title: Directory Structure
last_mapped: 2026-05-22
scope: Full repository
---

# Directory Structure

## Project Root

```
/home/ivan/projects/site/
├── .astro/                    # Astro build cache / generated types
├── .planning/
│   └── codebase/              # This codebase map documents
├── dist/                      # Pre-built static output (7 HTML pages + assets)
├── node_modules/              # npm dependencies
├── public/                    # Static assets (copied as-is to dist/)
│   ├── favicon.svg
│   └── images/
│       ├── hero/
│       │   └── glasshouse.svg
│       ├── research/
│       │   └── phenotyping.svg
│       └── team/
│           └── lab-group.svg
├── src/
│   ├── components/            # 12 Astro UI components
│   ├── data/                  # 7 JSON content files
│   ├── layouts/               # Page shell component
│   ├── pages/                 # 7 Astro route files
│   ├── utils/                 # Utility modules
│   └── index.css              # Tailwind directives + semantic utilities
├── astro.config.mjs           # Astro configuration
├── instructions.md            # Original project specification (React+Vite spec)
├── package.json               # Dependencies and scripts
├── package-lock.json          # Lockfile
├── postcss.config.js          # PostCSS configuration
└── tailwind.config.js         # Tailwind CSS design tokens
```

## Source Directory Detail

### `src/components/` — 12 Components

| File | Lines | Purpose |
|------|-------|---------|
| `CTASection.astro` | ~25 | Call-to-action banner with eyebrow, title, description, actions |
| `Footer.astro` | 44 | Multi-column footer with nav, contact, institutional branding |
| `Header.astro` | 79 | Sticky navigation with desktop links + mobile hamburger menu |
| `PageHero.astro` | ~25 | Page header with eyebrow, title, description, optional slot content |
| `PublicationItem.astro` | ~35 | Single publication row with title, authors, journal, year, DOI link |
| `PublicationsArchive.astro` | 131 | Full publications archive with year/topic filters + inline client JS |
| `ResearchCard.astro` | ~35 | Research area card with title, summary, methods, tools, outputs |
| `ResourceCard.astro` | ~25 | Resource card with title, category, format, status |
| `ResourceLibrary.astro` | 118 | Searchable resource grid with search input + category filters + inline client JS |
| `SectionHeader.astro` | ~15 | Reusable section header (eyebrow + heading + description) |
| `TeamCard.astro` | ~40 | Team member card with name, role, bio, interests, links |

### `src/data/` — 7 JSON Content Files

| File | Lines | Purpose |
|------|-------|---------|
| `navigation.json` | 17 | Main nav (7 links) + footer nav (4 links) |
| `publications.json` | 66 | 8 publications with year, title, authors, journal, DOI, tags |
| `research.json` | 52 | 5 research areas with methods, tools, outputs, related publications |
| `resources.json` | 92 | 10 resources with category, format, status, description |
| `site.json` | 46 | Lab metadata: name, mission, PI info, hero CTAs, contact details |
| `students.json` | 49 | Student onboarding, expectations, data management, FAQ |
| `team.json` | 68 | 5 team members (PI, postdoc, 2 students, technician) |

### `src/layouts/` — 1 Layout

| File | Lines | Purpose |
|------|-------|---------|
| `BaseLayout.astro` | 33 | HTML shell: head (meta, OG, favicon), body wrapper with Header + Footer |

### `src/pages/` — 7 Routes

| File | Lines | Route | Purpose |
|------|-------|-------|---------|
| `index.astro` | 147 | `/` | Home: hero, about, featured publications, resources preview, CTA |
| `contact.astro` | 103 | `/contact` | Contact info + cosmetic inquiry form |
| `publications.astro` | 33 | `/publications` | Featured item + PublicationsArchive component |
| `research.astro` | 39 | `/research` | Hero + research area cards |
| `resources.astro` | 28 | `/resources` | Hero + ResourceLibrary component |
| `students.astro` | ~35-40 | `/students` | Student guidance page |
| `team.astro` | 62 | `/team` | PI section + grouped team members |

### `src/utils/` — 1 Utility

| File | Lines | Purpose |
|------|-------|---------|
| `safeHref.js` | 22 | URL validation: rejects javascript: schemes, detects external links |

## Key File Locations

| Category | File |
|----------|------|
| Entry point (dev) | `package.json` scripts → `astro dev` |
| Entry point (build) | `package.json` scripts → `astro build` |
| Root page | `src/pages/index.astro` |
| Global styles | `src/index.css` |
| Design tokens | `tailwind.config.js` |
| Site config | `astro.config.mjs` |
| CSS pipeline | `postcss.config.js` |
| Data directory | `src/data/` |
| Component directory | `src/components/` |
| Static assets | `public/` |
| Build output | `dist/` |

## Naming Conventions

- **Components:** PascalCase (`Header.astro`, `TeamCard.astro`)
- **Pages:** kebab-case (`index.astro`, `contact.astro`)
- **Data files:** kebab-case.json (`site.json`, `publications.json`)
- **Utilities:** camelCase.js (`safeHref.js`)
- **CSS classes:** Tailwind utilities + semantic layer (`.page-shell`, `.section-space`)
- **JSON keys:** camelCase (`labName`, `relatedPublications`)

## Build Output Structure (dist/)

```
dist/
├── index.html                 # /
├── team/index.html            # /team
├── students/index.html        # /students
├── resources/index.html       # /resources
├── research/index.html        # /research
├── publications/index.html    # /publications
├── contact/index.html         # /contact
├── _astro/                    # Generated CSS bundles
│   └── contact.BuOPsLsE.css   # Example bundled CSS
└── ... (other Astro-generated assets)
```
