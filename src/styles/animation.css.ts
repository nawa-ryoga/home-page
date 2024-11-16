import { keyframes, style } from "@vanilla-extract/css";

const fadeInUp = keyframes({
	"0%": {
		opacity: 0,
		transform: "translateY(8px)",
	},
	"100%": {
		opacity: 1,
		transform: "translateY(0)",
	},
});

export const fadeInUpAnimation = style({
	opacity: 0,
	animationName: fadeInUp,
	animationFillMode: "forwards",
});

export const firstIn = style([
	fadeInUpAnimation,
	{
		animationDelay: "0.2s",
		animationDuration: "0.2s",
	},
]);

export const secondIn = style([
	fadeInUpAnimation,
	{
		animationDelay: "0.4s",
		animationDuration: "0.2s",
	},
]);