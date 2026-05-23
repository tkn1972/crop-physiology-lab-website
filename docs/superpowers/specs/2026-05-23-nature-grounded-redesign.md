# Nature-Grounded Redesign — Design Spec

**Date:** 2026-05-23
**Project:** Crop Physiology Lab Website
**Scope:** Visual redesign (typography, color, layout)
**Approach:** Nature-Grounded (Approach 2 from brainstorming)

---

## Problem Statement

The current site feels generic, traditional, and overly boxy. The serif typography (Playfair Display) evokes too much academic formality. The layout relies heavily on card borders and shadows, creating a cluttered, boxed-in feel. The color palette with earth/red tones doesn't fully capture the lab's plant-physiology identity. The site needs to feel **warm, approachable, and inviting** — like a friendly expert rather than a formal institution.

## Design Goal

Create a visual identity that feels:
- **Warm and human** — approachable, not stiff
- **Nature-grounded** — greens that evoke healthy plants and growth
- **Open and breathable** — generous whitespace, minimal boxes
- **Modern but trustworthy** — clean and credible without being cold

## Constraints

- Content architecture stays: Markdown + JSON, no Astro Content Collections
- Page structure stays: same sections, same routing, same components (visually updated)
- Navigation system stays: `navigation.json` drives the Header
- Build stays: static Astro + Tailwind, output to `dist/`
- `tailwind.config.js` and `src/index.css` **will be modified** (AGENTS.md design system lock overridden by user request)
- AGENTS.md will be updated after implementation to reflect new design system

## Typography

### Font Family Changes

| Element | Before | After | Weight | Notes |
|---------|--------|-------|--------|-------|
| Headings (h1–h4) | Playfair Display (serif) | **DM Sans** | 500/600/700 | Slightly rounded geometric sans, warm and modern |
| Body text | Source Sans 3 | **Source Sans 3** | 400/600 | Already correct feel, unchanged |
| Labels/metadata | IBM Plex Mono | **IBM Plex Mono** | 400 | Unchanged, provides contrast and precision |

### Google Fonts CDN

Replace the existing Google Fonts link in `BaseLayout.astro`:
- Remove: Playfair Display
- Add: DM Sans (weights 400, 500, 600, 700)
- Keep: Source Sans 3 (weights 400, 600, 700)
- Keep: IBM Plex Mono (weight 400)

URL format:
```
https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400&family=Source+Sans+3:wght@400;600;700&display=swap
```

### Type Scale

Headings shift from serif-optimized sizes to sans-optimized. DM Sans reads larger at the same pixel size, so sizes may need slight adjustment downward.

| Level | Size (desktop) | Weight | Letter-spacing |
|-------|---------------|--------|----------------|
| h1 (page titles) | 3rem (48px) | 600 | -0.02em |
| h2 (section titles) | 2.25rem (36px) | 600 | -0.015em |
| h3 (card titles) | 1.5rem (24px) | 600 | -0.01em |
| h4 (subtitles) | 1.25rem (20px) | 500 | 0 |
| Body | 1.05rem (16.8px) | 400 | normal |
| Labels/eyebrow | 0.75rem (12px) | 400 | 0.2em uppercase |

## Color Palette

### New Token Map

| Token | Hex | Usage | Previous |
|-------|-----|-------|----------|
| `forest` | `#1a3c27` | Primary text (headings, strong ink), button-primary bg | New — replaces `charcoal` |
| `pine` | `#4a7c59` | Links, active states, accents, CTA text | Unchanged |
| `sage` | `#7da882` | Secondary accents, eyebrow text, subtle highlights | Lightened from `#6b8e6f` |
| `moss` | `#d4e4c8` | Section background tints, hover states | New |
| `parchment` | `#faf9f6` | Page background | Lightened from `#f8f7f5` |
| `cream` | `#f5f2ec` | Alternate section background | New |
| `soft` | `#ece7df` | Card backgrounds, subtle containers | Unchanged |
| `surface` | `#ffffff` | Cards that need lift | Unchanged |
| `earth` | `#b35844` | **Sparingly**: warnings, highlights, alt CTAs | Unchanged but restricted |
| `ink` | `#1f2328` | Body text | **Consider replacing with `forest`** |
| `muted` | `#5b6257` | Secondary/muted text | Unchanged |
| `line` | `#d9d6cf` | Borders, dividers | Unchanged |
| `charcoal` | `#2b2d31` | — | **Deprecated** — replaced by `forest` |

