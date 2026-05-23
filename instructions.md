Build a complete, multi-page, production-style academic website for a Plant Physiology Research Lab using React + Vite + Tailwind CSS + React Router.

This must look like a real university-affiliated research lab website, inspired by the visual quality and tone of Nature journal, Max Planck institutes, MIT research labs, and CIMMYT-style academic research groups.

The site must feel:

academically credible

editorial

calm

scientific

refined

accessible

global in audience

It must not feel like:

a startup landing page

a SaaS product

a corporate template

a generic portfolio

a flashy marketing site

PRIMARY GOAL

Generate the entire frontend project, including:

project structure

all required pages

all components

all JSON data files

navigation

responsive layout

search/filter behavior

polished academic styling

realistic scientific content

Do not leave the project half-finished.
Do not generate only one page.
Do not leave placeholder lorem ipsum.
Do not hardcode structured content inside components if it belongs in JSON.

TECH STACK

Use exactly:

React

Vite

Tailwind CSS

React Router

local JSON files for content

no backend

no database

no CMS

no heavy UI framework

Allowed:

small utility libraries only if truly needed

Do not use:

Bootstrap

Material UI

Chakra

fake API fetches

server code

TypeScript unless absolutely necessary

animation-heavy libraries unless minimal and justified

PROJECT STRUCTURE

Create this file structure:

/project
  /public
    /images
      /hero
      /team
      /research
  /src
    /components
      Header.jsx
      Footer.jsx
      MobileMenu.jsx
      SectionHeader.jsx
      PageHero.jsx
      ResearchCard.jsx
      TeamCard.jsx
      ResourceCard.jsx
      PublicationItem.jsx
      SearchBar.jsx
      FilterPills.jsx
      CTASection.jsx
    /pages
      Home.jsx
      Research.jsx
      Team.jsx
      Resources.jsx
      Publications.jsx
      Contact.jsx
      Students.jsx
    /layouts
      MainLayout.jsx
    /data
      site.json
      navigation.json
      research.json
      team.json
      publications.json
      resources.json
      students.json
    /utils
      filters.js
    App.jsx
    main.jsx
    index.css
  index.html
  package.json

If some file names need small adjustments for Vite, keep the structure as close as possible.

ROUTES

Create these routes:

/ → Home

/research → Research

/team → Team

/resources → Resources

/publications → Publications

/contact → Contact

/students → Students

All routes must work.

DESIGN DIRECTION

The site must resemble a premium academic research website.

Visual tone

editorial

scientific

slightly botanical

elegant

restrained

readable

institutional

modern but not trendy

Color palette

Use this palette:

background: #f8f7f5

surface: #ffffff

ink: #1f2328

muted text: #5b6257

lines/borders: #d9d6cf

primary dark: #2b2d31

botanical green: #4a7c59

sage: #6b8e6f

earth accent: #b35844

soft accent background: #ece7df

Use mostly:

off-white backgrounds

charcoal text

muted borders

restrained green accents

rare earth-tone highlights

Do not overuse accent colors.

TYPOGRAPHY

Use:

headings: Playfair Display or Crimson Text

body: Inter or Source Sans Pro

technical labels/tags: IBM Plex Mono

If external font loading is inconvenient, use good fallbacks:

serif fallback: Georgia

sans fallback: system-ui

mono fallback: ui-monospace

Typography should feel like:

journal-inspired

clean

mature

highly legible

LAYOUT RULES

Implement:

sticky top header

desktop navigation

mobile hamburger menu

footer with academic/institutional feel

max-width centered content

generous section spacing

elegant dividers

consistent padding rhythm

responsive grid behavior

Avoid:

cramped layouts

oversized hero buttons

shallow spacing

app-dashboard look

PAGE REQUIREMENTS
1. HOME PAGE

Build a credible homepage with these sections:

Hero

Include:

lab name

one-line research identity statement

short supporting description

2 or 3 CTA buttons

large visual panel or image placeholder area

a subtle preheading label

Tone example:
“Advancing plant physiology through rigorous experimentation, analytical precision, and reproducible research.”

About the Lab

Include:

mission statement

short PI introduction

brief summary of lab strengths

Research Focus Preview

Show 3–4 featured research themes with:

title

short description

link to research page

Featured Publications

Show 3 featured publications in clean academic card/list format.

Resources Preview

Show a small preview of available protocols, templates, and guides.

Collaboration / Recruitment Section

Include invitation for:

collaborators

graduate students

trainees

2. RESEARCH PAGE

Use research.json.

Create realistic research areas such as:

Plant Genetics & Breeding

Stress Physiology

Controlled Environment Phenotyping

Analytical Chemistry & HPLC

Experimental Design & Statistical Analysis

Each research area must include:

title

short summary

full description

methods

tools

outputs/projects

related publications

Design:

expandable cards
or

structured stacked panels

This page must feel serious and information-rich.

3. TEAM PAGE

Use team.json.

Display:

PI

postdocs

graduate students

technicians

Each profile card must include:

name

role

image placeholder

research interests

email

optional links such as ORCID / Google Scholar / ResearchGate

