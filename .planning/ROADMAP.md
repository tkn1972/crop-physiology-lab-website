# Roadmap: Crop Physiology Lab Website

**Created:** 2026-05-22
**Project:** Crop Physiology Lab Website
**Mode:** Vertical MVP
**Total Requirements:** 39 v1 requirements
**Total Phases:** 5

---

## Phase Overview

| # | Phase | Goal | Requirements | Success Criteria | Mode |
|---|-------|------|--------------|-----------------|------|
| 1 | Foundation | Build the design system, shared components, and content infrastructure | SITE-01 to SITE-08, ID-01 to ID-04 | 12 | mvp |
| 2 | Core Content | Rebrand and populate Research, Team, and Publications pages | RES-01 to RES-03, TEAM-01 to TEAM-04, PUB-01 to PUB-04 | 11 | mvp |
| 3 | Differentiators | Build new Capabilities and Methods & Protocols pages | CAP-01 to CAP-04, METH-01 to METH-05 | 9 | mvp |
| 4 | Recruitment | Create student recruitment pathways and functional contact form | STU-01 to STU-05, CONT-01 to CONT-05 | 10 | mvp |
| 5 | Polish & Launch | SEO, accessibility, performance optimization, content review, deployment | SITE-05, SITE-06 | 2 | mvp |

---

## Phase 1: Foundation

**Goal:** Establish the design system, shared components, and content infrastructure so downstream phases can build pages quickly and consistently.

**Requirements:**
- SITE-01: Site builds successfully as static HTML using Astro + Tailwind CSS
- SITE-02: Responsive design works on mobile, tablet, and desktop
- SITE-03: Custom web fonts loaded and rendered
- SITE-04: All placeholder URLs replaced with real COLPOS URLs
- SITE-07: Content stored in portable Markdown + JSON format
- SITE-08: Update workflow documented
- ID-01: Lab rebranded to "Crop Physiology Lab"
- ID-02: Navigation includes all 8 pages
- ID-03: Header with lab name, COLPOS affiliation, active page highlighting
- ID-04: Footer with nav links, contact info, affiliation, copyright

**Success Criteria:**
1. Site builds without errors (`npm run build` succeeds)
2. All shared components (Header, Footer, PageHero, CTASection) render correctly
3. Navigation works with active state highlighting on all 8 pages
4. Rebrand complete — no references to "Plant Systems Physiology Lab" remain
5. Fonts load correctly (visible in browser dev tools Network tab)
6. Content directory structure is clean and documented
7. Mobile menu (hamburger) opens and closes correctly
8. Sticky header stays fixed on scroll

**Deliverables:**
- Updated BaseLayout, Header, Footer components
- Design system tokens (colors, fonts, spacing) locked
- Content directory structure (`src/content/`, `src/data/`)
- Navigation links updated for all 8 pages
- Placeholder content stubs for pages not yet built
- Build pipeline verified and working

**Estimated Effort:** Medium
**Dependencies:** None (first phase)

---

## Phase 2: Core Content Pages

**Goal:** Rebrand and populate the three core identity pages — Research, Team, and Publications — with real, structured content.

**Requirements:**
- RES-01: Research page displays 5 themes with title, summary, methods, tools, outputs
- RES-02: Each research theme links to related publications and capabilities
- RES-03: Research content editable via Markdown with YAML frontmatter
- TEAM-01: PI displayed prominently with bio, photo, contact info
- TEAM-02: Members grouped by role (Postdocs, Graduate Students, Technicians)
- TEAM-03: Real photos for each member (not SVG placeholders)
- TEAM-04: Team content editable via Markdown with YAML frontmatter
- PUB-01: Publications listed with title, authors, journal, year, DOI link
- PUB-02: Publications filterable by year and research topic
- PUB-03: Featured publication highlighted at top
- PUB-04: Publication data in JSON

**Success Criteria:**
1. Research page accurately describes current lab research with realistic methods/tools
2. Team page shows real or representative lab members with distinct photos
3. Publications page lists 8+ publications with working DOI links
4. Year/topic filters on Publications page work correctly with ARIA announcements
5. Featured publication is distinguishable from others (visual treatment + content)
6. All content is in Markdown/JSON format (editable without touching components)
7. Existing client-side filtering scripts are preserved or improved
8. Responsive layout works at all breakpoints (mobile grid collapse)

