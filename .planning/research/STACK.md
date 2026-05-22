# Stack Research: Academic Lab Website

**Date:** 2026-05-22
**Domain:** Academic research lab website (static, content-driven)
**Context:** Rebuilding an existing Astro site for the Crop Physiology Lab.

---

## Recommended Stack

### Recommendation: Astro (keep existing)

**Confidence: High (90%)**

Astro remains the best choice for this project:

- ✅ **Content-driven by design** — Astro was built for content websites. Markdown, JSON, and YAML data sources are first-class citizens.
- ✅ **Zero client-side JS by default** — Pages ship only HTML. JS is only included where you explicitly add interactivity (e.g., client-side filtering). This is perfect for an informational lab site.
- ✅ **Framework-agnostic components** — Can use React, Vue, Svelte, or plain HTML/Astro components. Content stays portable.
- ✅ **Fast builds and small output** — Static HTML means excellent Core Web Vitals scores and fast hosting.
- ✅ **File-based routing** — Simple and intuitive. No complex router configuration.
- ✅ **Built-in content collections** — Astro Content Collections (v2+) provide TypeScript-safe content with frontmatter validation. Excellent for structured data like publications, team members, and research themes.
- ✅ **Existing codebase** — The project already has Astro 5 + Tailwind CSS. Rebuilding from scratch wastes effort.
- ✅ **Easy deployment** — Static builds work on any host (Netlify, Vercel, GitHub Pages).

### Runner-up: Eleventy (11ty)

**Confidence: Medium (60%)**

Eleventy is a strong alternative and arguably simpler:

