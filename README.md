# Yeongtaek Lim — portfolio site

Static site built with [Astro](https://astro.build). Three practices — Research, Curatorial, Criticism — plus an About/CV page.

## Edit content

Each work is one Markdown file:

```
src/content/research/<slug>.md
src/content/curatorial/<slug>.md
src/content/criticism/<slug>.md
```

Images for a work go in a folder with the same name next to the file, e.g. `src/content/curatorial/blues-blues/cover.jpg`, and are referenced as `cover: ./blues-blues/cover.jpg` in the frontmatter or `![caption](./blues-blues/view-1.jpg)` in the body.

Frontmatter fields (see `src/content.config.ts`):

| field | required | example |
|---|---|---|
| title | yes | `"Blue's Blues"` |
| titleKo | no | `"블루스 블루스"` |
| type | yes | `"Exhibition"`, `"Review"`, `"Thesis"` … |
| role | yes | `"Curator"` |
| date | yes | `2023-09-22` (used for sorting only) |
| dateLabel | yes | `"22 Sep – 29 Oct 2023"` (what is shown) |
| venue, location | no | `"Seoripul Gallery"`, `"Seoul"` |
| collaborators | no | `["Cha Minyoung (choreographer)"]` |
| links | no | `[{ label: "Publisher", url: "https://…" }]` |
| cover, coverCaption | no | `./slug/cover.jpg` |
| summary | yes | one or two sentences for lists |
| featured | no | `true` |
| draft | no | `true` hides the entry |

Site-wide text (name, statement, section intros, email) lives in `src/lib/site.ts`. The CV page is `src/pages/about.astro`; the PDF is `public/Yeongtaek_Lim_CV.pdf`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Pushing to `main` on GitHub runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repository settings, set Pages → Source to "GitHub Actions" once.

- Repo named `taek-yumijoo.github.io` → site is served at the root; `astro.config.mjs` needs no `base`.
- Any other repo name → add `base: '/<repo-name>'` to `astro.config.mjs`.
- Custom domain → set `site` in `astro.config.mjs` and add the domain in Pages settings.
