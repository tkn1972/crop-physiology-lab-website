# Requirements: Crop Physiology Lab Website

**Defined:** 2026-05-22
**Core Value:** A person visiting the site can understand what the lab does, what it can do for them, and how to get involved — within 2 minutes of browsing.

## v1 Requirements

### Foundation (SITE)

Requirements for the underlying site infrastructure, design system, and shared components.

- [ ] **SITE-01**: Site builds successfully as static HTML using Astro + Tailwind CSS
- [ ] **SITE-02**: Responsive design works on mobile, tablet, and desktop
- [ ] **SITE-03**: Custom web fonts (Playfair Display, Source Sans 3, IBM Plex Mono) are loaded and rendered
- [ ] **SITE-04**: All placeholder URLs (example.edu) are replaced with real COLPOS URLs
- [ ] **SITE-05**: SEO basics implemented: robots.txt, XML sitemap, Open Graph meta tags, JSON-LD for publications
- [ ] **SITE-06**: Accessibility: skip-to-content link, visible focus indicators, ARIA live regions for filters, sufficient color contrast (WCAG AA)
- [ ] **SITE-07**: Content is stored in portable Markdown + JSON format (not coupled to Astro-specific features)
- [ ] **SITE-08**: Update workflow documented: how to edit content, commit changes, and trigger deployment

### Identity & Navigation (ID)

- [ ] **ID-01**: Lab rebranded from "Plant Systems Physiology Lab" to "Crop Physiology Lab" across all pages and metadata
- [ ] **ID-02**: Navigation includes all 8 pages: Home, Research, Capabilities, Methods & Protocols, Team, Publications, Students, Contact
- [ ] **ID-03**: Header shows lab name, affiliation (COLPOS), and active page highlighting
- [ ] **ID-04**: Footer includes navigation links, contact info, institutional affiliation, and copyright

### Research (RES)

- [ ] **RES-01**: Research page displays 5 research themes with title, summary, methods, tools, and expected outputs
- [ ] **RES-02**: Each research theme links to related publications and capabilities
- [ ] **RES-03**: Research content is editable via Markdown files with YAML frontmatter

### Capabilities (CAP)

- [ ] **CAP-01**: Capabilities page lists lab equipment and analytical services available to collaborators
- [ ] **CAP-02**: Each capability includes description, relevant equipment, sample requirements, and contact for inquiries
- [ ] **CAP-03**: Capabilities page is framed as "collaboration opportunities" (not commercial services)
- [ ] **CAP-04**: Capabilities content is editable via Markdown files with YAML frontmatter

### Methods & Protocols (METH)

- [ ] **METH-01**: Methods & Protocols page displays structured SOPs with category, version, and description
- [ ] **METH-02**: Protocols are browseable by category and searchable by title/keyword
- [ ] **METH-03**: Each protocol includes context: when to use it, what you'll get, estimated time, equipment needed
- [ ] **METH-04**: Protocols are written in Markdown (not just linked PDFs) for searchability
- [ ] **METH-05**: Protocol content is editable via Markdown files with YAML frontmatter

### Team (TEAM)

- [ ] **TEAM-01**: Team page displays PI prominently with bio, photo, and contact info
- [ ] **TEAM-02**: Lab members grouped by role (Postdocs, Graduate Students, Technicians)
- [ ] **TEAM-03**: Each member has real photo (not SVG placeholder), name, role, interests, and bio
- [ ] **TEAM-04**: Team content is editable via Markdown files with YAML frontmatter

### Publications (PUB)

- [ ] **PUB-01**: Publications page lists peer-reviewed publications with title, authors, journal, year, DOI link
- [ ] **PUB-02**: Publications are filterable by year and research topic
- [ ] **PUB-03**: Featured publication highlighted at top of page
- [ ] **PUB-04**: Publication data is stored in JSON (portable to other generators)

### Student Recruitment (STU)

- [ ] **STU-01**: Students page shows clear pathways for graduate and undergraduate involvement
- [ ] **STU-02**: Current openings / projects are listed with specific descriptions
- [ ] **STU-03**: Requirements, expectations, and application process are clearly stated
- [ ] **STU-04**: FAQ section addresses common questions (prior experience, project structure, funding)
- [ ] **STU-05**: Student page content is editable via Markdown + JSON

### Contact & Forms (CONT)

- [ ] **CONT-01**: Contact page includes lab address, email, and PI contact info (real COLPOS details)
- [ ] **CONT-02**: Contact form is functional — submissions are delivered to lab email with spam protection
- [ ] **CONT-03**: Form includes fields: name, email, inquiry type (collaboration / grad student / undergrad / other), subject, message
- [ ] **CONT-04**: Form shows success/error feedback after submission
- [ ] **CONT-05**: Form uses honeypot field and/or invisible reCAPTCHA for spam prevention

---

## v2 Requirements

Deferred to future release. Not in current roadmap.

### Spanish Localization

- **LANG-01**: Site content available in Spanish (dual-language support)
- **LANG-02**: Language toggle in navigation

### Data & Resources Sharing

- **DATA-01**: Dedicated page for shared datasets with download links and metadata
- **DATA-02**: GitHub repository links for analysis scripts and code

### Alumni Network

- **ALUM-01**: Former lab members section with current positions and contact (opt-in)
- **ALUM-02**: Alumni testimonials for student recruitment

### Advanced Analytics

- **ANALYTICS-01**: Privacy-respecting analytics (Plausible or similar) to understand visitor patterns
- **ANALYTICS-02**: Publication download/click tracking

---

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Blog / news feed | Adds maintenance burden; PI won't update regularly. Can be added later if needed. |
| CMS integration | Static Markdown/JSON files are simpler, more portable, and easier to maintain than a CMS. |
| Multi-language support (Spanish) | Important for COLPOS audience, but deferred to v2 to focus on core content first. |
| E-commerce / payment processing | Lab services are collaborative, not fee-based. No need for payments. |
| Real-time chat / messaging | Email contact form is sufficient for academic communication. |
| User accounts / login | Public information site doesn't need authentication. |
| Video content hosting | Adds complexity and hosting costs. Text + images sufficient for v1. |
| Mobile app | Not needed. Responsive web site serves all devices. |
| Advanced analytics (Google Analytics) | Privacy concerns and adds JS. Deferred to v2. |

---

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

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

*Requirements defined: 2026-05-22*
*Last updated: 2026-05-22 after initial definition*