### Color Usage Rules

- **Headings**: `forest` (not `charcoal` or `ink`)
- **Body text**: `ink` → `forest` (or keep `ink` if contrast requires)
- **Links**: `pine`, hover to `forest`
- **Section alternating**: parchment → moss-tint → parchment → cream
- **Cards**: Strip borders. Use `surface` (white) or `soft` (warm gray) with **no border**, **no shadow**, or very subtle shadow
- **Buttons**: primary = `forest` bg; secondary = `pine` border; tertiary = `soft` bg

## Layout & Spacing

### Core Principle: Reduce the Box

The current design uses `.surface-card` (border + shadow + rounded corners) everywhere. The new design strips this back:

| Before | After |
|--------|-------|
| Cards with border + shadow + rounded corners (`.surface-card`) | White/soft backgrounds with **generous whitespace** and thin bottom borders |
| Tight section padding (`section-space` = py-16/20) | Same or slightly increased — whitespace is the separator |
| Grid of 4 equal cards | Grid with more gap, cards feel like content blocks, not containers |
| Hero inside a card | Hero is full-bleed or wide, no container box |

### Section Alternation

Sections alternate background colors to create visual rhythm without heavy borders:

```
Section 1 (Hero):       parchment (default)
Section 2 (About/PI):   cream (subtle warm tint)
Section 3 (Research):   parchment
Section 4 (Featured):   moss-tint (#d4e4c8 at 15-20% opacity or very light)
Section 5 (CTA):        full-width moss background
Section 6:              parchment
```

Implementation: Add utility classes or section-specific background classes:
- `.bg-parchment` — default
- `.bg-cream`
- `.bg-moss-light`
- `.bg-moss` — full sections (CTA)

### Card Design

New `.surface-card` definition:
```css
.surface-card {
  @apply bg-surface p-8;
  /* No border, no shadow, no rounded corners */
  /* Or: very subtle rounded-lg if needed for photos */
}
```

For content lists (Publications, Research themes, Team list):
- Remove card wrapper entirely
- Use whitespace + thin `border-b border-line` between items
- Hover: subtle background tint or text color shift

### Container Adjustments

- `.page-shell`: Keep max-w-content (76rem), but slightly increase side padding on large screens
- `.section-space`: Keep py-16/20, works well with new open layout

## Component-Level Changes

### BaseLayout.astro
- Update Google Fonts link (remove Playfair, add DM Sans)
- Meta color/theme-color: update to `pine`

### Header.astro
- Eyebrow text color: `sage` (lighter, softer than `pine`)
- Active nav item: `forest` text on `soft` bg (instead of `charcoal`)
- Mobile menu: full-bleed `cream` or `parchment` background, no box shadow

### PageHero.astro
- Remove `.surface-card` wrapper (if present)
- Title: DM Sans, `forest`, large size
- Description: standard body text, generous max-width
- Background: full-bleed image with subtle overlay gradient, or plain parchment

### Research cards (index.astro + research.astro)
- Remove `.surface-card`
- Use vertical stack: eyebrow → title → summary → link
- Separate with `border-b border-line pb-8 mb-8`
- Hover: text shifts to `pine`, or subtle `bg-cream` background

### Team cards (team.astro)
- Remove card box
- Clean vertical layout: circular image → name (DM Sans 600) → role (`sage` eyebrow) → bio → links
- Thin `border-b` separator between team members

### Publications list (publications.astro)
- Each publication as a row, not a card
- Vertical stack: title/year → authors → journal
- Thin divider between entries
- Hover: subtle background tint

