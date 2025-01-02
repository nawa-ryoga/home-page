import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,css}"],
	theme: {
		colors: {
			background: {
				default: "#232136",
				lighten: {
					1: "#2A283C",
					2: "#403E50",
					3: "#767581",
				},
				darken: { 1: "#151424" },
			},
			text: {
				default: "white",
				darken: {
					1: "#c9e0e6",
					2: "#9E9DA6",
				},
			},
		},
		extend: {
			fontFamily: {
				sans: ["Noto Sans JP", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
