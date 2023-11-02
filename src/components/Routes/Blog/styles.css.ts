import { globalStyle, style } from "@vanilla-extract/css";
import theme from "../../../../kuma.config";

export const sectionStyle = style({
  paddingTop: "60px",
  maxWidth: "600px",
  margin: "0 auto",
  letterSpacing: "0.03em",
  lineHeight: "190%",
  borderTop: "1px solid",
});

globalStyle(`${sectionStyle} > a`, {
  textDecoration: "underline",
  color: theme.colors["colors.font.darken.2"],
});

globalStyle(`${sectionStyle} > p`, {
  color: theme.colors["colors.font.darken.1"],
  textAlign: "justify",
  marginBottom: "2.5rem",
  lineHeight: "1.7rem",
  fontSize: theme.fontSizes["fontSizes.sm"],
  "@media": {
    "(min-width: 576px)": {
      fontSize: theme.fontSizes["fontSizes.base"],
      marginBottom: "3rem",
      lineHeight: "1.7rem",
    },
  },
});

globalStyle(`${sectionStyle} > h2`, {
  fontSize: theme.fontSizes["fontSizes.xl"],
  marginBottom: "1rem",
  marginTop: "3.5rem",
  "@media": {
    "(min-width: 576px)": {
      fontSize: theme.fontSizes["fontSizes.2xl"],
      marginBottom: "1.5rem",
      marginTop: "4rem",
    },
  },
});

globalStyle(`${sectionStyle} > h3`, {
  color: theme.colors["colors.font.darken.1"],
  fontSize: theme.fontSizes["fontSizes.lg"],
  marginBottom: "0.8rem",
  marginTop: "2rem",
  "@media": {
    "(min-width: 576px)": {
      fontSize: theme.fontSizes["fontSizes.xl"],
      marginBottom: "1.5rem",
      marginTop: "2.5rem",
    },
  },
});

globalStyle(`${sectionStyle} > ul, ol`, {
  marginTop: "1.5rem",
  listStylePosition: "outside",
  listStyleType: "decimal",
  paddingLeft: "1.75rem",
});

globalStyle("ul, ol, section > :first-child", {
  marginTop: "0",
});

globalStyle("ul, ol, section > :last-child", {
  marginBottom: "0",
});

globalStyle(`${sectionStyle} li`, {
  color: theme.colors["colors.font.darken.1"],
  marginLeft: "1rem",
  marginRight: "1rem",
  wordBreak: "break-all",
  fontSize: theme.fontSizes["fontSizes.sm"],
  "@media": {
    "(min-width: 576px)": {
      fontSize: theme.fontSizes["fontSizes.base"],
    },
  },
});

globalStyle(`${sectionStyle} > hr`, {
  marginTop: "4rem",
  marginBottom: "4rem",
  borderStyle: "none",
  borderTop: `solid 1px ${theme.colors["colors.font.darken.2"]}`,
});

globalStyle(`${sectionStyle} > .iframely-embed`, {
  marginBottom: "2rem",
});

globalStyle(`${sectionStyle} > figure`, {
  marginRight: 0,
  marginLeft: 0,
  marginBottom: "2rem",
});

globalStyle(`${sectionStyle} img`, {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "4px",
});

globalStyle(`${sectionStyle} figcaption`, {
  fontSize: theme.fontSizes["fontSizes.xs"],
  color: theme.colors["colors.font.darken.2"],
  textAlign: "center",
  maxWidth: "580px",
  paddingTop: "8px",
  paddingBottom: "8px",
});
