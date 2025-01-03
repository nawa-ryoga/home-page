// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react(), sitemap()],
	site: "https://naary.me",
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
});