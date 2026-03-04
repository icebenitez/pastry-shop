// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://pastries-shop.vercel.app',
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

  adapter: vercel()
});