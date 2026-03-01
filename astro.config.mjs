// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pastries-shop.vercel.app', // Placeholder URL
  integrations: [sitemap()],
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});