import { globalStyle } from "@vanilla-extract/css";
import theme from "../../../../kuma.config";

globalStyle("a", {
  textDecoration: "underline",
  color: theme.colors["colors.font.darken.2"],
});

globalStyle("p", {
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

globalStyle("h2", {
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

globalStyle("h3", {
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

globalStyle("ul, ol", {
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

globalStyle("li", {
  marginLeft: "1rem",
  marginRight: "1rem",
  wordBreak: "break-all",
});

globalStyle("hr", {
  marginTop: "4rem",
  marginBottom: "4rem",
  borderStyle: "none",
  borderTop: `solid 1px ${theme.colors["colors.font.darken.2"]}`,
});

globalStyle(".iframely-embed", {
  marginBottom: "2rem",
});

globalStyle("figure", {
  marginRight: 0,
  marginLeft: 0,
  marginBottom: "2rem",
});

globalStyle("img", {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "4px",
});

globalStyle("figcaption", {
  fontSize: theme.fontSizes["fontSizes.xs"],
  color: theme.colors["colors.font.darken.2"],
  textAlign: "center",
  maxWidth: "580px",
  paddingTop: "8px",
  paddingBottom: "8px",
});