**Deliverables:**
- Research content (5 Markdown files with YAML frontmatter)
- Team content (Markdown files for each member + JSON for grouping)
- Publications data (updated JSON with real COLPOS publications)
- ResearchCard, TeamCard, PublicationItem components (updated or new)
- PublicationsArchive component with working filters

**Estimated Effort:** Medium-High
**Dependencies:** Phase 1 (layout, navigation, design system)

---

## Phase 3: Differentiator Pages

**Goal:** Build the two new pages that differentiate this lab — Capabilities (equipment/services) and Methods & Protocols — with structured, searchable content.

**Requirements:**
- CAP-01: Capabilities page lists equipment and analytical services
- CAP-02: Each capability includes description, equipment, sample requirements, contact
- CAP-03: Page framed as "collaboration opportunities" (not commercial)
- CAP-04: Content editable via Markdown with YAML frontmatter
- METH-01: Methods & Protocols page displays structured SOPs
- METH-02: Protocols browseable by category and searchable
- METH-03: Each protocol includes context: when to use, what you'll get, time, equipment
- METH-04: Protocols written in Markdown (not just PDF links)
- METH-05: Protocol content editable via Markdown with YAML frontmatter

**Success Criteria:**
1. Capabilities page reads as academic collaboration, not a service catalog
2. At least 5 capabilities listed with realistic equipment and specifications
3. Methods & Protocols page has 5+ protocols with clear categories
4. Category filter and search on Methods page work correctly
5. Protocols include practical context (when to use, expected outcomes)
6. Content is in Markdown format, not just download links
7. Cross-references exist between Capabilities, Methods, and Research pages
8. Empty state shown when no protocols match filter criteria

**Deliverables:**
- Capabilities content (Markdown files for each capability)
- Equipment data (JSON with specs)
- Methods & Protocols content (Markdown files for each protocol)
- EquipmentCard, ProtocolCard components (new)
- ProtocolBrowser component with category filter + search (new)
- Updated navigation to include new pages

**Estimated Effort:** Medium-High
**Dependencies:** Phase 1 (layout, navigation), Phase 2 (content patterns established)

---

## Phase 4: Recruitment & Contact

**Goal:** Create clear pathways for prospective students and functional contact mechanisms.

**Requirements:**
- STU-01: Students page shows pathways for grad and undergrad involvement
- STU-02: Current openings / projects listed with specific descriptions
- STU-03: Requirements, expectations, and application process stated clearly
- STU-04: FAQ section with common questions
- STU-05: Content editable via Markdown + JSON
- CONT-01: Contact page with real COLPOS address, email, PI contact
- CONT-02: Functional contact form with spam protection
- CONT-03: Form fields: name, email, inquiry type, subject, message
- CONT-04: Form shows success/error feedback after submission
- CONT-05: Form uses honeypot and/or invisible reCAPTCHA

**Success Criteria:**
1. Student page lists specific projects/opportunities (not generic "join us")
2. Clear distinction between grad and undergrad pathways
3. Application process is step-by-step and actionable
4. FAQ answers the top 5-8 questions prospective students ask
5. Contact form submits successfully and sends email notification
6. Form validation prevents empty or invalid submissions
7. Success message displayed after submission
8. Spam protection is invisible to users (no CAPTCHA challenge)
9. Error state handles network failures gracefully
10. Form backend configured (Netlify Forms or Formspree account set up)

**Deliverables:**
- Students page content (Markdown with recruitment info + JSON for FAQ)
- Contact page with functional form component
- Form backend configuration (Netlify or Formspree)
- Form validation logic (client-side + server-side)
- Student recruitment CTA on Home page linking to Students page

**Estimated Effort:** Medium
**Dependencies:** Phase 1 (layout, design system)

---

## Phase 5: Polish & Launch

**Goal:** Optimize for search engines, ensure accessibility compliance, verify content accuracy, and deploy.

**Requirements:**
- SITE-05: SEO basics — robots.txt, XML sitemap, Open Graph, JSON-LD
- SITE-06: Accessibility — skip-to-content, focus indicators, ARIA live regions, contrast

