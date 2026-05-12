import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mofe23.github.io',
  base: '/iboga-shop',
  integrations: [
    tailwind(),
  ],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'fr', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
