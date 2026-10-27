// @ts-check
import { defineConfig } from 'astro/config';

// For GitHub Pages at https://<user>.github.io/<repo>/ set `base: '/<repo>'`.
// For a custom domain or Vercel/Netlify, leave `base` out and set `site` to the domain.
export default defineConfig({
  site: 'https://taek-yumijoo.github.io',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Old addresses from before the Curatorial section was renamed.
  redirects: {
    '/curatorial/': '/exhibitions/',
    '/curatorial/binary-garden/': '/exhibitions/binary-garden/',
    '/curatorial/blues-blues/': '/exhibitions/blues-blues/',
    '/curatorial/liquid-crystal-friendship/': '/exhibitions/liquid-crystal-friendship/',
    '/curatorial/youtropolis/': '/exhibitions/youtropolis/',
    '/research/biove-media-art-ai/': '/exhibitions/biove-media-art-ai/',
  },
});
