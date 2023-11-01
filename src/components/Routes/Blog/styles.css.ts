import { globalStyle } from "@vanilla-extract/css";
import theme from "../../../../kuma.config";

globalStyle("a", {
  textDecoration: "underline",
  color: theme.colors["colors.font.darken.2"],
});

globalStyle("p", {
  color: theme.colors["colors.font.darken.1"],
  marginBottom: "2.5rem",
  textAlign: "justify",
  lineHeight: "1.7rem",
});

globalStyle("h2", {
  fontSize: theme.fontSizes["fontSizes.2xl"],
  marginBottom: "1.5rem",
  marginTop: "4rem",
});

globalStyle("h3", {
  fontSize: theme.fontSizes["fontSizes.xl"],
  color: theme.colors["colors.font.darken.1"],
  marginBottom: "1.5rem",
  marginTop: "2.5rem",
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
