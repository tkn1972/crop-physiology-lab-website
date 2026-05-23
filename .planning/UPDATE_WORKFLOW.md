# Content Update Workflow

## Overview

All content on the Crop Physiology Lab website is stored in standard files (Markdown and JSON) that can be edited with any text editor. No CMS, database, or special software is required.

## Where Content Lives

### JSON Data Files (src/data/)

These files contain structured data that components read and display:

- **site.json** — Lab name, tagline, mission, contact info, hero text, PI details
- **navigation.json** — Navigation links for header and footer
- **publications.json** — Publication list (title, authors, journal, year, DOI)
- **team.json** — Team members (name, role, photo, bio, interests)
- **research.json** — Research themes (title, summary, methods, tools)
- **students.json** — Student onboarding info, expectations, FAQ

### Markdown Content Files (src/content/)

These directories hold content for pages built in Phases 2-4:

- **src/content/research/** — Research theme Markdown files (Phase 2)
- **src/content/team/** — Team member Markdown files (Phase 2)
- **src/content/capabilities/** — Equipment and service Markdown files (Phase 3)
- **src/content/protocols/** — Protocol and SOP Markdown files (Phase 3)
- **src/content/students/** — Recruitment and FAQ Markdown files (Phase 4)

Each Markdown file should include YAML frontmatter at the top:

```yaml
---
title: "Your Title Here"
summary: "Brief description"
---
```

## How to Edit Content

1. Open the relevant file in your text editor
2. Make your changes
3. Save the file
4. Run `npm run build` locally to preview (or skip if you trust the change)
5. Commit the change with git
6. Push to the main branch — deployment happens automatically

## How to Deploy

The site is built automatically when you push to the main branch:

```bash
git add .
git commit -m "content: update [description]"
git push origin main
```

Netlify/Vercel will run `npm run build` and deploy the `dist/` folder.

## Important Rules

- Do NOT edit .astro files unless you are changing page structure
- Do NOT use Astro Content Collections — keep content in Markdown/JSON
- Do NOT modify tailwind.config.js or src/index.css — the design system is locked
- Always validate JSON files after editing (no trailing commas)
- Always include YAML frontmatter in Markdown files
- Images should be placed in public/images/ and referenced with /images/... paths

## Need Help?

Contact the person who set up the site or refer to AGENTS.md for technical details.
