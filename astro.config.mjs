import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: Replace with your GitHub Pages URL
  // User/Organization site: https://<username>.github.io
  // Project site: https://<username>.github.io/<repo-name>
  site: 'https://yourusername.github.io',
  output: 'static',
  integrations: [sitemap()],
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});