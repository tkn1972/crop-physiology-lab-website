---
title: Concerns & Technical Debt
last_mapped: 2026-05-22
scope: Full repository
---

# Concerns & Technical Debt

## Critical Issues

### 1. Stack Mismatch with Specification
- **Location:** `instructions.md` vs. actual codebase
- **Issue:** Original specification calls for **React + Vite + React Router**, but the implementation is **Astro + Tailwind + static HTML**
- **Impact:** Significant divergence from original requirements; new developers may be confused by outdated spec
- **Recommendation:** Update `instructions.md` to reflect actual Astro stack, or rebrand it as a spec discrepancy document

## High Priority Issues

### 2. Missing Font Loading
- **Location:** Global (`tailwind.config.js`, `BaseLayout.astro`)
- **Issue:** Three custom fonts declared in Tailwind config (Playfair Display, Source Sans 3, IBM Plex Mono) but **never loaded** via `<link>` tag or `@import`
- **Impact:** Site silently falls back to Georgia, system-ui, and ui-monospace — degrades visual identity
- **Fix:** Add Google Fonts or Fontsource links to `BaseLayout.astro`:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Source+Sans+3&family=IBM+Plex+Mono&display=swap" rel="stylesheet">
  ```

### 3. Non-Functional Contact Form
- **Location:** `src/pages/contact.astro` lines 70-99
- **Issue:** Complete form UI with `<button type="submit">` but no `action`, no `method`, no validation, no success/error feedback
- **Impact:** Users can fill out and submit the form, but nothing happens — poor UX, potential confusion
- **Fix Options:**
  - Add Netlify Forms: `<form name="contact" netlify>`
  - Add Formspree: `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
  - Add client-side validation with visual feedback
  - Add a note explaining the form is for demonstration purposes only

### 4. Placeholder URLs in Production Data
- **Location:** `src/data/site.json` lines 38, 42
- **Issue:** Department links use `https://example.edu/plant-biology` and `https://example.edu/crop-science`
- **Impact:** Links lead to generic example domain — non-functional in production
- **Fix:** Replace with actual institutional URLs or remove the links

### 5. No Test Suite
- **Location:** Repository-wide
- **Issue:** Zero automated tests (unit, integration, E2E, accessibility)
- **Impact:** No safety net for regressions; manual testing required for all changes
- **Recommendation:** Add Vitest for utilities, Playwright for E2E, axe-core for accessibility

## Medium Priority Issues

### 6. Fragile Publication Deduplication
- **Location:** `src/components/PublicationsArchive.astro` line 68
- **Issue:** Featured publication excluded by **title string comparison**, not by ID:
  ```js
  .filter((publication) => publication.title !== featuredPublication.title)
  ```
- **Impact:** If two publications share the same title, both would be excluded from the list
- **Fix:** Filter by a unique identifier instead (e.g., DOI or add an `id` field):
  ```js
  .filter((publication) => publication !== featuredPublication)
  ```

### 7. No Content Security Policy (CSP)
- **Location:** `src/layouts/BaseLayout.astro`
- **Issue:** No CSP meta tag or headers configured
- **Impact:** Vulnerable to XSS if any user-controlled content is rendered
- **Fix:** Add CSP meta tag or configure at hosting level:
  ```html
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
  ```

### 8. No Image Optimization
- **Location:** `public/images/`, `src/pages/index.astro`, `src/pages/team.astro`, `src/pages/research.astro`
- **Issue:** Only SVG illustrations are used; no Astro `<Image>` component, no responsive images, no lazy loading
- **Impact:** If raster images are added in the future, they won't be optimized
- **Fix:** Use Astro's built-in `astro:assets` Image component for any future raster images

### 9. Client-Side Filter Accessibility Gaps
- **Location:** `src/components/PublicationsArchive.astro`, `src/components/ResourceLibrary.astro`
- **Issue:** Filter buttons have `aria-pressed` but no `aria-live` regions to announce filter result changes to screen readers
- **Impact:** Screen reader users won't know when filter results update
- **Fix:** Add `aria-live="polite"` regions around filtered content:
  ```html
  <div aria-live="polite" aria-atomic="true" class="sr-only">
    {visibleCount} publications shown
  </div>
  ```

## Low Priority Issues

### 10. No Sitemap or robots.txt
- **Location:** Missing from `public/` or generated output
- **Impact:** Search engines may not discover all pages efficiently
- **Fix:** Add `public/robots.txt` and consider `@astrojs/sitemap`

### 11. Manual JSON Content Management
- **Location:** `src/data/*.json`
- **Issue:** All content updates require hand-editing JSON files
- **Impact:** Non-technical users cannot update content; error-prone manual process
- **Fix Options:**
  - Astro Content Collections (typed content with frontmatter)
  - Headless CMS integration (Sanity, Strapi, Contentful)
  - Netlify CMS / Decap CMS

### 12. No Linting/Formatting Tooling
- **Location:** Repository-wide
- **Issue:** No ESLint, Prettier, or pre-commit hooks
- **Impact:** Inconsistent code style; no automated quality enforcement
- **Fix:** Add `.eslintrc`, `.prettierrc`, and Husky + lint-staged

### 13. Unused/Confusing Specification Document
- **Location:** `instructions.md`
- **Issue:** Contains references to React components (`Header.jsx`, `Footer.jsx`) that don't exist in the Astro codebase
- **Impact:** Confuses new developers; outdated reference
- **Fix:** Archive or update `instructions.md` to match actual implementation

### 14. Single Shared Team Image
- **Location:** `src/data/team.json`
- **Issue:** All 5 team members reference the same SVG placeholder (`/images/team/lab-group.svg`)
- **Impact:** No distinctive avatars; looks unprofessional
- **Fix:** Add individual member photos or distinguish with initials/avatars

## Security Notes

- **safeHref utility** is a positive security measure — prevents javascript: scheme injection
- No XSS vectors detected (all content comes from trusted static JSON, no user input rendered)
- No secrets, API keys, or tokens in codebase
- No authentication or session management (static site)

## Performance Notes

- Static HTML generation means fast first paint
- Zero client-side JavaScript on most pages (only Publications and Resources pages ship minimal vanilla JS)
- No runtime dependencies reduce bundle size to near-zero
- Tailwind CSS purges unused styles in production build
- Missing: image optimization for any future raster images
