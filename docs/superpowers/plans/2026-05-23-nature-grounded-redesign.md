# Nature-Grounded Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update typography, colors, and layout across the entire site to a warm, approachable, nature-grounded design with DM Sans headings, living greens, and open card-free layouts.

**Architecture:** Tailwind config drives color/font tokens. Global styles in `src/index.css` provide semantic utilities. Components and pages consume these tokens. No structural or routing changes.

**Tech Stack:** Astro 5, Tailwind CSS 3, static HTML output

---

## Task 1: Foundation — Tailwind Config & Global Styles

**Files:**
- Modify: `tailwind.config.js`
- Modify: `src/index.css`

**Prerequisites:** None

- [ ] **Step 1: Update tailwind.config.js colors and fonts**

Replace the existing config with the updated version:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#faf9f6',
        cream: '#f5f2ec',
        surface: '#ffffff',
        ink: '#1f2328',
        muted: '#5b6257',
        line: '#d9d6cf',
        pine: '#4a7c59',
        sage: '#7da882',
        moss: '#d4e4c8',
        earth: '#b35844',
        soft: '#ece7df',
        forest: '#1a3c27',
      },
      fontFamily: {
        serif: ['"DM Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 18px 40px rgba(31, 35, 40, 0.06)',
      },
      maxWidth: {
        content: '76rem',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
```

Changes made:
- Added `cream: '#f5f2ec'`
- Added `moss: '#d4e4c8'`
- Added `forest: '#1a3c27'`
- Removed `charcoal`
- Updated `parchment` to `'#faf9f6'`
- Updated `sage` to `'#7da882'`
- Changed `fontFamily.serif` to DM Sans (this is the heading font)

- [ ] **Step 2: Update src/index.css global styles and utilities**

Replace the entire file content:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-parchment font-sans text-forest antialiased;
  }

  * {
    @apply border-line;
  }

  ::selection {
    background: rgba(212, 228, 200, 0.4);
  }

  a,
  button,
  input,
  select,
  textarea {
    @apply outline-none;
  }

  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible {
    @apply ring-2 ring-pine ring-offset-2 ring-offset-parchment;
  }

  h1,
  h2,
  h3,
  h4 {
    @apply font-serif text-forest;
  }

  p {
    @apply leading-7 text-[1.05rem] text-muted;
  }
}

@layer components {
  .page-shell {
    @apply mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8;
  }

  .section-space {
    @apply py-16 sm:py-20;
  }

  .eyebrow {
    @apply font-mono text-xs uppercase tracking-[0.2em] text-sage;
  }

  .surface-card {
    @apply bg-surface p-8;
  }

  .page-divider {
    @apply border-t border-line/80;
  }

  .button-primary {
    @apply inline-flex items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white transition duration-300 ease-calm hover:-translate-y-0.5 hover:bg-pine;
  }

  .button-secondary {
    @apply inline-flex items-center justify-center rounded-full border border-pine bg-white px-5 py-3 text-sm font-semibold text-forest transition duration-300 ease-calm hover:-translate-y-0.5 hover:bg-moss/20;
  }

  .button-tertiary {
    @apply inline-flex items-center justify-center rounded-full bg-soft px-5 py-3 text-sm font-semibold text-forest transition duration-300 ease-calm hover:-translate-y-0.5 hover:bg-cream;
  }

  .bg-cream {
    background-color: #f5f2ec;
  }

  .bg-moss-light {
    background-color: rgba(212, 228, 200, 0.25);
  }
}
```

Changes made:
- Removed gradient background-image from body
- Changed body text color to `forest`
- Changed selection highlight to moss tint
- Changed heading color to `forest`
- Changed `.eyebrow` color to `sage`
- Stripped `.surface-card` down to `bg-surface p-8` (no border, no shadow, no rounding)
- Updated `.button-primary` bg to `forest`
- Updated `.button-secondary` text to `forest`, hover to `bg-moss/20`
- Updated `.button-tertiary` text to `forest`, hover to `bg-cream`
- Added `.bg-cream` utility
- Added `.bg-moss-light` utility

- [ ] **Step 3: Verify build still works**

Run: `npm run build`
Expected: Build completes with zero errors

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.js src/index.css
git commit -m "feat(design): update tailwind config and global styles for nature-grounded redesign"
```

---

## Task 2: Layout — Google Fonts

**Files:**
- Modify: `src/layouts/BaseLayout.astro`

**Prerequisites:** Task 1

- [ ] **Step 1: Update Google Fonts URL**

In `src/layouts/BaseLayout.astro`, replace line 25:

```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=Playfair+Display:wght@400;500;600;700&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet" />
```

With:

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet" />
```

- [ ] **Step 2: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat(design): swap Playfair Display for DM Sans in Google Fonts"
```

---

## Task 3: Shared Structural Components — Header & Footer

**Files:**
- Modify: `src/components/Header.astro`
- Modify: `src/components/Footer.astro`

**Prerequisites:** Task 1, Task 2

- [ ] **Step 1: Update Header colors**

In `src/components/Header.astro`:

Replace line 17:
```astro
<p class="eyebrow mb-1">COLPOS | Crop Physiology Research</p>
```
With:
```astro
<p class="eyebrow mb-1 text-sage">COLPOS | Crop Physiology Research</p>
```

Replace line 31:
```astro
isActive ? 'bg-soft text-charcoal' : 'text-muted hover:text-pine'
```
With:
```astro
isActive ? 'bg-soft text-forest' : 'text-muted hover:text-pine'
```

Replace lines 64-66:
```astro
isActive
  ? 'border-pine bg-soft text-charcoal'
  : 'border-transparent bg-white text-muted hover:border-line hover:text-pine'
```
With:
```astro
isActive
  ? 'border-pine bg-soft text-forest'
  : 'border-transparent bg-white text-muted hover:border-line hover:text-pine'
```

- [ ] **Step 2: Update Footer colors**

In `src/components/Footer.astro`, replace line 7:
```astro
<footer class="border-t border-line bg-[#f2efe9]">
```
With:
```astro
<footer class="border-t border-line bg-cream">
```

Then replace all 3 occurrences of `text-charcoal` with `text-forest` (lines 16, 34).

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.astro src/components/Footer.astro
git commit -m "feat(design): update Header and Footer colors for nature-grounded theme"
```

---

## Task 4: Structural Components — PageHero & CTASection

**Files:**
- Modify: `src/components/PageHero.astro`
- Modify: `src/components/CTASection.astro`

**Prerequisites:** Task 1, Task 2

- [ ] **Step 1: Open PageHero slot wrapper**

In `src/components/PageHero.astro`, replace line 18:
```astro
<div class="surface-card overflow-hidden border border-line bg-white p-6 sm:p-8">
```
With:
```astro
<div class="bg-white p-6 sm:p-8">
```

- [ ] **Step 2: Strip CTASection card wrapper and add moss background**

In `src/components/CTASection.astro`, replace lines 23-25:
```astro
<section class="section-space">
  <div class="page-shell">
    <div class="surface-card overflow-hidden border border-line bg-soft p-8 sm:p-10 lg:p-12">
```
With:
```astro
<section class="section-space bg-moss/30">
  <div class="page-shell">
    <div class="p-8 sm:p-10 lg:p-12">
```

- [ ] **Step 3: Commit**

```bash
git add src/components/PageHero.astro src/components/CTASection.astro
git commit -m "feat(design): open PageHero and CTASection layouts, add moss background"
```

---

## Task 5: List Components — PublicationItem & ResourceCard

**Files:**
- Modify: `src/components/PublicationItem.astro`
- Modify: `src/components/ResourceCard.astro`

**Prerequisites:** Task 1

- [ ] **Step 1: Update PublicationItem text colors**

In `src/components/PublicationItem.astro`:

Replace line 27-28:
```astro
<h3 class:list={['font-serif font-semibold', featured ? 'text-3xl' : 'text-2xl']}>
```
With:
```astro
<h3 class:list={['font-semibold', featured ? 'text-3xl' : 'text-2xl']}>
```

Replace line 30:
```astro
<p class="mt-3 text-ink">{publication.authors}</p>
```
With:
```astro
<p class="mt-3 text-muted">{publication.authors}</p>
```

Replace line 32:
```astro
<span class="font-semibold text-charcoal">{publication.journal}</span>
```
With:
```astro
<span class="font-semibold text-forest">{publication.journal}</span>
```

Replace lines 36-37:
```astro
<span class="rounded-full bg-soft px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-charcoal">
```
With:
```astro
<span class="rounded-full bg-soft px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-forest">
```

- [ ] **Step 2: Update ResourceCard surface-card and colors**

In `src/components/ResourceCard.astro`:

Replace line 22:
```astro
class="resource-card surface-card flex h-full flex-col p-6"
```
With:
```astro
class="resource-card flex h-full flex-col bg-surface p-6"
```

Replace line 33:
```astro
statusTone[resource.status as keyof typeof statusTone] || 'bg-soft text-charcoal'
```
With:
```astro
statusTone[resource.status as keyof typeof statusTone] || 'bg-soft text-forest'
```

- [ ] **Step 3: Commit**

```bash
git add src/components/PublicationItem.astro src/components/ResourceCard.astro
git commit -m "feat(design): update PublicationItem and ResourceCard colors, strip card borders"
```

---

## Task 6: Card Components — ResearchCard & TeamCard

**Files:**
- Modify: `src/components/ResearchCard.astro`
- Modify: `src/components/TeamCard.astro`

**Prerequisites:** Task 1

- [ ] **Step 1: Update ResearchCard — strip surface-card, update colors**

In `src/components/ResearchCard.astro`:

Replace line 15:
```astro
<details class="surface-card overflow-hidden group">
```
With:
```astro
<details class="group border-b border-line pb-8 mb-8">
```

Replace lines 30-31:
```astro
<span class="rounded-full bg-soft px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-charcoal">
```
With:
```astro
<span class="rounded-full bg-soft px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-forest">
```

Replace lines 41, 47, 53 (3 occurrences of `text-charcoal` in h4 headings):
All become `text-forest`.

- [ ] **Step 2: Update TeamCard — strip surface-card**

In `src/components/TeamCard.astro`:

Replace line 22:
```astro
<article class:list={['surface-card overflow-hidden', featured && 'lg:grid lg:grid-cols-[0.85fr_1.15fr]']}>
```
With:
```astro
<article class:list={['border-b border-line pb-8 mb-8', featured && 'lg:grid lg:grid-cols-[0.85fr_1.15fr]']}>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ResearchCard.astro src/components/TeamCard.astro
git commit -m "feat(design): strip card borders from ResearchCard and TeamCard, update colors"
```

---

## Task 7: Home Page — Section Backgrounds & Card Removal

**Files:**
- Modify: `src/pages/index.astro`

**Prerequisites:** Task 1–6

- [ ] **Step 1: Update section backgrounds**

In `src/pages/index.astro`:

Replace line 40:
```astro
<section class="section-space">
```
With:
```astro
<section class="section-space bg-cream">
```

Replace line 72:
```astro
<section class="section-space border-y border-line/80 bg-[#fbfaf8]">
```
With:
```astro
<section class="section-space border-y border-line/80 bg-moss-light">
```

- [ ] **Step 2: Strip remaining surface-card uses**

Replace lines 49-50:
```astro
<div class="surface-card p-8">
```
With:
```astro
<div class="bg-surface p-8">
```

Replace lines 82-83:
```astro
<article class="surface-card flex flex-col p-6">
```
With:
```astro
<article class="flex flex-col p-6">
```

Replace lines 113-114:
```astro
<div class="surface-card p-8">
```
With:
```astro
<div class="bg-surface p-8">
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat(design): update home page backgrounds and strip card boxes"
```

---

## Task 8: Static Pages — Research, Capabilities, Methods

**Files:**
- Modify: `src/pages/research.astro`
- Modify: `src/pages/capabilities.astro`
- Modify: `src/pages/methods.astro`

**Prerequisites:** Task 1–6

- [ ] **Step 1: Strip surface-card from Research page**

In `src/pages/research.astro`, no changes needed to the markup itself (uses PageHero + ResearchCard components which are already updated). Verify by checking the file has no hardcoded `surface-card` or `text-charcoal` usages.

- [ ] **Step 2: Update Capabilities page**

In `src/pages/capabilities.astro`:

Replace lines 34, 39:
```astro
<article class="surface-card p-6">
```
With:
```astro
<article class="p-6">
```

- [ ] **Step 3: Update Methods page**

In `src/pages/methods.astro`:

Replace lines 34, 39:
```astro
<article class="surface-card p-6">
```
With:
```astro
<article class="p-6">
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/research.astro src/pages/capabilities.astro src/pages/methods.astro
git commit -m "feat(design): strip card boxes from Research, Capabilities, Methods pages"
```

---

## Task 9: Personnel Pages — Team & Students

**Files:**
- Modify: `src/pages/team.astro`
- Modify: `src/pages/students.astro`

**Prerequisites:** Task 1–6

- [ ] **Step 1: Update Team page**

In `src/pages/team.astro`:

Replace line 46:
```astro
<section class="section-space border-t border-line/80 bg-[#fbfaf8]">
```
With:
```astro
<section class="section-space border-t border-line/80 bg-cream">
```

- [ ] **Step 2: Update Students page**

In `src/pages/students.astro`:

Replace lines 26, 33, 44, 50, 56:
```astro
<div class="surface-card p-8">
```
With:
```astro
<div class="bg-surface p-8">
```

Replace lines 42:
```astro
<section class="section-space border-y border-line/80 bg-[#fbfaf8]">
```
With:
```astro
<section class="section-space border-y border-line/80 bg-cream">
```

Replace lines 76:
```astro
<article class="surface-card p-8">
```
With:
```astro
<article class="p-8">
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/team.astro src/pages/students.astro
git commit -m "feat(design): update Team and Students page backgrounds, strip card boxes"
```

---

## Task 10: Content Pages — Publications, Resources, Contact

**Files:**
- Modify: `src/pages/publications.astro`
- Modify: `src/pages/resources.astro`
- Modify: `src/pages/contact.astro`

**Prerequisites:** Task 1–6

- [ ] **Step 1: Update Publications page**

In `src/pages/publications.astro`, no direct changes needed (uses PageHero + PublicationsArchive). The PublicationsArchive component uses `.surface-card` on line 65, which we need to strip.

In `src/components/PublicationsArchive.astro`:

Replace line 65:
```astro
<div class="surface-card mt-10 p-6 sm:p-8" data-publication-list>
```
With:
```astro
<div class="mt-10 p-6 sm:p-8" data-publication-list>
```

Also update filter button active colors:
Replace lines 31-32 and 52-53 (identical pattern):
```astro
index === 0
  ? 'border-pine bg-soft text-charcoal'
  : 'border-line bg-white text-muted hover:border-pine hover:text-pine'
```
With:
```astro
index === 0
  ? 'border-pine bg-soft text-forest'
  : 'border-line bg-white text-muted hover:border-pine hover:text-pine'
```

Update the script toggle on lines 90 and 105:
```astro
candidate.classList.toggle('text-charcoal', isActive);
```
With:
```astro
candidate.classList.toggle('text-forest', isActive);
```

- [ ] **Step 2: Update Resources page**

In `src/pages/resources.astro`, no direct changes needed (uses PageHero + ResourceLibrary). ResourceLibrary uses `.surface-card` and has inline script toggles.

In `src/components/ResourceLibrary.astro`:

Replace line 56:
```astro
<div class="surface-card mt-10 hidden p-10 text-center" data-resource-empty>
```
With:
```astro
<div class="mt-10 hidden p-10 text-center" data-resource-empty>
```

Replace line 24:
```astro
class="w-full rounded-full border border-line bg-white px-5 py-3 text-base text-charcoal placeholder:text-muted"
```
With:
```astro
class="w-full rounded-full border border-line bg-white px-5 py-3 text-base text-forest placeholder:text-muted"
```

Replace lines 37-39:
```astro
index === 0
  ? 'border-pine bg-soft text-charcoal'
  : 'border-line bg-white text-muted hover:border-pine hover:text-pine'
```
With:
```astro
index === 0
  ? 'border-pine bg-soft text-forest'
  : 'border-line bg-white text-muted hover:border-pine hover:text-pine'
```

Update the script toggle on line 106:
```astro
candidate.classList.toggle('text-charcoal', isActive);
```
With:
```astro
candidate.classList.toggle('text-forest', isActive);
```

- [ ] **Step 3: Update Contact page**

In `src/pages/contact.astro`:

Replace lines 38, 51, 65:
```astro
<div class="surface-card p-8">
```
With:
```astro
<div class="bg-surface p-8">
```

Also change the form section (lines 65):
```astro
<div class="surface-card p-8 sm:p-10">
```
With:
```astro
<div class="bg-surface p-8 sm:p-10">
```

Update form label colors and input text colors. Replace lines 73, 77, 82, 91, 95:
Any `text-charcoal` in labels:
```astro
<span class="mb-2 block text-sm font-semibold text-forest">
```

Replace the email link on line 45:
```astro
<a href={`mailto:${site.email}`} class="inline-flex text-pine transition hover:text-charcoal">
```
With:
```astro
<a href={`mailto:${site.email}`} class="inline-flex text-pine transition hover:text-forest">
```

Replace the hero email link on line 21:
```astro
<a href={`mailto:${site.email}`} class="text-lg font-semibold text-pine transition hover:text-charcoal">
```
With:
```astro
<a href={`mailto:${site.email}`} class="text-lg font-semibold text-pine transition hover:text-forest">
```

- [ ] **Step 4: Commit**

```bash
git add src/components/PublicationsArchive.astro src/components/ResourceLibrary.astro src/pages/contact.astro src/pages/publications.astro src/pages/resources.astro
git commit -m "feat(design): update Publications, Resources, Contact — strip cards, update filter scripts"
```

---

## Task 11: Update AGENTS.md

**Files:**
- Modify: `AGENTS.md`

**Prerequisites:** All above tasks complete and verified

- [ ] **Step 1: Update AGENTS.md design system section**

In `AGENTS.md`, update the Design System section to reflect the new state:

```markdown
## Design System

Defined in `tailwind.config.js` + `src/index.css`.

- **Colors:** `parchment`, `pine`, `sage`, `earth`, `forest`, `moss`, `cream`, `charcoal` (deprecated), `ink`, `muted`, `line`, `soft`, `surface`
- **Fonts:** DM Sans (headings), Source Sans 3 (body), IBM Plex Mono (labels/metadata)
- **Semantic utilities:** `.page-shell`, `.section-space`, `.eyebrow`, `.surface-card` (borderless), `.page-divider`, `.button-primary`, `.button-secondary`, `.button-tertiary`, `.bg-cream`, `.bg-moss-light`
```

- [ ] **Step 2: Commit**

```bash
git add AGENTS.md
git commit -m "docs(agents): update design system notes for nature-grounded redesign"
```

---

## Verification

After all tasks are complete, run the full verification suite:

- [ ] **Build check:** `npm run build` — zero errors
- [ ] **Visual QA checklist:**
  - [ ] All headings render in DM Sans (not serif)
  - [ ] No `charcoal` color remains anywhere (search `text-charcoal`, `bg-charcoal`)
  - [ ] Research page has no card borders, just dividers
  - [ ] Team page has no card borders, just dividers
  - [ ] Publications list has no card borders, just dividers
  - [ ] CTA section has moss background
  - [ ] Home page sections alternate backgrounds (cream, moss-light, parchment)
  - [ ] Buttons are visible against all backgrounds
  - [ ] Filter buttons (Publications, Resources) toggle correctly and show `text-forest` when active
  - [ ] Mobile menu renders correctly
  - [ ] Responsive layout maintained across breakpoints

- [ ] **Final commit:**
```bash
git log --oneline -15
```

---

## Post-Implementation Notes

### Files Changed Summary

| Category | Files |
|----------|-------|
| Config | `tailwind.config.js` |
| Global styles | `src/index.css` |
| Layout | `src/layouts/BaseLayout.astro` |
| Components | `Header.astro`, `Footer.astro`, `PageHero.astro`, `CTASection.astro`, `PublicationItem.astro`, `ResourceCard.astro`, `ResearchCard.astro`, `TeamCard.astro`, `PublicationsArchive.astro`, `ResourceLibrary.astro` |
| Pages | `index.astro`, `research.astro`, `capabilities.astro`, `methods.astro`, `team.astro`, `students.astro`, `publications.astro`, `resources.astro`, `contact.astro` |
| Docs | `AGENTS.md` |

### What Was NOT Changed

- Content files (`src/data/*.json`, `src/content/**/*.md`)
- Routing and page structure
- Navigation logic (`navigation.json`)
- Image/asset references
- Build configuration (`astro.config.mjs`)
- Utility functions (`safeHref.js`)
- JavaScript filtering logic (only CSS class names in toggle scripts)
