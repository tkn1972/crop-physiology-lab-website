# Phase 1: Foundation - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-05-22
**Phase:** 1-Foundation
**Areas discussed:** (User skipped interactive discussion — decisions inferred from codebase analysis and project documents)

---

## Content Storage Strategy

| Option | Description | Selected |
|--------|-------------|----------|
| (a) Convert all data to Markdown now | Migrate research.json, team.json, etc. to Markdown with YAML frontmatter | |
| (b) Keep JSON for tabular data, use Markdown for rich-text pages | JSON stays for structured data; new content (research themes, protocols) uses Markdown | ✓ |
| (c) Convert only new pages now, Phase 2 handles existing data | Hybrid: existing JSON stays until Phase 2 | |

**User's choice:** D-01 — Keep existing `src/data/` JSON files and introduce `src/content/` Markdown for new Phases 2-3 content. Rationale: JSON already has sound data models for publications, team, and research. Markdown is more appropriate for long-form content with YAML frontmatter (research themes, protocols, capabilities). This maintains content portability while avoiding unnecessary migration of working data.

**Notes:** The requirement "editable via Markdown with YAML frontmatter" (SITE-07, RES-03, etc.) applies to new content files. Existing JSON data is structured/tabular and portable. The `resources.json` data will be migrated to Markdown in Phase 3 when splitting Resources into Capabilities + Methods & Protocols.

---

## Font Loading Method

| Option | Description | Selected |
|--------|-------------|----------|
| Google Fonts CDN | `<link>` tags in BaseLayout head, `display=swap` | ✓ |
| npm font packages | `@fontsource/*` packages, import in CSS | |
| Self-hosted woff2 | Download font files, serve from `public/` | |

**User's choice:** D-09 — Google Fonts CDN with `display=swap`. Rationale: Simplest for static site, no build changes, free. Self-hosting is a Phase 5 performance optimization if Lighthouse flags it.

**Notes:** Weights to load: Playfair Display 400, 500, 600, 700; Source Sans 3 400, 600, 700; IBM Plex Mono 400. Preconnect to `fonts.googleapis.com` and `fonts.gstatic.com` for performance.

---

## Navigation Label for Long Page Name

| Option | Description | Selected |
|--------|-------------|----------|
| Full "Methods & Protocols" everywhere | Consistent but takes significant nav space | |
| Abbreviate to "Methods" in nav, full on page | Saves space, clear context | ✓ |
| "Protocols" only | Too narrow; methods cover more than protocols | |

**User's choice:** D-07 — Abbreviate to "Methods" in header navigation, use full "Methods & Protocols" in page `<h1>`, footer, and CTAs.

**Notes:** This preserves both usability (short nav label) and clarity (full context on page).

---

## Brand Identity (Header Eyebrow)

| Option | Description | Selected |
|--------|-------------|----------|
| "Crop Physiology Research" | Descriptive, matches rebrand | |
| "COLPOS | Crop Physiology" | Affiliation first, shorter | ✓ (direction) |
| Remove eyebrow entirely | Cleanest, but loses institutional context | |

**User's choice:** D-05 — Update header eyebrow to reflect COLPOS affiliation. Exact text TBD during implementation; likely "COLPOS | Crop Physiology Research" or "Colegio de Postgraduados". This replaces the current "Plant Physiology Research" eyebrow.

**Notes:** This is the user's vision — COLPOS affiliation must be visible in the header alongside the lab name.

---

## Claude's Discretion

- Component implementation patterns (specific prop naming, data-fetch approaches)
- Exact placeholder stub styling (use `.surface-card` pattern)
- Scroll-to-top button (out of scope for Phase 1)
- Font preconnect optimization (recommended but optional)

## Deferred Ideas

- Spanish localization (v2)
- CMS integration (out of scope per requirements)
- Blog/news feed (out of scope per requirements)
- Advanced analytics (v2)
- Alumni network (v2)

All deferred per REQUIREMENTS.md "Out of Scope" section.
