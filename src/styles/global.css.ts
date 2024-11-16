import { style, globalStyle } from "@vanilla-extract/css";
import { THEME_COLOR } from "./consts/colors";

globalStyle("html, body", {
	background: THEME_COLOR,
	color: "white",
	margin: 0,
});

globalStyle("h2, h3, p, figure, blockquote", {
	margin: 0,
});

export const defaultInnerLinkStyle = style({
	textDecoration: "none",
	color: "white",
});
