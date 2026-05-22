# Phase 1: Foundation - Context

**Gathered:** 2026-05-22
**Status:** Ready for planning

<domain>
## Phase Boundary

This phase establishes the design system, shared components, and content infrastructure for the Crop Physiology Lab website. It makes rebranding from "Plant Systems Physiology Lab" structural (not cosmetic), creates a clean directory layout for content storage, and builds the component primitives that all downstream phases rely on.

**In scope:** Design system tokens (Tailwind config, semantic utilities), shared components (Header, Footer, BaseLayout, PageHero, CTASection), content directory structure (`src/content/`, `src/data/`), navigation for all 8 pages, rebrand (name/metadata), font loading, responsive layout verification, build pipeline verification, placeholder page stubs for pages not yet built (Capabilities, Methods & Protocols, Students, Contact). Content portability is top priority — all content in Markdown + JSON.

**Out of scope:** Actual page content population (Phase 2), contact form functionality (Phase 4), SEO/structured data (Phase 5), accessibility audit (Phase 5), actual photos (Phase 2), actual COLPOS URLs (Phase 2), Spanish localization (v2).

</domain>

<decisions>
## Implementation Decisions

### Content Storage Strategy
- **D-01:** Keep all existing JSON data files (`research.json`, `team.json`, `publications.json`, `students.json`, `resources.json`) as-is in `src/data/`. JSON is portable and appropriate for structured/tabular data. The requirement "editable via Markdown with YAML frontmatter" (SITE-07, RES-03, METH-05, etc.) applies specifically to the **12 new Markdown content files** being introduced in Phases 2-3:
  - 5 Research themes (Phase 2)
  - 1 Team PI + 1 per member (Phase 2, supplementing existing `team.json`)
  - 5+ Capabilities (Phase 3)
  - 5+ Methods & Protocols (Phase 3)
- **D-02:** Move the Resources SOP data currently in `src/data/resources.json` into `src/content/protocols/` as Markdown files in Phase 3. The existing `resources.json` can be deprecated or co-exist during transition. The Resources page will be split: Capabilities (equipment), Methods & Protocols (SOPs). The old Resources page is effectively being reorganized.

### Brand Identity
- **D-03:** Rebrand is complete and structural: every instance of "Plant Systems Physiology Lab" must be replaced with "Crop Physiology Lab" across codebase. Files affected: `site.json` labName, Header eyebrow ("Plant Physiology Research" → change pending), navigation labels, page titles (`index.astro`, etc.), meta descriptions. No old brand strings should remain after this phase.
- **D-04:** Header eyebrow line "Plant Physiology Research" should be updated to reflect the new lab identity ("Crop Physiology Research" or simply removed if redundant with COLPOS affiliation).
- **D-05:** COLPOS affiliation must be added to branding: "Colegio de Postgraduados" (or "COLPOS") displayed in the header alongside the lab name. Current header shows "Plant Physiology Research" eyebrow — this should change to "COLPOS | Crop Physiology Research" or similar.

### Navigation Structure
- **D-06:** Navigation must include all 8 pages: Home, Research, Capabilities, Methods & Protocols, Team, Publications, Students, Contact. Current nav has 7 pages (missing Capabilities and Methods & Protocols, has "Resources" which is being replaced/split).
- **D-07:** For the navy label "Methods & Protocols" (long for a nav bar): use full label "Methods & Protocols" on the page heading, use abbreviated "Methods" in the header navigation to conserve space. Full label is used in page `<h1>`, footer, and any CTAs.
- **D-08:** Footer navigation should link to: Research Themes, Capabilities, Methods & Protocols, Graduate Training, Publications, and Contact — updated from current footer which points to old Resources page.

### Font Loading
- **D-09:** Use Google Fonts CDN (`<link>` tags in BaseLayout `<head>`) for Playfair Display, Source Sans 3, and IBM Plex Mono. Use `display=swap` for FOUT prevention. Rationale: Simplest for static site, no build-step changes, free. Self-hosting is an optimization for later if performance audit (Phase 5) flags it.
- **D-10:** Load weights: Playfair Display 400, 500, 600, 700; Source Sans 3 400, 600, 700; IBM Plex Mono 400. These match the Tailwind config font-weights used (font-normal=400, font-semibold=600, font-bold=700).

