import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  build: {
    client: new URL('./dist', import.meta.url),
    server: new URL('./dist/server', import.meta.url),
  },
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
  
  integrations: [sitemap(), react(), markdoc(), keystatic()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://southcarolinatreeremovalexperts.com',
});
