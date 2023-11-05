import Head from "next/head";
import base64url from "base64url";
import {
  SITE_TITLE,
  DOMAIN,
  OG_DESCRIPTION,
  OG_IMAGE_LOGO,
  OG_IMAGE_BACKGROUND,
} from "../../../kuma.config";

type Props = {
  title?: string;
  content?: string;
  ogType?: "website" | "blog" | "article" | "product";
  ogImage?: string;
  path?: string;
};

export default function Meta({
  title,
  content = OG_DESCRIPTION,
  ogType = "website",
  ogImage,
  path,
}: Props) {
  const base64imageSrc = base64url(ogImage ? ogImage : OG_IMAGE_LOGO);

  return (
    <Head>
      <title key="title">{SITE_TITLE}</title>
      {title && <title key="title">{`${title} | ${SITE_TITLE}`}</title>}
      <link
        rel="icon"
        href="/favicon.ico"
        sizes="any"
      >
        {/* 32×32 */}
      </link>
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
        key="apple-touch-icon"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="description"
        content={content}
        key="description"
      />
      <meta
        property="og:url"
        content={`https://${DOMAIN}/${path ? path : ""}`}
        key="og-url"
      />
      <meta
        property="og:type"
        content={ogType}
        key="og-type"
      />
      <meta
        property="og:description"
        content={content}
        key="og-description"
      />
      <meta
        property="og:title"
        content={SITE_TITLE}
        key="og-title"
      />
      {title && (
        <meta
          property="og:title"
          content={`${title} | ${SITE_TITLE}`}
          key="og-title"
        />
      )}
      <meta
        property="og:image"
        content={`${OG_IMAGE_BACKGROUND}${base64imageSrc}`}
        key="og-image"
      />
      <meta
        property="og:site_name"
        content={SITE_TITLE}
        key="og-site-name"
      />
      <meta
        property="twitter:card"
        content="summary_large_image"
        key="og-twitter-card"
      />
    </Head>
  );
}
