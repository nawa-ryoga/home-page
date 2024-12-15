// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare(),
	integrations: [tailwind(), react()],
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
});
