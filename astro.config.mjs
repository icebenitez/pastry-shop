// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://pastry-shop-eta.vercel.app',
  adapter: vercel({
    imageService: true
  }),
  output: 'static',
  integrations: [sitemap()],

  image: {
    domains: ['images.unsplash.com'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.unsplash.com'
    }],
  },

  vite: {
    plugins: [tailwindcss()]
  },

});