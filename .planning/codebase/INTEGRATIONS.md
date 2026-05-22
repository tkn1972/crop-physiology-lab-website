---
title: External Integrations
last_mapped: 2026-05-22
scope: Full repository
---

# External Integrations

## Overview

This is a fully static, self-contained website with minimal external integrations. All content lives in static JSON files; there is no backend, CMS, or third-party API consumption at runtime.

## External Links (References Only)

The site contains links to external academic and institutional resources, but these are plain `<a>` tags — no OAuth, no embeds, no iframes, no API calls.

### External HREFs Found in Data

| Source | URL | Context |
|--------|-----|---------|
| `src/data/team.json` | `https://orcid.org/0000-0002-2211-4501` | PI ORCID profile |
| `src/data/team.json` | `https://scholar.google.com/` | Generic Google Scholar placeholder |
| `src/data/team.json` | `https://www.researchgate.net/` | Generic ResearchGate placeholder |
| `src/data/site.json` | `https://example.edu/plant-biology` | Placeholder department link |
| `src/data/site.json` | `https://example.edu/crop-science` | Placeholder program link |
| `src/data/publications.json` | Multiple DOI links (`https://doi.org/...`) | 8 publication DOIs |

### External Link Handling

```js
// src/utils/safeHref.js
export function safeHref(value, fallback = '/') {
  // Rejects javascript: schemes, validates URL protocol
  // Returns validated URL or fallback
}

export function isExternalHref(value) {
  // Detects URLs starting with http://, https://, or //
}
```

- External links get `target="_blank"` and `rel="noreferrer"` automatically
- `safeHref` is used in `Header.astro`, `Footer.astro`, and `contact.astro`

## Forms &提交

### Contact Form (`src/pages/contact.astro`)

```html
<form class="mt-8 space-y-5">
  <input type="text" />
  <input type="email" />
  <!-- ... -->
  <button type="submit">Send Inquiry</button>
</form>
```

- **Status:** Purely cosmetic — no `action` attribute, no `method`, no validation, no handler
- No form submission backend (no Netlify Forms, Formspree, etc.)
- No CAPTCHA or spam protection

## Analytics & Tracking

- **None.** No Google Analytics, Plausible, PostHog, or any analytics script
- No cookie consent banner
- No performance monitoring (no Sentry, no LogRocket)

## SEO & meta

Handled statically in `src/layouts/BaseLayout.astro`:

```html
<meta name="description" content={description} />
<meta property="og:title" content={title} />
<meta property="og:type" content="website" />
```

- No dynamic sitemap generation
- No robots.txt
- No Open Graph image assets
- No Twitter Card meta tags
- No structured data (JSON-LD, Schema.org)

## Hosting / Deployment Targets

- Astro's static build (`astro build`) produces `dist/` with flat HTML
- Compatible with any static host: Netlify, Vercel, GitHub Pages, Cloudflare Pages, S3 + CloudFront
- No SSR adapter (no `@astrojs/netlify`, `@astrojs/vercel`)

## Fonts

**Declared but not loaded:**
- Playfair Display (serif headings)
- Source Sans 3 (body text)
- IBM Plex Mono (labels, metadata)

Missing: `<link rel="stylesheet">` or `@import` for Google Fonts / Fontsource.
Browsers silently fall back to Georgia, system-ui, and ui-monospace.

## CDN / npm

- All dependencies installed via npm (local `node_modules/`)
- No CDN resources (no jQuery, no Bootstrap CDN, no Google Fonts CDN links)
- No external JavaScript snippets

## Summary Table

| Integration Type | Status |
|-----------------|--------|
| Backend API | None |
| CMS/Headless CMS | None |
| Analytics | None |
| Authentication/OAuth | None |
| Form handling | None (cosmetic only) |
| Comments/Engagement | None |
| Search | Client-side only (ResourceLibrary search) |
| E-commerce/Payments | None |
| Social media embeds | None |
| Advertisements | None |