### CTA Section (CTASection.astro)
- Full-width background in `moss` (#d4e4c8 at 20-30% opacity, or solid very light)
- Centered text, no card box
- Buttons stand out against green tint

### Buttons
- `button-primary`: `forest` bg, white text, rounded-full, hover `pine`
- `button-secondary`: white bg, `pine` border, `forest` text, hover `bg-moss-light`
- `button-tertiary`: `soft` bg, `forest` text, hover slightly darker

## Tailwind Config Changes

### tailwind.config.js

```javascript
export default {
  theme: {
    extend: {
      colors: {
        // Existing (some removed/replaced)
        parchment: '#faf9f6',    // Lightened
        cream: '#f5f2ec',        // New
        surface: '#ffffff',
        ink: '#1f2328',
        muted: '#5b6257',
        line: '#d9d6cf',
        pine: '#4a7c59',         // Unchanged
        sage: '#7da882',         // Lightened from #6b8e6f
        moss: '#d4e4c8',         // New
        earth: '#b35844',        // Restricted use
        soft: '#ece7df',
        forest: '#1a3c27',       // New — replaces charcoal
        // charcoal removed
      },
      fontFamily: {
        serif: ['"DM Sans"', 'system-ui', 'sans-serif'], // Headings
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'], // Body
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      // ... rest unchanged
    },
  },
};
```

### src/index.css

Update `@layer base` and `@layer components`:

```css
@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-parchment font-sans text-forest antialiased;
    /* Remove or soften the gradient overlays */
    background-image: none; /* Or very subtle clean gradient */
  }
  * {
    @apply border-line;
  }
  ::selection {
    @apply bg-moss/30;
  }
  a, button, input, select, textarea {
    @apply outline-none;
  }
  a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible {
    @apply ring-2 ring-pine ring-offset-2 ring-offset-parchment;
  }
  h1, h2, h3, h4 {
    @apply font-serif text-forest;
    /* Note: font-serif now means DM Sans due to config swap */
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
  /* New utility classes for section backgrounds */
  .bg-cream {
    background-color: #f5f2ec;
  }
  .bg-moss-light {
    background-color: rgba(212, 228, 200, 0.25);
  }
}
```

## Files to Modify

| File | Changes |
|------|---------|
| `tailwind.config.js` | Update colors (add forest/moss/cream, remove charcoal, adjust sage/parchment), update fontFamily |
| `src/index.css` | Update base body color, selection color, heading color, remove gradient or soften, update button colors, add bg utilities |
| `src/layouts/BaseLayout.astro` | Update Google Fonts URL |
| `src/components/Header.astro` | Update active state colors, eyebrow color |
| `src/components/PageHero.astro` | Remove card wrapper (if any), confirm heading color |
| `src/pages/index.astro` | Update section backgrounds, strip `.surface-card` from research section, update CTA bg |
| `src/pages/research.astro` | Reduce card styling |
| `src/pages/team.astro` | Strip card boxes, use list layout |
| `src/pages/publications.astro` | Strip card boxes, use list layout |
| `src/pages/students.astro` | Light styling updates |
| `src/pages/contact.astro` | Light styling updates |
| `src/pages/capabilities.astro` | Light styling updates |
| `src/pages/methods.astro` | Light styling updates |
| `src/components/CTASection.astro` | Update background color, button colors |
| `src/components/ResearchCard.astro` | Remove card wrapper, adjust spacing |
| `src/components/TeamCard.astro` | Remove card wrapper, adjust spacing |
| `src/components/PublicationItem.astro` | Remove card wrapper, adjust spacing |
| `src/components/ResourceCard.astro` | Adjust for open layout |
| `src/components/Footer.astro` | Adjust colors |
| `AGENTS.md` | Update to reflect new design system state after implementation |

## What Does NOT Change

- Page routes and file structure
- Content files (Markdown + JSON data)
- Navigation logic (`navigation.json`)
- Form handling (Netlify Forms)
- Image references (but note: real photos needed eventually)
- `safeHref` and URL safety
- Build output (`dist/`)

## Success Criteria

- [ ] Site builds with zero errors (`npm run build`)
- [ ] No Playfair Display references remain
- [ ] DM Sans loads and renders correctly
- [ ] Color contrast passes WCAG AA (headings, body text, buttons)
- [ ] No `.surface-card` borders on Research/Team/Publications lists
- [ ] Section backgrounds create clear visual rhythm on scroll
- [ ] Mobile layout remains functional and readable
- [ ] CTA section has distinct moss background
- [ ] Buttons visible and clickable against all backgrounds

## Risk: Content Readability

With `.surface-card` borders removed, content relies entirely on whitespace for separation. Risk: content blends together. Mitigation:
- Thorough padding (`p-8` minimum on content blocks)
- Clear `border-b` dividers between list items
- Background color alternation creates natural boundaries
- Test on a long page (Publications or Team) to verify readability

## Open Question

Should `ink` be replaced entirely by `forest`, or kept for body text? `forest` (#1a3c27) is very dark green and may work for both headings and body. Recommend trying `forest` everywhere first; if body feels too heavy, revert body to `ink` (#1f2328) which is near-black with slight warmth.