- ✅ **Even faster builds** (1.93s for 4000 files vs Astro's 22.90s in benchmarks)
- ✅ **Zero-config to start** — Just run `npx @11ty/eleventy` on Markdown files
- ✅ **Content is completely decoupled** — Pure Markdown/HTML, no framework lock-in
- ✅ **Multiple template languages** — Use Markdown, Nunjucks, Liquid, or HTML in the same project
- ✅ **Trusted by major orgs** — NASA, CERN, Google, Microsoft, Mozilla
- ❌ **Steep learning curve for template syntax** (Nunjucks/Liquid) vs Astro's JSX-like syntax
- ❌ **Existing codebase is already Astro** — Migration would be non-trivial
- ❌ **Less modern DX** — No built-in Vite HMR, no islands architecture

**Verdict:** Stay with Astro. The existing codebase, modern DX, and content collections make it the pragmatic choice. If starting from absolute zero with no codebase, Eleventy would be a strong contender.

---

## Styling: Tailwind CSS

**Confidence: High (95%)**

- Existing codebase already uses Tailwind 3.4.17 with custom design tokens
- Utility-first approach is fast to implement and maintain
- Custom color palette and typography tokens already defined
- No reason to change — Tailwind is optimal for this use case
- **Note:** The existing site uses Tailwind v3. Consider upgrading to Tailwind v4 during the rebuild for better performance and simplified configuration.

---

## Form Handling: Netlify Forms vs Formspree

For a static site with no backend, contact form submissions need a third-party service.

### Option A: Netlify Forms (Recommended)

**Confidence: High (85%)**

- **Free tier:** Up to 100 submissions/month
- **Zero configuration** for Netlify-hosted sites — just add `netlify` attribute to `<form>`
- **Spam filtering included** (honeypot, reCAPTCHA)
- **Email notifications** and submission dashboard
- **No external dependency** if already hosting on Netlify
- **Simplest implementation:**
  ```html
  <form name="contact" netlify>
    <input type="text" name="name" required />
    <input type="email" name="email" required />
    <textarea name="message" required></textarea>
    <button type="submit">Send</button>
  </form>
  ```

### Option B: Formspree

**Confidence: Medium (70%)**

- **Free tier:** Up to 50 submissions/month
- **Works with any host** (GitHub Pages, Vercel, etc.)
- **More features:** Auto-responses, integrations (Google Sheets, Slack, Airtable)
- **Better spam protection** (machine learning + custom rules)
- **Slightly more complex setup:** Need to create account and get form ID
- **Not free-forever** — paid plans start at $10/month for higher volume

**Verdict:** Netlify Forms is simpler and sufficient. If hosting on Netlify, it's the obvious choice. If hosting on GitHub Pages or Vercel, Formspree is the better option. Given the "simple, easy to maintain" requirement, start with Netlify if hosting there; otherwise use Formspree.

---

## Content Format for Portability

**Critical requirement from the PI:** Content must be portable across static generators.

### Recommended content strategy:

1. **Write content in Markdown (.md) files** — Universally supported by Astro, Hugo, Jekyll, 11ty, Gatsby, etc.
2. **Use YAML frontmatter** for structured data:
   ```yaml
   ---
   title: "HPLC Pigment Quantification SOP"
   category: "Analytical Methods"
   format: "PDF"
   status: "Updated"
   ---
   ```
3. **Keep data in JSON files** for tabular/semi-structured data (team, publications, equipment) — JSON is universally parseable
4. **No framework-specific data formats** — Avoid Astro-specific content collections if maximum portability is the goal. Use standard Markdown + JSON instead.

**Trade-off:** Using standard Markdown + JSON means slightly less type safety than Astro Content Collections, but maximum portability. Given the PI's priority, this is the right trade-off.

---

## Font Loading

**Issue:** Google Fonts (Playfair Display, Source Sans 3, IBM Plex Mono) are declared in Tailwind config but never loaded.

**Fix:** Use Google Fonts CDN or Fontsource (npm packages).

- **Google Fonts CDN** — Simplest, one line in HTML head:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Playfair+Display&family=Source+Sans+3&display=swap" rel="stylesheet">
  ```
- **Fontsource** — Self-hosted, no external dependency, better for privacy:
  ```bash
  npm install @fontsource/playfair-display @fontsource/source-sans-3 @fontsource/ibm-plex-mono
  ```

**Recommendation:** Fontsource for self-hosting, or Google Fonts CDN for simplicity.

---

## Sitemap & SEO

**Missing from existing site:**

- robots.txt
- XML sitemap
- Open Graph images
- Twitter Card meta tags
- Structured data (JSON-LD for publications)

**Recommended additions:**
1. `public/robots.txt` — Simple, static
2. `astro-sitemap` integration — Auto-generates sitemap.xml from routes
3. JSON-LD for publications — Schema.org `ScholarlyArticle` markup for SEO and discoverability
4. Open Graph and Twitter Card images

---

## Hosting

**Recommended:** Netlify or Vercel

| Platform | Pros | Cons |
|----------|------|------|
| **Netlify** | Drag-and-drop deploy, forms included, generous free tier | Slower CDN than Vercel |
| **Vercel** | Fastest edge network, excellent Astro support | Forms need third-party service |
| **GitHub Pages** | Free, integrated with git workflow | No server-side features, slower |

**Recommendation:** Netlify for the simplest setup (forms included), or Vercel for best performance.

---

## What NOT to Use

| Technology | Why Not |
|-----------|---------|
| React / Vue / Svelte | Overkill for a content site. Adds bundle size and complexity. |
| Next.js / Nuxt | Full-stack frameworks. Static site doesn't need SSR or API routes. |
| WordPress | Requires backend, database, security updates. Not portable. |
| Custom CMS | Adds complexity. Markdown files in git are simpler and more portable. |
| Self-hosted form backend | Requires server, maintenance, security. Not "simple and easy to maintain." |
| Analytics (Google Analytics) | Privacy concerns, adds JS, not essential for a lab site. |

---

## Summary

| Layer | Technology | Confidence |
|-------|-----------|------------|
| Framework | Astro 5 | **High** — Keep existing |
| Styling | Tailwind CSS 3 (or 4) | **High** — Keep existing |
| Content | Markdown + JSON | **High** — Portable |
| Forms | Netlify Forms (or Formspree) | **High** — Simple |
| Fonts | Fontsource (self-hosted) | **Medium** — Better privacy |
| Hosting | Netlify or Vercel | **High** — Static hosting |
| SEO | astro-sitemap + JSON-LD | **Medium** — Add these |

**Bottom line:** Stick with Astro + Tailwind. Focus the rebuild effort on content, rebranding, and new pages (Capabilities, Methods & Protocols) rather than fighting the stack.
