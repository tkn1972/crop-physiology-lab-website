# Pitfalls Research: Academic Lab Website

**Date:** 2026-05-22
**Domain:** Academic research lab website
**Purpose:** Identify common mistakes and fragile areas specific to this type of project

---

## Critical Pitfalls

### 1. Content Becomes Stale

**The problem:** Lab websites are notorious for going years without updates. A publications list from 2022, a team page with people who graduated in 2020, placeholder URLs — these signal a dead lab.

**Warning signs:**
- Last publication is >2 years old
- Team page has no current students
- "Coming soon" or placeholder text
- Dead links to `example.edu` or abandoned department pages

**Prevention strategy:**
- Design the update process to be trivial: edit Markdown/JSON, commit, done
- Include a "last updated" date on key pages (auto-generated from git history)
- Set calendar reminders for content reviews (start of semester, end of year)
- Assign a "website maintainer" role to a grad student or postdoc

**Which phase to address:** Phase 1 (foundation) — design the update workflow as part of the architecture. Also Phase 5 (polish) — add content review reminders.

---

### 2. Over-Designing Instead of Shipping

**The problem:** Lab websites often get stuck in design purgatory — endless refinements of color palettes, font choices, and layout tweaks while the site never goes live.

**Warning signs:**
- "Let me try one more font..."
- "What if we add a subtle animation here..."
- "The spacing between these two sections isn't quite right..."
- Months pass without deployment

**Prevention strategy:**
- Define "done" explicitly: content is accurate, all links work, form is functional
- Use a pre-built design system (Tailwind tokens) rather than custom CSS
- Set a hard deadline for launch
- Implement "good enough, ship it" culture for the site (PI must enforce this)

**Which phase to address:** Phase 1 (foundation) — lock the design system early. Don't revisit.

---

### 3. Form Becomes a Spam Magnet

**The problem:** A publicly visible contact form without proper protection will receive spam, phishing attempts, and automated bot submissions.

**Warning signs:**
- Inbox flooded with unrelated emails
- Form submissions for SEO services, fake products
- Automated bot submissions (nonsense text)

**Prevention strategy:**
- Use honeypot fields (invisible to humans, traps for bots)
- Use reCAPTCHA v3 (invisible, no user friction)
- Use a service with built-in spam filtering (Netlify Forms, Formspree)
- Don't put the form email in plain HTML (use a form backend or obfuscate)

**Which phase to address:** Phase 4 (recruitment pages) — implement robust form protection.

---

### 4. Student Recruitment Page Is Vague

**The problem:** Generic "we're always looking for motivated students" text with no specifics. Prospective students can't tell what projects are available, what skills are needed, or how to apply.

**Warning signs:**
- "Contact us if you're interested" — no specifics
- No current openings listed
- No information about funding, timeline, or expectations
- No clear application process

**Prevention strategy:**
- List specific projects available NOW (not "in general")
- Include expected start dates and application deadlines
- Clearly state requirements (skills, degree level, language)
- Create a step-by-step application process
- Include FAQ for common questions
- Add testimonials or outcomes from past students

**Which phase to address:** Phase 4 (students + contact) — explicit recruitment content.

---

## Medium Pitfalls

### 5. Mobile Experience Is Broken

**The problem:** Navigation doesn't work on mobile, text is too small, images overflow. ~50% of visitors will browse on mobile.

**Warning signs:**
- Hamburger menu doesn't open or close
- Horizontal scrolling on small screens
- Text too small to read (< 16px base)
- Tap targets smaller than 44x44px

