---
title: Testing & Quality
last_mapped: 2026-05-22
scope: Full repository
---

# Testing & Quality

## Overview

**No test suite exists.** There are zero automated tests of any kind — no unit tests, no integration tests, no end-to-end tests, no visual regression tests, and no accessibility tests.

## Test Status

| Test Type | Status | Tool | Coverage |
|-----------|--------|------|----------|
| Unit tests | ❌ None | — | 0% |
| Integration tests | ❌ None | — | 0% |
| E2E tests | ❌ None | — | 0% |
| Accessibility tests | ❌ None | — | 0% |
| Visual regression | ❌ None | — | 0% |
| Snapshot tests | ❌ None | — | 0% |

## Linting & Formatting

| Tool | Status | Config |
|------|--------|--------|
| ESLint | ❌ Not installed | — |
| Prettier | ❌ Not installed | — |
| Stylelint | ❌ Not installed | — |
| TypeScript | ⚠️ Used in frontmatter (strict mode unknown) | No `tsconfig.json` visible |

## CI/CD

| Pipeline | Status |
|----------|--------|
| GitHub Actions | ❌ No workflows directory |
| Pre-commit hooks | ❌ No `.husky/`, no `lint-staged` |
| Automated build | ❌ None |
| Automated deploy | ❌ None |

## What Would Need Testing

### Components

| Component | Test Priority | What to Test |
|-----------|--------------|-------------|
| `Header.astro` | High | Active route highlighting, mobile menu toggle, safeHref validation |
| `Footer.astro` | Medium | Navigation links render correctly, external links get `rel="noreferrer"` |
| `PublicationsArchive.astro` | High | Year/topic filtering logic, featured publication exclusion, empty states |
| `ResourceLibrary.astro` | High | Search input filtering, category filtering, empty state display |
| `safeHref.js` | High | URL validation, scheme rejection, fallback behavior, external detection |

### Data Integrity

| Data File | Test Priority | What to Test |
|-----------|--------------|-------------|
| `publications.json` | Medium | Valid DOI URLs, unique years, consistent tag spelling |
| `team.json` | Medium | Valid email formats, valid external URLs, image paths exist |
| `site.json` | Low | Required fields present, valid email format |
| `navigation.json` | Low | All hrefs are valid internal paths |

### Page-Level

| Page | Test Priority | What to Test |
|------|--------------|-------------|
| `contact.astro` | Medium | Form elements present (cosmetic), PI info displays correctly |
| `index.astro` | Medium | Hero CTA links valid, featured publications sort correctly |
| All pages | Medium | Meta tags populated, BaseLayout wraps correctly |

### Accessibility

- No automated accessibility scanning (axe, pa11y, Lighthouse CI)
- Manual accessibility features present:
  - `aria-label` on header home link
  - `aria-current="page"` on active nav items
  - `aria-pressed` on filter buttons
  - `aria-label` on mobile menu toggle
  - Focus-visible styles defined globally
  - `sr-only` class for hidden labels
- **Missing:** `aria-live` regions for filter result changes in PublicationsArchive and ResourceLibrary
- **Missing:** Skip-to-content link
- **Missing:** color contrast verification (automated)

## Recommended Testing Stack

For this static Astro site, a practical testing setup would be:

```
Vitest          — Unit tests for utility functions (safeHref, data transforms)
@astrojs/test   — Component-level testing in Astro context
Playwright      — E2E tests for client-side interactivity (filters, navigation)
axe-core        — Automated accessibility scanning
```

## Code Quality Observations

### Positive

- Consistent component naming (PascalCase)
- `safeHref` utility for URL validation (security-conscious)
- `rel="noreferrer"` on external links
- Focus-visible styles for keyboard navigation
- Semantic HTML structure (header, nav, main, footer, article, section)

### Negative

- No automated testing whatsoever
- No linting or formatting enforcement
- No TypeScript strict mode configuration
- No pre-commit quality gates
- No CI/CD pipeline for build verification
