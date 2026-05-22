# Research Summary: Crop Physiology Lab Website

**Date:** 2026-05-22
**Project:** Crop Physiology Lab Website (rebuild from existing Plant Systems site)
**Status:** Research complete — 4 dimensions explored

---

## Key Findings

### Stack: Stick with Astro + Tailwind

- **Astro 5** remains the best choice. Existing codebase gives us a head start.
- **Tailwind CSS** is optimal and already configured. Upgrade to v4 during rebuild if feasible.
- **Content in Markdown + JSON** maximizes portability across generators. Avoid Astro-specific content collections.
- **Form handling:** Netlify Forms (if hosting on Netlify) or Formspree (if hosting elsewhere).

### Table Stakes Features (Must-Have)

1. **Identity & branding** — Lab name, affiliation, mission, real URLs
2. **Research themes** — 5 focused areas with methods, tools, outputs
3. **Team profiles** — PI, members, real photos
4. **Publications** — Peer-reviewed with DOI links, filterable
5. **Contact** — Functional form with validation, clear lab info

### Differentiators (Competitive Advantage)

6. **Capabilities / Equipment** — What the lab can do for collaborators
7. **Methods & Protocols** — Structured, documented SOPs with version info
8. **Student recruitment** — Clear pathways for grad + undergrad, specific projects
9. **Data & resources** — Shared datasets, analysis code, templates

---

## Top Risks (Watch These)

| Rank | Risk | Prevention Strategy |
|------|------|-------------------|
| 1 | **Content goes stale** | Trivial update workflow, calendar reminders, assigned maintainer |
| 2 | **Over-designing** | Lock design system in Phase 1, hard deadline, "good enough" culture |
| 3 | **Form spam** | Honeypot + invisible reCAPTCHA + form backend with filtering |
| 4 | **Vague recruitment** | List specific projects, clear requirements, step-by-step process |
| 5 | **Content coupled to Astro** | Use standard Markdown + JSON, avoid Astro-specific features for content |

---

## Architecture Decisions

- **Content layer:** Markdown/YAML frontmatter + JSON in standard formats
- **Build layer:** Astro 5 static compilation
- **Output:** Pre-rendered HTML, minimal JS, fast hosting
- **Hosting:** Netlify (forms included) or Vercel (best performance)
- **Form backend:** Netlify Forms (simplest) or Formspree (more features, any host)
- **Update workflow:** Edit files → git commit → auto-deploy (~30 seconds)

### Page Architecture (8 pages)

| # | Page | New or Existing | Priority |
|---|------|----------------|----------|
| 1 | Home | Existing (rebrand) | High |
| 2 | Research | Existing (update content) | High |
| 3 | Capabilities | **New** | High |
| 4 | Methods & Protocols | **New** (replaces Resources) | High |
| 5 | Team | Existing (update content) | High |
| 6 | Publications | Existing (update content) | Medium |
| 7 | Students | Existing (restructure recruitment) | Medium |
| 8 | Contact | Existing (make form functional) | Medium |

---

## Content Strategy

**The single most important factor:** Content quality, not technology.

- Lab website lives or dies on **accuracy, freshness, and specificity**
- Design update workflow to be trivial: edit Markdown/JSON, commit, push
- Assign a "website maintainer" role
- Set calendar reminders for content reviews
- No CMS needed — text files in git are simpler and more portable

---

## SEO Recommendations

- Add `astro-sitemap` integration
- Create `public/robots.txt`
- Add Open Graph images
- Include JSON-LD for publications (Schema.org ScholarlyArticle)
- Verify with Google Search Console after launch
- Load actual fonts (Fontsource or Google Fonts CDN)

---

## Performance Expectations

Static sites with Astro excel at performance:
- **First Contentful Paint:** < 1.5s (static HTML is instant)
- **Core Web Vitals:** All "Good" ratings expected
- **Bundle size:** Near-zero JavaScript shipped
- **Hosting:** Edge CDN = fast global load times

---

## Files in This Research

| File | Purpose |
|------|---------|
| `STACK.md` | Technology stack recommendations, hosting options |
| `FEATURES.md` | Feature inventory: table stakes, differentiators, anti-features |
| `ARCHITECTURE.md` | Content structure, page architecture, build order, deployment |
| `PITFALLS.md` | Common mistakes and prevention strategies |
| `SUMMARY.md` | This file — synthesized findings for roadmap creation |

---

*Research completed: 2026-05-22*
*Ready for requirements definition*
