import { style } from "@vanilla-extract/css";
import theme from "../../../../kuma.config";

export const linkStyle = style({
  textDecoration: "underline",
  color: theme.colors["colors.font.darken.2"],
});
