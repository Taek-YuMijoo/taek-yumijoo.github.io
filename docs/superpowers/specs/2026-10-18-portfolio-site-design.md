# Yeongtaek Lim — Portfolio Site Design

Date: 2026-10-18
Purpose: a personal portfolio website to accompany an MIT Media Arts & Sciences (MAS) application.

## 1. Intent

Yeongtaek Lim works across three practices that rarely sit in one CV:

| Practice | Identity | Evidence |
|---|---|---|
| Research | Computational social scientist (KAIST M.S., KISDI, Korea Press Foundation) | thesis, reports, pipelines, presentations |
| Curatorial | Exhibition curator / media artist (4 funded shows, 2022–2026) | YouTropolis, Blue's Blues, Liquid Crystal Friendship, Binary Garden |
| Criticism | Art critic writing in Korean (Art in Culture, PONG, Critic-al, Karts News) | ~20 published texts, 1 invited talk |

The site's job is to make an MIT MAS reviewer see these three as one coherent inquiry — data, platforms and labor as both an object of computational study and a material for exhibitions and writing — in under two minutes, and then let them go deeper in any direction.

## 2. Goals / Non-goals / Anti-goals

**Goals**
- Three equal sections: Research · Curatorial · Criticism. No section looks like an afterthought.
- Reads like an index/archive, not a marketing page: every item carries metadata (type, role, date, venue/publisher) in a consistent grid.
- Owner can add or edit a project by editing one Markdown file and dropping an image in a folder. No code knowledge required.
- Loads instantly, works on phone, works with JavaScript off.
- Bilingual-ready: English as the primary language, Korean titles/text preserved where the original is Korean (criticism), with English glosses.

**Non-goals (for now)**
- No CMS, no database, no comments, no analytics.
- No full-text hosting of the critical essays; the site holds abstracts, publisher, date, and link/PDF.

**Anti-goals (would make it a failure even if it works)**
- Looks like a template or a generic "developer portfolio" (hero image, gradient buttons, skill bars).
- Decoration that competes with the work: no animations for their own sake, no big photography backgrounds.
- Jargon-heavy "about me" copy. Tone is factual, confident, short.

## 3. Design direction (from the three Cargo references + the owner's own PDF)

Common DNA observed in https://8857.cargo.site/, https://566875-a.cargo.site/, https://679563-a.cargo.site/:
- hairline rules (1px) dividing columns and rows; no boxes with shadows
- metadata-first typography: small caps labels, numbers, dates, left-aligned tables
- generous white, small base type (13–15px), tight leading, 2–3 columns
- a persistent header/sidebar that is the site's index; content scrolls beside it

The owner's existing PDF portfolio already uses a `Category / Position / Date / Place` metadata block set in a serif. The site mirrors this so print and web feel like one identity.

**Decisions (my calls — override freely)**
- Typeface pairing: a serif for titles and body (Newsreader via Google Fonts; Noto Serif KR for Korean) + a monospace for metadata/labels (JetBrains Mono or system mono). This is the pairing in references 1 and 2.
- Colour: paper white background, near-black text, one accent (the deep blue from reference 1 and from the Blue's Blues identity) used only for links and the active nav item. Dark mode follows system preference, same structure, inverted paper.
- Layout: fixed left column (name, one-line statement, nav with counts, contact) + scrolling right column. On mobile the left column collapses to a top bar.
- Home = the index: all items from all three sections in one table sorted by year, with a filter by section. This is the "two minute" overview a reviewer needs.
- Each section page = a column-list of its items (title, metadata, one-paragraph abstract, thumbnail). Each item has its own detail page.
- About/CV page = the CV as structured HTML with a PDF download.

## 4. Information architecture

```
/                      Index: statement + full chronological table (filterable)
/research/             list → /research/<slug>/
/curatorial/           list → /curatorial/<slug>/
/criticism/            list → /criticism/<slug>/
/about/                bio, education, awards, teaching, skills, CV PDF link
```

Content lives in `src/content/{research,curatorial,criticism}/<slug>.md` with frontmatter:

```yaml
title: "YouTropolis"
titleKo: "유트로폴리스"          # optional
type: "Exhibition"               # Exhibition | Thesis | Report | Presentation | Pipeline | Article | Talk | Column
role: "Curator"
date: 2026-09-01                 # sortable
dateLabel: "Sep 2026"            # what is shown
venue: "KAIST Museum"            # or publisher
location: "Daejeon"
collaborators: []                # optional
links: [{label: "KAIST Library", url: "..."}]
cover: "./cover.jpg"             # optional, co-located
summary: "one or two sentences"
featured: true
```

Body (Markdown) is the long description. Images go in the same folder as the `.md` and are referenced relatively.

## 5. Initial content (dummy, from CV + 2025 portfolio PDF)

Research (8): MS thesis (entry pathways / occupation comparison), KISDI AI exposure RAG pipeline (2026), KAIST lab AI & financial professions interviews (2025), Medical AI literature analysis (2024), Korea Press Foundation misinformation chatbot (2025), KISDI AI skill demand STM (2024), Equalism discourse poster (2025, award), Biove media-art AI architecture (2026).

Curatorial (4): YouTropolis (2026, KAIST Museum), Blue's Blues (2023, Bupyeong), Liquid Crystal Friendship (2023, Seoripul), Binary Garden (2022, Bokdo Gallery).

Criticism (7 entries): Art in Culture essays (2025, incl. "몸의 픽셀, 감정의 사이트"), Lee Dohyun catalogue essay, PONG (Goyoson solo show), Critic-al (2 essays), OK GO catalogue (Art Collider), "For Invisible Data" invited talk (Daejeon Science Art Biennale, 2025), "맛의 모습" food-culture column series (14 pieces, Karts News, 2022).

Placeholder images: extracted from the 2025 portfolio PDF where they exist; grey placeholder otherwise. Owner replaces later.

## 6. Technical

- Astro 5 (static output), content collections with Zod schema, no UI framework.
- CSS: plain CSS with custom properties; no Tailwind. One global stylesheet + scoped component styles.
- Fonts: Google Fonts (Newsreader, Noto Serif KR, JetBrains Mono) with `font-display: swap`.
- Deployment: GitHub Pages via GitHub Actions on push to `main` (free, owner-controlled). `astro.config.mjs` `site`/`base` set for `<user>.github.io/<repo>`; a custom domain can be added later by editing one file. Vercel/Netlify would also work with zero config.
- Repo: `/Users/yeongtaeklim/Desktop/homepage`, git-initialised, `main` branch.

## 7. Left to the builder

- Exact type scale and column widths (within the direction above).
- Mobile nav pattern (top bar with section links is fine).
- Whether the index table on `/` is sortable by column (nice-to-have).
- OG image / favicon: plain monogram "YL" in the serif.

## 8. Open questions for the owner (not blocking)

1. Custom domain? (e.g. yeongtaeklim.com)
2. Should criticism entries link to full PDFs of the published texts, or only to the publisher page?
3. Portrait photo on About, or none (references use none)?
4. Korean/English toggle site-wide, or English-primary with Korean titles as is (current plan)?
