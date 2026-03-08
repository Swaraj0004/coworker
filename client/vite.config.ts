import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",

      includeAssets: [
        "favicon.ico",
        "icons/icon-192.png",
        "icons/icon-512.png"
      ],

      manifest: {
        name: "Space Now",
        short_name: "SpaceNow",
        description: "Find nearby spaces with real-time availability",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#121212",
        icons: [
          {
            src: "icons/icon-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icons/icon-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },

      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\/api\/spaces/,
            handler: "NetworkFirst",
            options: {
              cacheName: "space-now-api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24
              }
            }
          }
        ]
      }
    })
  ]
});
