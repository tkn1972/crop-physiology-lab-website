# State: Crop Physiology Lab Website

**Project:** Crop Physiology Lab Website
**Status:** Phase 1 Complete — Ready for Phase 2
**Last updated:** 2026-05-22

## Project Reference

See: `.planning/PROJECT.md` (updated 2026-05-22)

**Core value:** A person visiting the site can understand what the lab does, what it can do for them, and how to get involved — within 2 minutes of browsing.
**Current focus:** Phase 2 — Core Content (Research, Team, Publications)

## Phase Status

| Phase | Status | Requirements | Plans | Progress |
|-------|--------|--------------|-------|----------|
| 1 | ✓      | Complete     | 4/4   | 100%     |
| 2 | ○      | Pending      | 0/0   | 0%       |
| 3 | ○      | Pending      | 0/0   | 0%       |
| 4 | ○      | Pending      | 0/0   | 0%       |
| 5 | ○      | Pending      | 0/0   | 0%       |

## Active Work

Phase 1 complete. Ready to start Phase 2.

## Recent Commits

- `docs(01-04): add content update workflow documentation`
- `feat(01-04): commit original codebase assets (components, data, pages, config)`
- `docs(01-03): complete content infrastructure plan summary`
- `feat(01-03): placeholder pages for Capabilities and Methods & Protocols`
- `feat(01-03): create content directory structure with README files`
- `docs(01-02): complete shared components update plan`
- `feat(01-02): add Google Fonts CDN to BaseLayout.astro`
- `feat(01-02): update Footer.astro with COLPOS rebrand`
- `feat(01-02): update Header.astro with COLPOS rebrand`
- `feat(01-01): rebrand site.json with COLPOS identity`

## Context Notes

- Existing codebase is Astro 5 + Tailwind CSS with 9 pages (Crop Physiology Lab branding)
- Rebrand complete — "Plant Systems Physiology Lab" replaced with "Crop Physiology Lab" + COLPOS
- Design system locked (tailwind.config.js, index.css unchanged)
- Google Fonts CDN loaded (Playfair Display, Source Sans 3, IBM Plex Mono)
- Content directory structure created (src/content/ with READMEs)
- Navigation updated for 8 pages ("Methods" in header, full "Methods & Protocols" on page)
- Content portability is top priority (Markdown + JSON)
- Student recruitment is a primary goal (grad + undergrad)

## Upcoming

Phase 2: Core Content — Rebrand and populate Research, Team, and Publications pages with real content

## Phase 1 Summary

Phase 1 (Foundation) completed successfully with 4 plans:

1. **01-01** — Rebrand: Updated site.json, navigation.json, all page meta descriptions. Zero old branding references remain.
2. **01-02** — Shared Components: Updated Header eyebrow (COLPOS), Footer branding, added Google Fonts CDN to BaseLayout. Design system verified unchanged.
3. **01-03** — Content Infrastructure: Created `src/content/` with 5 README directories, placeholder stubs for Capabilities and Methods & Protocols pages.
4. **01-04** — Verification: Build passes (9 pages, zero errors/warnings). Content update workflow documented.

**Key Decisions Carried Forward:**
- Content in Markdown + JSON (no Astro Content Collections)
- Google Fonts CDN with display=swap
- "Methods" in nav, "Methods & Protocols" on page
- Design system locked — no modifications

---
*State tracked by /gsd-progress*
