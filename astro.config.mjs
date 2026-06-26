import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://stijnhering.nl",
  integrations: [
    sitemap(),
    icon({
      include: {
        tabler: ["*"],
        logos: ["*"],
      },
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: true,
  output: "static",
});
