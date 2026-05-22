# Research Themes

This directory contains Markdown files for each research theme.
Each file should have YAML frontmatter with fields: `title`, `summary`, `methods`, `tools`, `outputs`.

These files will be read using standard file I/O (not Astro Content Collections).

**Content is stored in standard Markdown format for portability. Do not use Astro Content Collections.**

## Content Format

```markdown
---
title: "Drought Stress Physiology in Wheat"
summary: "Integrating controlled-environment experiments and metabolite profiling to understand water-use efficiency and osmotic adjustment in wheat germplasm."
methods: ["Controlled-environment phenotyping", "HPLC metabolite profiling", "Statistical modelling"]
tools: ["HPLC-UV", "Growth chambers", "ImageJ"]
outputs: ["Peer-reviewed publications", "Germplasm recommendations", "SOPs"]
---

## Overview

Your detailed theme description here.
```

## Expected Files (Phase 2)

| File | Description |
|------|-------------|
| `theme-01.md` | Primary research theme |
| `theme-02.md` | Secondary research theme |
| `theme-03.md` | Additional focus area |
| `theme-04.md` | Collaborative research line |
| `theme-05.md` | Emerging project or extension |

The `site.json` in `src/data/` controls which themes appear on the home page by matching `researchId` in the JSON to the filename.
