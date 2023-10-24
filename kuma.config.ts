import { createTheme } from "@kuma-ui/core";

export const DEFAULT_BACKGROUND_COLOR = "#232136" as const;

const theme = createTheme({
  colors: {
    background: {
      default: DEFAULT_BACKGROUND_COLOR,
      lighten: { 1: "#2A283C" },
      darken: { 1: "#151424" },
    },
    font: {
      default: "white",
      darken: { 1: "#c9e0e6", 2: "#9E9DA6" },
    },
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    md: "1.125rem",
    lg: "1.25rem",
    xl: "1.5rem",
  },
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme;
