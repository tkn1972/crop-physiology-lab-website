# Student Recruitment

This directory contains Markdown files for student recruitment content and FAQ.
Each file should have YAML frontmatter with fields: `title`, `type` (`recruitment` or `faq`), and markdown body content.

**Content is stored in standard Markdown format for portability. Do not use Astro Content Collections.**

## Content Format — Recruitment Page

```markdown
---
title: "Join the Lab"
type: "recruitment"
order: 1
---

## Graduate Students (MSc / PhD)

Recruitment-specific content here.
```

## Content Format — FAQ Page

```markdown
---
title: "Student FAQ"
type: "faq"
order: 2
---

## What is the typical workload?

FAQ answer here.
```

## Expected Files (Phase 4)

| File | Description |
|------|-------------|
| `recruitment.md` | Main recruitment / "Join the Lab" content |
| `faq.md` | Frequently asked questions for prospective students |

The `type` field determines which page the content appears on. The `order` field controls display order.

## Notes

- Recruitment page should provide clear pathways for both graduate (MSc/PhD) and undergraduate students.
- Contact information should reference `src/data/site.json` for consistency.
- FAQ answers should be concise and actionable.
