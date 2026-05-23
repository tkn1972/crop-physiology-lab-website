# Phase 2: Core Content Pages - Context

**Gathered:** 2026-05-22
**Status:** Ready for planning

<domain>
## Phase Boundary

This phase populates the three core identity pages — **Research**, **Team**, and **Publications** — with real, structured content. It extends the Phase 1 foundation by migrating content from JSON-only storage to the Markdown + frontmatter format required by REQ RES-03 and TEAM-04, while keeping tabular data (publications) in JSON.

**In scope:**
- Write 5 research theme Markdown files with YAML frontmatter (`src/content/research/`)
- Write PI + 4 team member Markdown files with YAML frontmatter (`src/content/team/`)
- Update `src/data/publications.json` with `id` fields for cross-linking
- Update pages (`research.astro`, `team.astro`, `publications.astro`) to read from Markdown + JSON
- Update components (ResearchCard, TeamCard) to consume Markdown-frontmatter data
- Replace all SVG team placeholders with representative stock/AI photos
- Replace any remaining placeholder URLs with real COLPOS URLs (completing SITE-04)
- Preserve existing client-side filtering scripts on Publications page

**Out of scope:**
- Capabilities and Methods page content (Phase 3)
- Contact form functionality (Phase 4)
- SEO / accessibility / performance optimization (Phase 5)
- Spanish localization (v2)
- Alumni network (v2)
- CMS integration (v2)

</domain>

<decisions>
## Implementation Decisions

### Content Storage Strategy
- **D-01 (Team migration):** Migrate team data entirely to Markdown with YAML frontmatter in `src/content/team/`. The existing `src/data/team.json` will be deprecated and removed. Components read Markdown files using standard file I/O (`import.meta.glob` or Node `fs` + front-matter parser) to maintain portability. Each file includes: `name`, `role`, `group`, `interests`, `bio`, `email`, `image`, `order`.
- **D-02 (Research migration):** Migrate the 5 research themes to Markdown files in `src/content/research/`. Each file uses YAML frontmatter for: `title`, `summary`, `methods` (array), `tools` (array), `outputs` (array), `publicationIds` (array of IDs matching `publications.json`), and optional `description` (longer text). The existing `src/data/research.json` will be deprecated.
- **D-03 (Publications stay JSON):** Publications data remains in `src/data/publications.json` — it is already the optimal format for structured tabular data. No Markdown migration needed. `PUB-04` (portable JSON format) is already satisfied.

### Research-Publication Cross-Linking
- **D-04 (Publication IDs):** Add a dedicated `id` field (slug-style, e.g. `marquez-2025-trait-stability`) to each entry in `publications.json`. This provides a stable, readable reference key.
- **D-05 (Frontmatter references):** Research theme Markdown frontmatter will contain a `publicationIds: []` array referencing publication IDs. At build time, the component looks up matching entries in `publications.json` and renders clickable links (title + DOI). This satisfies RES-02's requirement for theme ↔ publication cross-links.

### Team Photos
- **D-06 (Photo sourcing):** Use representative stock or AI-generated portrait photos for each team member. Replace the existing `/images/team/lab-group.svg` placeholder with individual photos per member (e.g., `/images/team/elena-marquez.jpg`). The component already supports real image paths — just update the `image` field in each member's frontmatter.
- **D-07 (Photo fallbacks):** If a real photo is not available for a specific member during implementation, retain the SVG placeholder for that member only. Do not block the phase for missing images.

### Publication Topic Filters
- **D-08 (Keep current tags):** Retain the existing publication tag taxonomy (Breeding, Drought, HPLC, Statistics, Reproducibility, etc.) as filter topics. Do not reorganize into research-theme-aligned topics. The current tags are granular, accurate, and already mapped to publications. The `Featured` tag continues to mark the highlighted publication.

### Component Data Flow
- **D-09 (Markdown-first components):** Update `ResearchCard.astro` and `TeamCard.astro` to receive their data from Markdown-frontmatter objects instead of JSON objects. The prop interfaces remain similar but source changes from JSON import → frontmatter. `PublicationsArchive.astro` and `PublicationItem.astro` remain JSON-driven.
- **D-10 (Build-time data loading):** All Markdown file reading happens at build time in Astro frontmatter (`---` blocks). Do NOT use runtime data fetching. Use `import.meta.glob` or a standard front-matter parser (like the `gray-matter` npm package if needed, or native Node `fs` + manual YAML parse).

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Documents
- `.planning/PROJECT.md` — Project context, core value, constraints, key decisions
- `.planning/REQUIREMENTS.md` — All 39 v1 requirements with IDs mapped to phases (Phase 2 covers RES-01–RES-03, TEAM-01–TEAM-04, PUB-01–PUB-04)
- `.planning/ROADMAP.md` — 5-phase roadmap with requirement mappings and success criteria
- `.planning/STATE.md` — Current project status (Phase 1 complete)
- `.planning/phases/01-foundation/01-CONTEXT.md` — Prior phase decisions (design system locked, content portability rules, font loading, nav structure)

