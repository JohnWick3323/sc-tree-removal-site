import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
  build: {
    client: './',
    server: './_worker.js',
    serverEntry: 'index.js'
  },
  integrations: [sitemap(), react(), markdoc(), keystatic()],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['virtual:keystatic-config', '@cloudflare/unenv-preset/node/process']
    }
  },
  site: 'https://southcarolinatreeremovalexperts.com',
});
