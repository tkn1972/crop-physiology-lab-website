---
title: Coding Conventions
last_mapped: 2026-05-22
scope: Full repository
---

# Coding Conventions

## Overview

The codebase follows a pragmatic, consistent style typical of Astro projects. No linting or formatting tools (ESLint, Prettier) are configured — conventions are maintained manually.

## Language & Framework

- **Framework:** Astro 5.18.1 with TypeScript frontmatter
- **Language:** TypeScript in `.astro` frontmatter (`---` blocks), plain JavaScript in utilities
- **Styling:** Tailwind CSS utility classes with custom semantic layer
- **HTML:** Generated statically, hand-written in components

## File Organization

- Components in `src/components/` — PascalCase filenames (e.g., `TeamCard.astro`)
- Pages in `src/pages/` — File name determines route
- Data in `src/data/` — Static JSON files
- Utilities in `src/utils/` — camelCase JS modules
- Layouts in `src/layouts/` — PascalCase filenames

## Code Style

### Astro Frontmatter

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import site from '../data/site.json';

interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
const currentPath = normalizePath(Astro.url.pathname);
---
```

- Imports sorted: layouts → components → utils → data (no strict enforcement)
- TypeScript interfaces declared for component props
- Data transformations (sorting, filtering) done in frontmatter at build time
- No `export default` in components (Astro uses implicit default export)

### Naming Conventions

| Category | Convention | Example |
|----------|-----------|---------|
| Components | PascalCase | `TeamCard.astro`, `PageHero.astro` |
| Variables | camelCase | `featuredPublication`, `sortedPublications` |
| JSON keys | camelCase | `labName`, `relatedPublications` |
| CSS classes | kebab-case (Tailwind) + semantic | `page-shell`, `section-space`, `bg-parchment` |
| Data attributes | kebab-case | `data-year-filter`, `data-publications-archive` |
| File names | PascalCase (components), kebab-case (pages/data) | `Header.astro`, `site.json` |

### Component Props Pattern

Components typically accept props via Astro's `Props` interface and are destructured inline:

```astro
---
// Some components like PublicationsArchive import data directly
// instead of receiving props
import publications from '../data/publications.json';
---
```

**Inconsistency:** Some components receive data as props (`<TeamCard member={member} />`), while others import JSON directly (`import publications from '../data/publications.json'`).

### Template Syntax

- JSX-like expressions for rendering lists: `{items.map((item) => <li>{item}</li>)}`
- IIFE (immediately invoked function expressions) used for conditional logic in templates:
  ```astro
  {navigation.main.map((item) => (
    (() => {
      const href = safeHref(item.href);
      const isActive = currentPath === normalizePath(href);
      return (
        <a href={href} class:list={[...]}>...</a>
      );
    })()
  ))}
  ```
- `class:list` used for conditional classes (Astro directive)
- No ternary inside class strings (uses `class:list` with conditional arrays)

### CSS Conventions

**Tailwind-first approach:**
```astro
<div class="page-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
```

**Custom semantic utilities in `src/index.css`:**
```css
@layer components {
  .page-shell { @apply mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8; }
  .section-space { @apply py-16 sm:py-20; }
  .surface-card { @apply rounded-[1.5rem] border border-line bg-surface shadow-card; }
}
```

- Custom utilities use existing Tailwind tokens (not arbitrary values where avoidable)
- Some arbitrary values present: `tracking-[0.28em]`, `rounded-[1.5rem]`, `gap-[0.95fr_1.05fr]`
- Accessibility focus styles defined globally: `ring-2 ring-pine ring-offset-2`

### Error Handling

- Minimal explicit error handling
- `publications.find()` may return `undefined` (no fallback shown in some components)
- JSON parsing assumes well-formed data (no try/catch around imports)
- `safeHref` utility provides URL validation for external links

### Data Access Patterns

- **JSON-as-CMS:** All content imported from `src/data/*.json`
- Build-time data transformation (sorting, filtering, grouping):
  ```js
  const sortedPublications = [...publications].sort((left, right) => right.year - left.year);
  const groupedMembers = ['Postdocs', ...].map(group => 
    team.filter(member => member.group === group)
  );
  ```
- No runtime data fetching

### Comment Style

- Minimal comments in code
- No JSDoc on utility functions (`safeHref` has no documentation)
- No TODO/FIXME comments (issues are not tracked inline)
