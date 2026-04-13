// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: Replace DOMAIN_PLACEHOLDER with confirmed domain before launch
const SITE_URL = 'https://DOMAIN_PLACEHOLDER';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: SITE_URL,
  integrations: [
    sitemap(),
  ],
  build: {
    // Inline small assets to reduce HTTP requests
    inlineStylesheets: 'never',
  },
});
