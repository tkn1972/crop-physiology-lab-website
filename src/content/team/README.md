# Team Members

This directory contains Markdown files for the Principal Investigator and each team member.
Each file should have YAML frontmatter with fields: `name`, `role`, `interests`, `bio`, `email`.
Supplements the structured data in `src/data/team.json`.

**Content is stored in standard Markdown format for portability. Do not use Astro Content Collections.**

## Content Format

```markdown
---
name: "Dr. Elena Marquez"
role: "Principal Investigator"
interests: ["Stress physiology", "Germplasm diversity", "Metabolomics"]
bio: "Dr. Marquez leads the Crop Physiology Lab with a focus on translational crop science."
email: "emarquez@colpos.mx"
order: 1
---

## Research Focus

Your detailed bio and research focus here.
```

## Expected Files (Phase 2)

| File | Description |
|------|-------------|
| `pi.md` | Principal Investigator (PI) profile |
| `member-*.md` | Team member profiles |

The `order` field controls display order on the Team page. Lower numbers appear first.
