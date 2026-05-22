# Crop Physiology Lab Website

## What This Is

A public-facing website for the Crop Physiology Lab that communicates the lab's research themes, experimental capabilities and equipment, structured methodologies and protocols, team profiles, and publications. The site serves two primary audiences: external research collaborators who need to understand what the lab can offer, and prospective graduate and undergraduate students at COLPOS who want to join a rigorous, well-organized research group.

## Core Value

A person visiting the site can understand what the lab does, what it can do for them, and how to get involved — within 2 minutes of browsing.

## Requirements

### Validated

- ✓ Static multi-page website (7 pages: Home, Research, Team, Resources, Publications, Students, Contact) — existing
- ✓ Responsive design with mobile navigation — existing Astro + Tailwind implementation
- ✓ JSON-driven content (research, team, publications, resources, students data) — existing
- ✓ Tailwind CSS with custom botanical/academic design system — existing
- ✓ Client-side filtering for publications and resources — existing
- ✓ Semantic HTML and basic accessibility (ARIA labels, focus states) — existing
- ✓ URL-safe link handling with external-link detection — existing `safeHref.js`

### Active

- [ ] Rebrand from "Plant Systems Physiology Lab" to "Crop Physiology Lab"
- [ ] Add Capabilities/Equipment page showing lab services and instrumentation
- [ ] Add Methods & Protocols page with structured, documented lab workflows
- [ ] Make contact form functional (form submission with validation and feedback)
- [ ] Improve student recruitment messaging (grad + undergrad pathways)
- [ ] Update all content to reflect actual COLPOS affiliation and real URLs
- [ ] Add actual web font loading (Playfair Display, Source Sans 3, IBM Plex Mono)
- [ ] Improve accessibility (aria-live regions for filters, skip-to-content link, color contrast)
- [ ] Add SEO basics (robots.txt, sitemap, structured data for publications)
- [ ] Ensure content is portable (Markdown/JSON files that can migrate between static site generators)

### Out of Scope

- CMS integration — Content stays in static files for simplicity and portability
- Backend/API server — Static site only; form handling via third-party service
- Real-time features — No chat, live updates, or websockets
- E-commerce or payment processing — No fee-based services
- Multi-language support — Spanish/English deferred unless explicitly requested later
- Advanced analytics — No Google Analytics or tracking scripts
- Image optimization pipeline — SVG-only for now; raster images deferred

## Context

The existing codebase is an Astro 5 + Tailwind CSS static site originally built for a fictional "Plant Systems Physiology Lab." It has solid component architecture and a clean design system but diverges from the original React+Vite spec. The site is fully functional for its scope but has placeholder URLs, missing fonts, a non-functional contact form, and no automated testing. The content is realistic and well-structured — the data model (research.json, team.json, publications.json) is sound and reusable after rebrand.

**Key constraint:** The PI wants content portability above all. The site should be easy to migrate to Hugo, Jekyll, 11ty, or another static generator without rewriting content.

**Student recruitment priority:** The lab has "so much work" and actively wants more people. Student-facing pages need clear pathways for both grad and undergrad involvement, not just a generic FAQ.

## Constraints

- **Tech stack:** Astro + Tailwind CSS (existing foundation). Must remain a static site (no SSR).
- **Content format:** Markdown and JSON — portable to any static site generator.
- **Timeline:** Should be production-ready for student recruitment cycle.
- **Budget:** Free hosting (Netlify, Vercel, GitHub Pages). No paid services unless necessary for forms.
- **Maintenance:** Single-person maintenance (PI or grad student). Must be trivial to update content.
- **Hosting:** Static hosting only. No server-side logic.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Stick with Astro | Existing codebase, clean architecture, portable content | — Pending |
| Content in Markdown + JSON | Maximum portability across static generators | — Pending |
| Form handling via third-party | No backend needed (Netlify Forms, Formspree, or similar) | — Pending |
| Student focus: both grad + undergrad | Explicitly stated need for more people in lab | — Pending |
| Rebrand, not incremental update | Complete name/strategy change from "Plant Systems" | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-05-22 after initialization*
