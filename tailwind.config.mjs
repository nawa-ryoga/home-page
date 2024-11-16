// import { THEME_COLOR } from "./src/styles/consts/colors";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			background: {
				default: THEME_COLOR,
			},
		},
		extend: {},
	},
	plugins: [],
};