**Success Criteria:**
1. robots.txt allows indexing of all public pages
2. XML sitemap generated and submitted to search engines
3. Open Graph meta tags present on every page with unique titles/descriptions
4. JSON-LD structured data included for publications (Schema.org)
5. Google Search Console verification code added
6. Skip-to-content link works (visible on Tab press)
7. All interactive elements have visible focus indicators
8. ARIA live regions announce filter changes on Publications and Methods pages
9. Color contrast ratios meet WCAG AA (4.5:1 for normal text, 3:1 for large text)
10. Site passes basic accessibility audit (axe-core or Lighthouse)
11. Performance audit shows all Core Web Vitals as "Good"
12. No broken links (internal or external)
13. Content review complete — all text is accurate, no placeholders, real URLs
14. Site deployed to production host (Netlify/Vercel)
15. Custom domain configured (if applicable)

**Deliverables:**
- public/robots.txt
- astro-sitemap configuration
- Open Graph meta tags (BaseLayout updated)
- JSON-LD for publications
- Accessibility audit report
- Performance audit report
- Deployment configuration
- Content accuracy checklist (signed off)

**Estimated Effort:** Low-Medium
**Dependencies:** Phase 1-4 (all pages built)

---

## Requirement-to-Phase Mapping

| Requirement | Phase | Status |
|-------------|-------|--------|
| SITE-01 | Phase 1 | Pending |
| SITE-02 | Phase 1 | Pending |
| SITE-03 | Phase 1 | Pending |
| SITE-04 | Phase 1 | Pending |
| SITE-05 | Phase 5 | Pending |
| SITE-06 | Phase 5 | Pending |
| SITE-07 | Phase 1 | Pending |
| SITE-08 | Phase 1 | Pending |
| ID-01 | Phase 1 | Pending |
| ID-02 | Phase 1 | Pending |
| ID-03 | Phase 1 | Pending |
| ID-04 | Phase 1 | Pending |
| RES-01 | Phase 2 | Pending |
| RES-02 | Phase 2 | Pending |
| RES-03 | Phase 2 | Pending |
| CAP-01 | Phase 3 | Pending |
| CAP-02 | Phase 3 | Pending |
| CAP-03 | Phase 3 | Pending |
| CAP-04 | Phase 3 | Pending |
| METH-01 | Phase 3 | Pending |
| METH-02 | Phase 3 | Pending |
| METH-03 | Phase 3 | Pending |
| METH-04 | Phase 3 | Pending |
| METH-05 | Phase 3 | Pending |
| TEAM-01 | Phase 2 | Pending |
| TEAM-02 | Phase 2 | Pending |
| TEAM-03 | Phase 2 | Pending |
| TEAM-04 | Phase 2 | Pending |
| PUB-01 | Phase 2 | Pending |
| PUB-02 | Phase 2 | Pending |
| PUB-03 | Phase 2 | Pending |
| PUB-04 | Phase 2 | Pending |
| STU-01 | Phase 4 | Pending |
| STU-02 | Phase 4 | Pending |
| STU-03 | Phase 4 | Pending |
| STU-04 | Phase 4 | Pending |
| STU-05 | Phase 4 | Pending |
| CONT-01 | Phase 4 | Pending |
| CONT-02 | Phase 4 | Pending |
| CONT-03 | Phase 4 | Pending |
| CONT-04 | Phase 4 | Pending |
| CONT-05 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 39 total
- Mapped to phases: 39
- Unmapped: 0 ✓

---

## Milestones

| Milestone | Phase | Criteria |
|-----------|-------|----------|
| Site skeleton live | Phase 1 | All pages render, navigation works, rebrand complete |
| Core identity complete | Phase 2 | Research, Team, Publications populated with real content |
| Differentiators live | Phase 3 | Capabilities and Methods pages functional with content |
| Recruitment ready | Phase 4 | Students page + functional contact form deployed |
| Production launch | Phase 5 | SEO optimized, accessible, deployed, content reviewed |

---

## Risk Adjustments

| Risk | Mitigation | Phase |
|------|-----------|-------|
| Content goes stale | Design trivial update workflow + assign maintainer | Phase 1 |
| Over-designing | Lock design system early, hard deadline | Phase 1 |
| Form spam | Honeypot + invisible reCAPTCHA + form backend filtering | Phase 4 |
| Vague recruitment | Specific projects, clear requirements, step-by-step process | Phase 4 |
| Content coupled to Astro | Use standard Markdown + JSON for all content | Phase 1 |

---

*Roadmap created: 2026-05-22*
*Mode: Vertical MVP — each phase delivers end-to-end user value*
