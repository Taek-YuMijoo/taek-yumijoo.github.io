// @ts-check
import { defineConfig } from 'astro/config';

// For GitHub Pages at https://<user>.github.io/<repo>/ set `base: '/<repo>'`.
// For a custom domain or Vercel/Netlify, leave `base` out and set `site` to the domain.
export default defineConfig({
  site: 'https://taek-yumijoo.github.io',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
