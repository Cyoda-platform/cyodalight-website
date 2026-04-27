// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// Custom domain: remove `base`, set `site` to the final domain.
const GITHUB_PAGES_SITE = 'https://cyoda-platform.github.io';
const GITHUB_PAGES_BASE = '/cyodalight-website/';

export default defineConfig({
  output: 'static',
  site: GITHUB_PAGES_SITE,
  base: GITHUB_PAGES_BASE,
  integrations: [
    react(),
    sitemap(),
  ],
  build: {
    inlineStylesheets: 'never',
  },
  vite: {
    ssr: {
      noExternal: ['@cyoda/workflow-react', 'reactflow'],
    },
  },
});
