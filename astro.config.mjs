import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  
  integrations: [sitemap(), react(), markdoc()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://southcarolinatreeremovalexperts.com',
});
