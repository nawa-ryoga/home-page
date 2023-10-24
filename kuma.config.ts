import { createTheme } from "@kuma-ui/core";

const theme = createTheme({
  colors: {
    background: {
      default: "#232136",
      lighten: { 1: "#2A283C" },
      darken: { 1: "#151424" },
    },
    font: {
      default: "white",
      darken: { 1: "#c9e0e6", 2: "#9E9DA6" },
    },
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
  },
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme;
