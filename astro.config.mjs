// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages deployment: site is served from a subdirectory.
// `base` must match the repository name so Astro prefixes all
// asset paths (CSS, JS, fonts, images) correctly.
//
// When a custom domain is confirmed, remove `base` entirely and
// update `site` to the final domain.
const GITHUB_PAGES_SITE = 'https://cyoda-platform.github.io';
const GITHUB_PAGES_BASE = '/cyodalight-website';

export default defineConfig({
  output: 'static',
  site: GITHUB_PAGES_SITE,
  base: GITHUB_PAGES_BASE,
  integrations: [
    sitemap(),
  ],
  build: {
    inlineStylesheets: 'never',
  },
});
