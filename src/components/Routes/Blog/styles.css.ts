import { globalStyle, style } from "@vanilla-extract/css";

export const sectionStyle = style({
  paddingTop: "60px",
  maxWidth: "600px",
  margin: "0 auto",
  letterSpacing: "0.03em",
  lineHeight: "190%",
  borderTop: "1px solid",
});

globalStyle(`${sectionStyle} img`, {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "4px",
});