Make the PI section slightly more prominent.

4. RESOURCES PAGE

Use resources.json.

This page acts like a mini academic library.

Each resource must include:

title

category

description

file format

access button label

optional status tag:

Public

Draft

Internal

Updated

Required behavior

Implement:

real-time client-side search

category filtering

clean resource cards or row layout

empty state when nothing matches

Categories can include:

Analytical Methods

Statistical Guides

Experimental Design

Field Methods

SOPs

Student Resources

5. PUBLICATIONS PAGE

Use publications.json.

Each publication should include:

year

title

authors

journal

DOI or external link if present

optional tags/topics

Requirements:

sort by year descending

optionally filter by year or topic

featured item near top if appropriate

The design must look academic, not blog-like.

6. CONTACT PAGE

Include:

collaboration statement

PI contact info

institution/location block

professional-looking contact form UI

note about response times

optional related department/program links

Fields:

name

email

subject

message

optional inquiry type select

No backend needed, but the form must look complete.

7. STUDENTS PAGE

Use students.json.

Include:

onboarding guidance

lab expectations

data management principles

reproducibility guidelines

naming/versioning practices

recommended software/tools

FAQ for joining the lab

This page should support recruitment and lab culture.

CONTENT REQUIREMENTS

Generate realistic academic content, not filler text.

The content should sound like a real plant physiology lab website approved by a professor.

Use:

scientifically clear English

international readability

precise terminology

no hype language

no exaggerated claims

no empty slogans

The content should mention topics like:

germplasm diversity

controlled-environment research

phenotyping

HPLC workflows

ANOVA

RCBD

reproducibility

graduate training

data stewardship

analytical methods

JSON CONTENT REQUIREMENTS

Populate all JSON files with realistic mock content.

site.json

Include:

lab name

tagline

mission

PI short bio

institution name

email

location

hero CTAs

navigation.json

Include:

nav links

footer links

research.json

At least 5 research areas.

team.json

At least:

1 PI

1 postdoc

2 graduate students

1 technician

publications.json

At least 8 realistic publication entries.

resources.json

At least 10 realistic resources.

students.json

Include sections for:

onboarding

best practices

reproducibility

recommended software

FAQ

COMPONENT BEHAVIOR

Implement reusable components.

Header

sticky

desktop nav

mobile menu toggle

active route highlighting if simple

PageHero

reusable across pages

title

subtitle

optional eyebrow/preheading

ResearchCard

expand/collapse content

methods as tags

outputs and tools visible when expanded

TeamCard

image area

role

research interests

contact links

ResourceCard

title

category

format

description

status tag

button

PublicationItem

compact academic presentation

year, title, journal, authors, link

FilterPills

clear active state

keyboard usable

SearchBar

accessible input

live filtering

ACCESSIBILITY REQUIREMENTS

Must use:

semantic HTML

proper heading hierarchy

alt text for image placeholders

visible focus states

labeled form fields

keyboard-accessible buttons and menus

sufficient contrast

meaningful link text

Target: WCAG 2.1 AA style practices

RESPONSIVENESS

The site must work well on:

mobile

tablet

desktop

Ensure:

header collapses correctly

grids stack well

text remains readable

buttons do not overflow

research/resource sections remain usable on small screens

PERFORMANCE

Keep it lightweight.

Do:

use small dependencies only

avoid bloated packages

lazy-load images if used

keep rendering simple

avoid unnecessary complexity

MICROINTERACTIONS

Use only subtle interactions:

slight hover elevation

gentle border/color transitions

smooth expand/collapse

restrained mobile menu transitions

No excessive motion.

SEO / METADATA

Add:

document title handling

meta descriptions

Open Graph basics if convenient

favicon placeholder support

Each page should have an appropriate title and description.

STYLING STANDARD

The website should visually communicate:

scientific seriousness

clean authorship

editorial quality

institution-level trust

It should be believable as a live lab site.

IMPLEMENTATION RULES

Do not:

leave broken imports

leave unused components everywhere

ship runtime errors

place all code in one file

leave placeholder lorem ipsum

create fake unfinished buttons with no visual consistency

hardcode research/team/publication/resource lists directly in page JSX if they belong in JSON

Do:

keep code modular

keep components reusable

keep naming clear

keep styling consistent

produce a complete result

EXECUTION ORDER

Follow this order:

initialize Vite React project

configure Tailwind

create routing

create theme styles and typography

create JSON data files

build shared layout and navigation

build Home

build Research

build Team

build Resources with search and category filters

build Publications

build Contact

build Students

polish responsiveness

polish accessibility

final cleanup

FINAL DELIVERY STANDARD

Deliver a complete working frontend project with:

all required pages

all required components

JSON-driven content

realistic academic copy

coherent design system

responsive behavior

accessible markup

no runtime errors

no incomplete scaffolding

The final site should look like a credible university plant physiology lab website ready for customization with real institutional content.

EXTRA STRICT COMMAND

Generate all files needed for the full project now.
Do not summarize.
Do not only describe the architecture.
Do not stop after scaffolding.
Actually create the full implementation with realistic data and polished UI.
