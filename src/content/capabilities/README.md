# Capabilities and Equipment

This directory contains Markdown files describing lab equipment and analytical services.
Each file should have YAML frontmatter with fields: `title`, `category`, `equipment`, `description`, `contact`.

**Content is stored in standard Markdown format for portability. Do not use Astro Content Collections.**

## Content Format

```markdown
---
title: "HPLC Metabolite Profiling"
category: "analytical"
equipment: ["Shimadzu HPLC-UV", "C18 Column"]
description: "Quantitative analysis of small molecules including amino acids, organic acids, and secondary metabolites."
contact: "cropphysiology@colpos.mx"
image: "/images/hplc-setup.svg"
order: 1
---

## Sample Requirements

Your detailed capability description here.
```

## Expected Files (Phase 3)

| File | Description |
|------|-------------|
| `capability-*.md` | Equipment or service descriptions |

The `category` field groups capabilities on the Capabilities page. Supported categories:
- `analytical` — Chromatography, spectroscopy, molecular assays
- `phenotyping` — Controlled-environment, greenhouse, field-based trait measurement
- `computational` — Data analysis pipelines, imaging, software tools

The `order` field controls display order. Lower numbers appear first.
