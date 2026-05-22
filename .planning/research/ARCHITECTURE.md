# Architecture Research: Academic Lab Website

**Date:** 2026-05-22
**Domain:** Academic research lab website (static, content-driven)
**Context:** Rebuilding existing Astro site with content portability as top priority

---

## Recommended Architecture

### Pattern: Content-First Static Site

The architecture is deliberately simple — static HTML files with no runtime logic. All "dynamic" behavior (filtering, search) happens client-side with vanilla JavaScript.

```
Content Layer (Markdown + JSON)
         ↓
Build Layer (Astro compiler)
         ↓
Static Output (HTML + CSS + minimal JS)
         ↓
Static Host (Netlify / Vercel / GitHub Pages)
```

### Content Structure

```
src/content/           # Portable content (Markdown + frontmatter)
├── research/
│   ├── breeding.md
│   ├── stress-physiology.md
│   ├── controlled-environment.md
│   ├── analytical-chemistry.md
│   └── experimental-design.md
├── protocols/
│   ├── hplc-sop.md
│   ├── rcbd-guide.md
│   └── ...
├── team/
│   ├── elena-marquez.md
│   ├── samir-haddad.md
│   └── ...
├── publications/
│   └── (or keep in JSON for structured data)
└── equipment/
    ├── hplc-system.md
    ├── growth-chambers.md
    └── ...

src/data/              # Semi-structured data (JSON)
├── site.json          # Lab metadata, contact info
├── navigation.json    # Navigation links
├── students.json      # Student guidance content
└── equipment.json     # Equipment list with specs

public/                # Static assets (copied as-is)
├── images/
│   ├── team/          # Real photos (not SVG placeholders)
│   ├── research/
│   └── equipment/     # Equipment photos
├── favicon.svg
└── robots.txt
```

**Note:** Using standard Markdown files in `src/content/` instead of Astro Content Collections maximizes portability. If you migrate to Hugo, Jekyll, or 11ty, these files work with minimal or no changes.

---

## Page Architecture

### Page Inventory (updated from current site)

| Page | Route | Purpose | Source |
|------|-------|---------|--------|
| Home | `/` | Identity, mission, quick navigation to key sections | site.json + content |
| Research | `/research` | Research themes with methods, tools, outputs | Markdown files |
| Capabilities | `/capabilities` | Equipment, services, collaboration models | Markdown + JSON |
| Methods & Protocols | `/protocols` | Structured SOPs and methodological guides | Markdown files |
| Team | `/team` | Lab members, roles, bios, contact | Markdown files |
| Publications | `/publications` | Peer-reviewed work with filters | JSON data |
| Students | `/students` | Recruitment, pathways, expectations | Markdown + JSON |
| Contact | `/contact` | Functional contact form + lab info | site.json + form backend |

**New pages added:** Capabilities, Methods & Protocols
**Removed:** Resources (replaced by Methods & Protocols, which is more specific)

### Component Architecture

Keep the existing component pattern but expand:

```
src/components/
├── layout/
│   ├── BaseLayout.astro       # HTML shell (head, meta, scripts)
│   ├── Header.astro           # Navigation (already exists)
│   └── Footer.astro           # Footer (already exists)
├── sections/
│   ├── PageHero.astro         # Page header section (already exists)
│   ├── CTASection.astro       # Call-to-action banner (already exists)
│   └── SectionHeader.astro    # Reusable section header (already exists)
├── cards/
│   ├── ResearchCard.astro     # Research theme card (already exists)
│   ├── TeamCard.astro         # Team member card (already exists)
│   ├── PublicationItem.astro  # Publication row (already exists)
│   ├── EquipmentCard.astro    # Equipment/service capability — NEW
│   └── ProtocolCard.astro     # Protocol/method card — NEW
└── interactive/
    ├── PublicationsArchive.astro  # Year/topic filters + inline JS (already exists)
    ├── ProtocolBrowser.astro      # Category/search filters — NEW
    └── ContactForm.astro          # Functional form with validation — NEW
```

