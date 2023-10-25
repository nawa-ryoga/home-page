import { createTheme } from "@kuma-ui/core";

export const SITE_TITLE = "NAARY.ME";
export const DOMAIN = "naary.me";
export const OG_IMAGE_LOGO =
  "https://images.microcms-assets.io/assets/c987b67b4da34a3d8860df3dc1a06811/a506264fe419439398e933d3c8ce1713/nenn-jp-ping-logo.png";
export const OG_IMAGE_BACKGROUND =
  "https://images.microcms-assets.io/assets/c987b67b4da34a3d8860df3dc1a06811/824b2256fbe44374934f53fa110d23d7/og-image-background.png?w=1200&mark-align=center%2Cmiddle&mark64=";

export const DEFAULT_BACKGROUND_COLOR = "#232136" as const;

export const theme = createTheme({
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
    "2xl": "1.875rem",
    "3xl": "2.25rem",
    "4xl": "3rem",
    "5xl": "3.75rem",
  },
} as const);

type SocialTarget = "twitter" | "instagram" | "facebook" | "note" | "github";

type Social = {
  target: SocialTarget;
  link: string;
  icon: string;
};

type UserSocialLinks = [Social] | [Social, Social] | [Social, Social, Social];

const userSocialLinks: UserSocialLinks = [
  {
    target: "note",
    link: "https://note.com/naary",
    icon: "/assets/image/social/note.svg",
  },
  {
    target: "instagram",
    link: "https://www.instagram.com/naary.me/",
    icon: "/assets/image/social/instagram.svg",
  },
];

export const themeConfig = {
  image: {
    background: {
      experience:
        "https://images.microcms-assets.io/assets/c987b67b4da34a3d8860df3dc1a06811/89bcd028976645cfac8b64f1331ed9c0/IMG_3077.png",
      blog: "https://images.microcms-assets.io/assets/c987b67b4da34a3d8860df3dc1a06811/82d2e96f6f69490bb589da104ca87bd8/Frame%2015.png",
      about:
        "https://images.microcms-assets.io/assets/c987b67b4da34a3d8860df3dc1a06811/b5ca92ea642e40a5abfe6c2545470774/Frame%2016.png",
    },
  },
  social: userSocialLinks,
} as const;

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme;
