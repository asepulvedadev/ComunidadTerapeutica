// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://comunidadterapeutica.vercel.app',
  output: 'server',
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  }),
  integrations: [
    react(),
    tailwind(),
    sitemap()
  ],
  
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
