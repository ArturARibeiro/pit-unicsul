import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import {VitePWA} from 'vite-plugin-pwa'
import {defineConfig} from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      includeAssets: ['favicon_192.svg', 'favicon_512.svg'],
      manifest: {
        name: "Artur's Bakery",
        short_name: 'Bakery',
        description: 'App de padaria gourmet',
        theme_color: '#ffb000',
        icons: [
          {
            src: 'favicon_192.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: 'favicon_512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          }
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    }),
  ],

  server: {
    host: '0.0.0.0',
    hmr: {
      host: '0.0.0.0',
      port: 8081
    }
  }
})
