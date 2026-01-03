// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.roccoandrealigorio.it',
  integrations: [sitemap()],
  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'logo.png', 'robots.txt'],
        manifest: {
          name: 'Rocco Andrea Ligorio - Supporto IT',
          short_name: 'RoLiADM',
          description: 'Assistenza informatica professionale a Roma e Lazio.',
          theme_color: '#0f172a',
          icons: [
            {
              src: 'logo.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'logo.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        workbox: {
          navigateFallback: '/404',
          globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}']
        },
        devOptions: {
          enabled: true
        }
      })
    ]
  },
  build: {
    format: 'file'
  }
});