import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
	theme: {
		colors: {
			background: {
				default: "#232136",
				lighten: { 1: "#2A283C" },
				darken: { 1: "#151424" },
			},
			text: {
				default: "white",
			},
		},
		extend: {
			fontFamily: {
				sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
