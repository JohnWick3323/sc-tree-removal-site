import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import cloudflare from '@astrojs/cloudflare';

function keystaticConfigPlugin() {
  return {
    name: 'keystatic-config',
    resolveId(id) {
      if (id === 'virtual:keystatic-config') {
        return this.resolve('./keystatic.config', './a');
      }
      return null;
    },
  };
}

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
  integrations: [sitemap(), react(), markdoc()],
  vite: {
    plugins: [tailwindcss(), keystaticConfigPlugin()],
    optimizeDeps: {
      exclude: ['virtual:keystatic-config', '@cloudflare/unenv-preset/node/process']
    }
  },
  site: 'https://southcarolinatreeremovalexperts.com',
});
