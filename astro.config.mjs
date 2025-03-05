// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      configPath: './tailwind.config.js'
    }),
    sitemap()
  ],
  site: 'https://comunidadterapeuticasillworth.com',
  output: 'hybrid',
  build: {
    assets: '_assets'
  },
  vite: {
    optimizeDeps: {
      include: ['framer-motion', 'react-hook-form', 'zod']
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'framer-motion': ['framer-motion'],
            'react-vendor': ['react', 'react-dom'],
          }
        }
      }
    }
  }
});
