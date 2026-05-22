# Methods & Protocols

This directory contains Markdown files for standard operating procedures (SOPs).
Each file should have YAML frontmatter with fields: `title`, `category`, `version`, `description`, `equipment`, `duration`.
Replaces the old Resources JSON data structure.

**Content is stored in standard Markdown format for portability. Do not use Astro Content Collections.**

## Content Format

```markdown
---
title: "HPLC Metabolite Profiling Protocol"
category: "analytical"
version: "1.2"
description: "Standard procedure for preparing samples, running HPLC, and processing chromatographic data."
equipment: ["Shimadzu HPLC-UV", "C18 Column", "Centrifuge", "Vortex Mixer"]
duration: "4 hours per batch (including extraction and run time)"
age: "2025-03"
---

## Procedure

Your step-by-step protocol here.
```

## Expected Files (Phase 3)

| File | Description |
|------|-------------|
| `protocol-*.md` | Standard operating procedures and analytical protocols |

The `category` field groups protocols on the Methods & Protocols page. Supported categories:
- `analytical` — Chemical analysis, extraction, chromatography
- `experimental` — Growth chamber, greenhouse, field experimental design
- `data` — Data management, statistical analysis, documentation

The `age` field (YYYY-MM format) indicates when the protocol was last updated. It is used for sorting and staleness warnings.
