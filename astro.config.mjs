// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@src': '/src',
      }
    }
  },
  server: {
    host: true, // Écoute sur toutes les interfaces (0.0.0.0)
    port: 8088   // Port utilisé par Apache ProxyPass
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});