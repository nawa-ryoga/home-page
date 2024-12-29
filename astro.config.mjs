// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://astro.build/config
export default defineConfig({
  	integrations: [tailwind(), react()],

  	vite: {
      plugins: [vanillaExtractPlugin()],
    },
    // output: "server",
});