### Content Architecture
- `AGENTS.md` — Critical decision: "Do NOT use Astro Content Collections." All content must be standard Markdown + JSON, portable to any static generator.
- `src/content/research/README.md` — Expected frontmatter schema for research theme files
- `src/content/team/README.md` — Expected frontmatter schema for team member files

### Existing Data Models
- `src/data/research.json` — Current research data (to be migrated to Markdown)
- `src/data/team.json` — Current team data (to be migrated to Markdown)
- `src/data/publications.json` — Current publication data (stay JSON, add `id` field)
- `src/data/site.json` — Site metadata (rebrand complete, COLPOS identity confirmed)

### Existing Components (Reusable / Updateable)
- `src/components/ResearchCard.astro` — Expandable accordion card for research themes
- `src/components/TeamCard.astro` — Member card with `featured` variant for PI
- `src/components/PublicationsArchive.astro` — Filterable archive with year/topic buttons + client-side `<script>`
- `src/components/PublicationItem.astro` — Individual publication row with `featured` variant
- `src/components/PageHero.astro` — Page header section
- `src/components/CTASection.astro` — Call-to-action section (may add recruitment CTA)
- `src/layouts/BaseLayout.astro` — Page wrapper with fonts loaded
- `src/utils/safeHref.js` — URL-safe link handling

### Design System (Locked — do not modify)
- `tailwind.config.js` — Color palette, fonts, shadows, timing functions
- `src/index.css` — Semantic utilities (page-shell, section-space, surface-card, eyebrow, button-*, focus styles)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- **ResearchCard.astro**: Uses `<details>` / `<summary>` accordion pattern with `group-open:` CSS utility. Displays methods as tag pills, tools/outputs/related publications in 3-column grid. Must be updated to accept Markdown-frontmatter props and resolve `publicationIds` to clickable DOI links.
- **TeamCard.astro**: Supports `featured` prop for PI (2-column grid on desktop, larger image). Displays interests as tag pills. Uses `safeHref` for external links (ORCID, Google Scholar). Currently takes JSON-shaped props — update to consume Markdown frontmatter fields.
- **PublicationsArchive.astro**: Ships client-side JS for year/topic filtering. Uses `data-year` and `data-tags` data attributes, `aria-pressed` for button states. Should be preserved as-is. No structural changes needed.
- **PublicationItem.astro**: Displays year, title, authors, journal, tags, DOI link. `featured` variant increases title size. No changes needed for Phase 2.
- **PageHero.astro**: Reusable across all pages. Use for updated Research, Team, and Publications page intros.

### Established Patterns
- **Content via JSON + `.map()`**: Components import JSON and iterate. For Phase 2, pages will read Markdown files via `import.meta.glob` (or equivalent) and pass frontmatter objects to components.
- **Tailwind semantic utilities**: All styling uses utility classes. New components or page sections should reuse `.page-shell`, `.section-space`, `.surface-card`, `.eyebrow`, `.button-*`.
- **Client-side filtering via inline `<script>`**: Only PublicationsArchive uses this. Preserve. No additional client-side JS needed for Phase 2.
- **Data attributes for JS hooks**: `data-publications-archive`, `data-year-filter`, `data-topic-filter`, `data-publication-list`. Follow this pattern if adding new filtering.

### Integration Points
- **Research page connects at**: `src/pages/research.astro` → reads `src/content/research/*.md` → passes frontmatter to `ResearchCard`
- **Team page connects at**: `src/pages/team.astro` → reads `src/content/team/*.md` → passes frontmatter to `TeamCard` (PI gets `featured=true`)
- **Publications page connects at**: `src/pages/publications.astro` → imports `src/data/publications.json` → passes to `PublicationsArchive`
- **Cross-link connects at**: `ResearchCard.astro` resolves `publicationIds` against `publications.json` and renders `<a href={safeHref(pub.link)}>` links.

</code_context>

<specifics>
## Specific Ideas

- Content is modeled on the existing `research.json`, `team.json`, and `publications.json` data — the data models are sound, just need migration to Markdown for research and team.
- Research themes (`research.json`) already have `relatedPublications` arrays with title strings. Replace these with `publicationIds` arrays referencing the new `id` field in `publications.json`.
- The PI (Elena Marquez) should appear prominently at the top of the Team page with `featured=true` and a larger card layout.
- Team grouping order should remain: PI → Postdocs → Graduate Students → Technicians (controlled by an `order` field in frontmatter or sort logic in page).
- Home page (`src/pages/index.astro`) may need minor updates to reference the new content sources (e.g., featured publications, research themes for the homepage preview).
- All placeholder `example.edu` URLs must be replaced with real COLPOS URLs (site.json already updated in Phase 1, but double-check content files).

</specifics>

<deferred>
## Deferred Ideas

None — all discussion stayed within phase scope.

</deferred>

---

*Phase: 2-Core Content Pages*
*Context gathered: 2026-05-22*
