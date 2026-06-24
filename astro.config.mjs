import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  
  integrations: [sitemap(), react(), markdoc(), keystatic()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://southcarolinatreeremovalexperts.com',
});