### Data Flow

```
Markdown/JSON content files
         ↓
Astro frontmatter (import at build time)
         ↓
Props → Components (server-side render)
         ↓
Static HTML with embedded data attributes
         ↓
Client-side JS for interactivity (filters, search, form)
```

---

## Build Order Dependencies

Since this is a full rebuild, there are no strict technical dependencies between pages. However, from a **content and design** perspective:

1. **Foundation first:** BaseLayout, Header, Footer, design system (CSS tokens)
2. **Home page:** Needs overview of all sections
3. **Research + Team:** Core identity pages, needed before others
4. **Publications:** Can be built independently once data exists
5. **Capabilities + Methods:** New content, can be built in parallel with Research
6. **Students + Contact:** Student page references Research/Capabilities; Contact needs form backend

**Recommended phase order:**
1. Foundation (layout, design system, shared components)
2. Core pages (Home, Research, Team)
3. Content pages (Publications, Capabilities, Methods)
4. Recruitment pages (Students, Contact)
5. Polish (SEO, accessibility, performance, content review)

---

## State Management

**None needed.** This is a static site.

- All content is pre-rendered at build time
- Client-side state is minimal (active filter selections, form input values)
- No global state, no stores, no contexts

---

## SEO Architecture

```html
<!-- Per-page meta tags -->
<meta name="description" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:type" content="website">
<meta property="og:image" content="/images/og-default.png">

<!-- JSON-LD for publications (Schema.org) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "...",
  "author": [...],
  "datePublished": "...",
  "publisher": {...}
}
</script>
```

- Each page gets unique title and description
- Publications get structured data for Google Scholar indexing
- Open Graph tags for social sharing

---

## Form Architecture

### Contact Form Flow (Netlify Forms)

```
User fills out contact form
         ↓
Form submission to Netlify endpoint
         ↓
Netlify validates + spam filters
         ↓
Email notification sent to lab
         ↓
Optional: Store in Netlify dashboard
```

**Implementation:**
```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <p hidden>
    <label>Don't fill this out: <input name="bot-field" /></label>
  </p>
  <!-- form fields -->
</form>
```

### Student Inquiry Form

Same pattern but with different fields (interest area, degree level, etc.):

```html
<form name="student-inquiry" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="student-inquiry" />
  <!-- name, email, degree level, interest area, message -->
</form>
```

---

## Deployment Architecture

```
GitHub repository
         ↓
Push triggers build (GitHub Actions or Netlify/Vercel hook)
         ↓
Build: npm run build (Astro compiles to static HTML)
         ↓
Deploy to CDN (Netlify Edge / Vercel Edge)
         ↓
Global distribution (fast load times for international collaborators)
```

**Branch strategy:**
- `main` — Production branch, auto-deploys on push
- Feature branches for content updates (optional, for review)

---

## Content Update Workflow

**For PI or designated student:**

1. Edit Markdown or JSON file in `src/content/` or `src/data/`
2. Commit change: `git commit -am "content: update team member"`
3. Push: `git push origin main`
4. Auto-build and deploy (takes ~30 seconds)
5. Site updated

**No CMS, no login, no web interface needed.** Just text files and git.

---

## Performance Targets

| Metric | Target | Current Status |
|--------|--------|----------------|
| First Contentful Paint | < 1.5s | Static HTML is instant |
| Largest Contentful Paint | < 2.5s | Depends on images |
| Cumulative Layout Shift | < 0.1 | Static layout, minimal JS |
| Time to Interactive | < 3s | Minimal client-side JS |
| Core Web Vitals (all) | Good | Static sites excel here |

---

## Security Considerations

- **No server-side code** — No XSS, SQL injection, or authentication vulnerabilities
- **safeHref utility** — Prevents javascript: scheme injection
- **rel="noreferrer"** on external links — Privacy protection
- **honeypot field** in forms — Spam prevention without CAPTCHA
- **No API keys in frontend** — No secrets to leak
- **Static hosting** — No server to compromise

The security model is: there is almost nothing to attack.
