import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("html, body", {
	background: "#232136",
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

export const testStyle = style({
    background: "black"
})