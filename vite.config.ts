import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/secret-santa/",   
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Secret Santa",
        short_name: "SecretSanta",
        start_url: "/secret-santa/",     
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/secret-santa/santaIcon.png", 
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/secret-santa/santaIcon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
