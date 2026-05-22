# Features Research: Academic Lab Website

**Date:** 2026-05-22
**Domain:** Academic research lab website
**Purpose:** Understand what pages and features a credible, effective lab website needs

---

## Table Stakes (Must-Have)

These are expected on any modern lab website. Missing any makes the lab look disorganized.

### 1. Identity & Branding
- **Lab name and affiliation** prominently displayed
- **Logo or visual identity**
- **Department/institution links** (real URLs, not placeholders)
- **Tagline or mission statement** — what the lab does in one sentence

### 2. Research Themes
- **Clear research areas** — 3-5 focused themes (not generic)
- **Methods and approaches** — how the lab does research
- **Expected outputs** — what collaborators/students can expect
- **Visuals** — diagrams, photos, or illustrations of work

### 3. Team
- **Principal Investigator** — bio, photo, contact
- **Lab members** — name, role, interests, photo
- **Former members / alumni** — shows stability and growth
- **Group photo** — humanizes the lab

### 4. Publications
- **Peer-reviewed publications** — with DOI links
- **Preprints / working papers** — shows current activity
- **Featured / highlighted work** — draws attention to key papers
- **Filterable / searchable** — helps visitors find relevant work

### 5. Contact / Get Involved
- **Email and physical location**
- **Clear pathways** — how to collaborate, how to join
- **Functional contact form** — not cosmetic
- **Response time expectations** — sets expectations

---

## Differentiators (Competitive Advantage)

These make the lab stand out and attract collaborators and students.

### 6. Capabilities / Equipment / Services
- **What the lab can do for others** — analytical services, phenotyping, etc.
- **Equipment list** — with specifications and capabilities
- **Service/request workflow** — how to request lab services
- **Collaboration models** — cost-sharing, joint publications, etc.

### 7. Methods & Protocols
- **Documented, structured protocols** — not just "we do HPLC"
- **SOPs with version control** — shows rigor
- **Reproducibility standards** — shows scientific integrity
- **Training materials** — for students and collaborators

### 8. Student Recruitment (Structured)
- **Clear pathways** — grad vs. undergrad, how to apply
- **Current openings / projects** — specific opportunities
- **Requirements / expectations** — what students need to know
- **Testimonials / alumni outcomes** — social proof
- **Onboarding process** — shows organization

### 9. Data & Resources
- **Shared datasets** — available for reuse
- **Analysis code / scripts** — GitHub links
- **Templates and tools** — for collaborators
- **Open science practices** — transparency

---

## Anti-Features (Deliberately NOT Building)

| Feature | Why Not |
|---------|---------|
| Blog / news feed | Adds maintenance burden; hard to keep updated. If PI won't blog regularly, skip it. |
| Twitter/X social embed | Privacy concerns, external dependency, can break. Link to socials instead. |
| Real-time chat | Overkill. Email is sufficient for academic contact. |
| User accounts / login | Not needed for a public info site. |
| E-commerce / payments | Lab services are collaborative, not fee-based (in this context). |
| Multi-language support | Start with English. Add Spanish later if needed. |
| Photo gallery | Equipment photos are fine; a dedicated gallery page is unnecessary. |
| Video content | Adds hosting complexity. Text + images are sufficient. |
| Event calendar | Academic calendars are hard to maintain. Link to department events instead. |

---

## Feature Complexity Estimates

| Feature | Complexity | Notes |
|---------|-----------|-------|
| Identity / branding | Low | Design + copy |
| Research themes | Low | Content + layout |
| Team profiles | Low | Content + layout |
| Publications | Medium | JSON data + filtering |
| Contact form | Medium | Form backend + validation |
| Capabilities / equipment | Medium | Content + structured data |
| Methods & protocols | Medium-High | Content-heavy, needs good structure |
| Student recruitment | Medium | Content + clear pathways |
| Data & resources | Medium | Content + download links |
| SEO / sitemap | Low | Meta tags + sitemap |
| Accessibility improvements | Medium | ARIA + color contrast + keyboard |
| Performance | Low | Static site is already fast |

---

## Content Strategy

**The key insight:** A lab website lives or dies on **content quality**, not technology. The PI must commit to:

1. **Keeping team info current** — new students join, others graduate
2. **Updating publications** — annual or semi-annual updates
3. **Maintaining protocols** — methods evolve, versions matter
4. **Real URLs** — no placeholder `example.edu` links

**Recommendation:** Design the site so the PI (or a designated grad student) can update content by editing Markdown/JSON files and committing to git. No CMS needed, but clear documentation on how to update each section.

---

## Comparison with Existing Site

| Feature | Current Site (Plant Systems) | Target Site (Crop Physiology) |
|---------|------------------------------|-------------------------------|
| Identity | Plant Systems Physiology Lab | Crop Physiology Lab |
| Research | 5 themes, methods/tools/outputs | Same pattern, updated content |
| Team | 5 members, all use same SVG photo | Same structure, real photos |
| Publications | 8 publications, DOI links | Same pattern, updated content |
| Contact | Cosmetic form only | **Functional form needed** |
| Capabilities | **Missing** | **New page** |
| Methods | Resources library (10 items) | **Dedicated Methods & Protocols page** |
| Students | FAQ-style guidance | **Clear recruitment pathways** |
| SEO | Basic meta tags | **Sitemap, robots.txt, structured data** |

---

## Key Dependencies Between Features

1. **Contact form** depends on hosting choice (Netlify Forms if Netlify, Formspree otherwise)
2. **Student recruitment** benefits from **Methods & Protocols** (shows rigor)
3. **Capabilities** should reference **Research themes** (equipment supports research)
4. **Publications** should reference **Research themes** and **Team** (shows connection)
5. **All content** should follow the same structure (Markdown + JSON) for maintainability

---

## What Makes a Lab Website "Good"

From browsing top-tier lab sites and academic best practices:

1. **Clarity within 10 seconds** — A visitor should know what the lab does immediately
2. **Credibility signals** — Real photos, actual publications, working links, clear affiliation
3. **Pathways to action** — How to collaborate, how to join, how to contact
4. **Evidence of organization** — Structured protocols, documented methods, clear timelines
5. **Updated content** — Nothing says "dead lab" like a 3-year-old publications list