**Prevention strategy:**
- Test on actual mobile devices (not just browser resize)
- Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`) consistently
- Ensure all interactive elements are touch-friendly
- Use Astro's built-in prefetching for fast navigation

**Which phase to address:** Phase 1 (foundation) — mobile-first design from the start.

---

### 6. SEO Is an Afterthought

**The problem:** No sitemap, no robots.txt, no structured data. Google doesn't index the site properly. Potential collaborators can't find the lab through search.

**Warning signs:**
- Site doesn't appear in Google search for "Crop Physiology Lab COLPOS"
- No Open Graph image when sharing on social media
- Publications not indexed by Google Scholar

**Prevention strategy:**
- Generate sitemap.xml automatically (astro-sitemap integration)
- Add robots.txt with proper directives
- Include Open Graph meta tags on every page
- Add JSON-LD structured data for publications (Schema.org)
- Verify with Google Search Console after launch

**Which phase to address:** Phase 5 (polish) — SEO pass before launch.

---

### 7. Photos Are Generic or Missing

**The problem:** All team members use the same SVG placeholder photo. Equipment has no photos. The site looks like a template, not a real lab.

**Warning signs:**
- Every team member has identical placeholder image
- Equipment list is text-only ("HPLC system") with no visual
- Research themes have no photos or diagrams
- All images are stock photos or illustrations

**Prevention strategy:**
- Take real photos of lab members, equipment, and workspace
- Use diagrams for abstract concepts (not generic illustrations)
- Ensure consistent photo style (lighting, framing, background)
- Compress and optimize images for web (convert to WebP)

**Which phase to address:** Phase 3 (content pages) — content creation must include real photography.

---

### 8. Accessibility Is Ignored

**The problem:** Screen reader users can't navigate the site. Keyboard-only users get stuck. Color contrast fails WCAG standards.

**Warning signs:**
- No skip-to-content link
- Filter buttons don't announce state changes to screen readers
- Focus indicators are invisible
- Text on images has insufficient contrast
- No alt text on images

**Prevention strategy:**
- Add `aria-live` regions for filter state changes
- Include skip-to-content link
- Ensure all interactive elements have visible focus states
- Test with keyboard-only navigation (Tab, Enter, Escape)
- Check color contrast ratios (aim for AA compliance)

**Which phase to address:** Phase 1 (foundation) + Phase 5 (polish). Accessibility should be built in, not bolted on.

---

## Domain-Specific Pitfalls

### 9. Making the Lab Sound Like a Service Business

**The problem:** The capabilities page reads like a commercial lab services website rather than an academic research group. This can alienate academic collaborators.

**Warning signs:**
- Pricing tables for services
- "Order now" or "Request a quote" CTAs
- Overly corporate / marketing language
- No mention of collaboration, training, or publication co-authorship

**Prevention strategy:**
- Frame capabilities as "collaboration opportunities" not "services"
- Mention joint publications, co-advising, training exchanges
- Emphasize scientific partnership over transactional service
- Strike a balance between professional and academic tone

**Which phase to address:** Phase 3 (capabilities + methods) — content tone review.

---

### 10. Protocols Page Is a Dumping Ground

**The problem:** Methods & Protocols becomes a disorganized list of PDFs and Word docs with no context, no version control, and no searchability.

**Warning signs:**
- "Download this PDF" with no description
- No categorization or tagging
- No version history or update dates
- Documents are just lists of steps with no background
- No explanation of when/why to use each protocol

**Prevention strategy:**
- Structure protocols with metadata (category, equipment needed, estimated time, version)
- Write protocols in Markdown (not just PDF links) for searchability
- Include "when to use this" and "what you'll get" context
- Add cross-references to related protocols
- Include troubleshooting sections

**Which phase to address:** Phase 3 (methods & protocols) — content architecture design.

---

## Development Pitfalls

### 11. Content Gets Coupled to Astro

**The problem:** Despite the PI's desire for portability, content ends up using Astro-specific features (Content Collections, `.astro` files for content, Astro-specific frontmatter).

**Warning signs:**
- Content is in `.astro` files instead of Markdown
- Using Astro-specific YAML frontmatter keys
- Content imports Astro components
- JSON data uses Astro-specific schemas

**Prevention strategy:**
- Keep content in standard Markdown with plain YAML frontmatter
- Use universal data formats (JSON, YAML, TOML)
- Avoid Astro-specific features for content (no Content Collections for core data)
- Document the content format clearly for future migration

**Which phase to address:** Phase 1 (foundation) — content architecture decision.

---

## Summary: Top 5 Risks to Watch

| Rank | Pitfall | Early Warning Sign | Prevention Phase |
|------|---------|-------------------|-----------------|
| 1 | Content goes stale | Last update >1 year ago | Phase 1, Ongoing |
| 2 | Over-designing | Design tweaks while content is incomplete | Phase 1 |
| 3 | Form spam | Inbox flooded with junk | Phase 4 |
| 4 | Vague student recruitment | No specific projects listed | Phase 4 |
| 5 | Content coupled to Astro | `.astro` files in content directory | Phase 1 |