### Design System
- **D-11:** Trust the existing design system. Tailwind config colors and utilities (page-shell, section-space, surface-card, eyebrow, button-*, etc.) are locked. No palette changes in this phase. The tailwind.config.js already has a good botanical/academic palette.
- **D-12:** "Parchment" background (`bg-parchment` #f8f7f5) with subtle gradient overlay is locked. This gives the site its distinctive warm academicese.
- **D-13:** Focus-visible ring color (`ring-pine ring-offset-2 ring-offset-parchment`) is locked. Provides accessible keyboard navigation.

### Component Architecture
- **D-14:** BaseLayout wraps all pages with Header + Footer. Props: `title`, `description`. All pages must use BaseLayout.
- **D-15:** Header is sticky with `backdrop-blur` effect on `bg-parchment/95`. Active page highlighting uses `bg-soft text-charcoal` class. Mobile menu is `<details>` element with animated hamburger icon (pure CSS transition). Keep this pattern — do not replace with JS-based mobile nav.
- **D-16:** Footer uses 3-column grid on desktop: (brand/mission) + (nav links) + (contact info). Institutional affiliation text must be updated to COLPOS. Copyright year should auto-update (use JS or Astro rendering).

### Content Directory Structure
- **D-17:** `src/content/` directory created for Markdown content with YAML frontmatter. Subdirectories:
  - `src/content/research/` — 5 theme .md files (Phase 2)
  - `src/content/team/` — pi.md, member .md files (Phase 2)
  - `src/content/capabilities/` — equipment .md files (Phase 3)
  - `src/content/protocols/` — SOP .md files (Phase 3)
  - `src/content/students/` — recruitment .md, faq .md files (Phase 4)
- **D-18:** `src/data/` directory remains for JSON data: `navigation.json`, `site.json`, `publications.json`, `team.json`, and any new JSON files (equipment-specs.json for Phase 3).
- **D-19:** All page components should read Markdown content using standard file I/O or glob patterns. Do NOT use Astro Content Collections — the AGENTS.md decision is explicit: "Do NOT use Astro-specific features for content storage." Content portability is sacred.

### Page Placeholder Strategy
- **D-20:** Create placeholder `.astro` stubs for 4 new pages now (Capabilities, Methods & Protocols, Students update, Contact update) so navigation links work and downstream phases have files to edit. Each stub should: use BaseLayout, show the page title via PageHero, display a brief "Coming soon" message, and include the correct lab name.
- **D-21:** The existing Home, Research, Team, Publications pages should also be updated with rebrand ("Plant Systems" → "Crop Physiology") and new navigation labels.

### Responsive Behavior
- **D-22:** Mobile navigation uses `<details>` element (already implemented). Ensure `aria-label` on `<summary>` and mobile nav `<nav>` are correct. Header stays sticky on scroll (`sticky top-0`).
- **D-23:** Verify responsive breakpoints: Tailwind's default (sm: 640px, md: 768px, lg: 1024px, xl: 1280px) is working correctly across all pages. No custom breakpoints needed for v1.

### Build Verification
- **D-24:** `npm run build` must succeed with zero errors and zero warnings. The existing `astro.config.mjs` should be verified. Output goes to `dist/`.
- **D-25:** Ensure `dist/` is in `.gitignore` and not committed (user should add `.gitignore` if missing).

### Claude's Discretion
- Component implementation details (how to render Markdown frontmatter, how to organize team members by role) — planner decides based on codebase patterns
- Exact style for placeholder stubs (keep consistent with existing `.surface-card` pattern)
- Whether to add scroll-to-top button (not in requirements, defer to Phase 5)
- Font loading optimization details (preconnect to fonts.googleapis.com)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Documents
- `.planning/PROJECT.md` — Project context, core value, constraints, key decisions
- `.planning/REQUIREMENTS.md` — All 39 v1 requirements with IDs mapped to phases
- `.planning/ROADMAP.md` — 5-phase roadmap with requirement mappings and success criteria
- `.planning/STATE.md` — Current project status

### Architecture & Decisions
- `AGENTS.md` — Project-specific guidance: content portability, Astro 5 + Tailwind CSS 3, design system, file naming conventions. Critical decision: "Content portability is sacred. Do NOT use Astro Content Collections."
- `tailwind.config.js` — Color palette, fonts, shadows, timing functions (LOCKED — do not modify)
- `src/index.css` — Semantic utilities (page-shell, section-space, surface-card, eyebrow, button-*, focus styles) (LOCKED — do not modify)

### Existing Components (Reusable Assets)
- `src/components/Header.astro` — Sticky header with nav + mobile hamburger
- `src/components/Footer.astro` — 3-column footer with nav + contact
- `src/layouts/BaseLayout.astro` — Page wrapper (head, header, footer)
- `src/components/PageHero.astro` — Section header with eyebrow + title + description
- `src/components/CTASection.astro` — Call-to-action section
- `src/utils/safeHref.js` — URL-safe link handling with external detection (existing, reusable)

### Existing Data (To Be Updated)
- `src/data/navigation.json` — Update for 8 pages and COLPOS affiliation
- `src/data/site.json` — Rebrand data: labName, institution, location, email, URLs
- `src/data/research.json`, `publications.json`, `team.json` — Data models are sound; content updated in Phase 2
- `src/data/resources.json` — To be migrated to Markdown or deprecated in Phase 3

### Design System (Locked)
- Colors: parchment (#f8f7f5), surface (#ffffff), ink (#1f2328), muted (#5b6257), line (#d9d6cf), pine (#4a7c59), sage (#6b8e6f), earth (#b35844), soft (#ece7df), charcoal (#2b2d31)
- Fonts: Playfair Display (serif headings), Source Sans 3 (body), IBM Plex Mono (labels/metadata)
- Shadows: card (0 18px 40px rgba(31, 35, 40, 0.06))
- Max width: content (76rem)
- Focus: ring-2 ring-pine ring-offset-2 ring-offset-parchment

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- **Header.astro**: Sticky header with `<details>`-based mobile menu (CSS-only hamburger animation with `group-open:`), active page highlighting via `aria-current`, page-shell container. Reuse as-is. Must update nav labels and eyebrow text.
- **Footer.astro**: 3-column grid, reads from `navigation.footer` and `site.json`. Reuse as-is. Must update nav/footer entries and site data.
- **BaseLayout.astro**: Minimal wrapper with `<Header />`, `<main>`, `<Footer />`. Needs Google Fonts `<link>` tags added to `<head>`.
- **PageHero.astro**: Accepts eyebrow, title, description, and children for hero sections. Reuse for all page stubs.
- **CTASection.astro**: Call-to-action with eyebrow, title, description, actions array. Reuse as-is.
- **safeHref utility**: Already handles external link detection and URL safety. Reuse everywhere.

### Established Patterns
- **Content via JSON**: Components import JSON data files and iterate with `.map()`. Pattern established on Home page (research, publications, resources). Markdown content should follow similar import patterns (using `fs` or glob in Astro frontmatter).
- **Tailwind semantic utilities**: All styling uses utility classes; no component-scoped CSS. The `@layer components` in `src/index.css` provides semantic shortcuts (`.page-shell`, `.section-space`, etc.). New components should use these.
- **Astro file-based routing**: Pages are `.astro` files in `src/pages/`. No framework-level routing.
- **Client JS**: Inline `<script>` tags for filtering (Publications, Methods pages). Keep minimal — Phase 3 will add filtering scripts.

### Integration Points
- **Navigation links**: `src/data/navigation.json` drives both Header and Footer. Updating this single file updates both components.
- **Site metadata**: `src/data/site.json` is the single source of truth for lab name, mission, contact info, hero text. Update once, reflects everywhere.
- **New pages connect at**: `src/pages/` directory. New `.astro` files create routes automatically.
- **Content feed**: `src/content/` needs to be created. Astro frontmatter parsing is built-in but agents should read files with standard Markdown parsers (front-matter package or `matter`) to maintain portability.

</code_context>

<specifics>
## Specific Ideas

- The existing page hero image is `hero/glasshouse.svg` — update alt text during rebrand if needed.
- The Resources page (`src/pages/resources.astro`, `src/components/ResourceLibrary.astro`) is being reorganized into Capabilities (equipment list) and Methods & Protocols (SOPs, protocols). Don't delete old components yet — Phase 3 will migrate/deprecate.
- Hero CTAs on homepage: current links to Research, Team, Students — keep these, update labels.
- Mobile nav should include all 8 links; desktop nav should too. The current `<details>` already supports arbitrary number of items via `.map()` over `navigation.main`.
- Footer currently has eyebrow "Institutional Research Group" — update to "Colegio de Postgraduados" (COLPOS).
</specifics>

<deferred>
## Deferred Ideas

### Reviewed Todos (not folded)
- Spanish localization (LANG-01, LANG-02) — deferred to v2 per REQUIREMENTS.md Out of Scope
- CMS integration — defer per REQUIREMENTS.md Out of Scope
- Blog/news feed — defer per REQUIREMENTS.md Out of Scope
- Advanced analytics — defer to v2 per REQUIREMENTS.md Out of Scope
- Alumni network (ALUM-01, ALUM-02) — deferred to v2 per REQUIREMENTS.md Out of Scope

### Noted for Later Phases
- **Phase 2**: Content population — actual research themes, team bios, real publications, real photos
- **Phase 2**: Actual COLPOS URLs replacing `example.edu` placeholders
- **Phase 3**: Migrate Resources JSON data to Markdown protocol files in `src/content/protocols/`
- **Phase 4**: Contact form functionality (spam protection, validation)
- **Phase 5**: SEO (robots.txt, sitemap, Open Graph, JSON-LD), accessibility audit, performance optimization

None — all discussion stayed within phase scope.

</deferred>

---

*Phase: 1-Foundation*
*Context gathered: 2026-05-22*
