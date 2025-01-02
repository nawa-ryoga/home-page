import type React from "react";
import "../../styles/font.css";
import "../../styles/animation.css";
import "../../styles/global.css";

export type SiteOg = {
		description: string;
		type: "article" | "website" | "blog";
		image: string;
		url: string;
	};

type Props = {
	title?: string;
	og: SiteOg;
	children: React.ReactNode;
};

const SITE_NAME = "NAARY.ME"

export default function Meta({ title, og, children }: Props) {
	return (
		<html lang="ja" className="m-0 text-text-default">
			<head>
				<meta charSet="utf-8" />
				<link rel="icon" href="/favicon.ico" sizes="32x32" />
				<link rel="icon" href="/icon.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/manifest.webmanifest.txt" />
				<link
					rel="preload"
					href="/fonts/noto-sans-jp-regular.woff2"
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/noto-sans-jp-700.woff2"
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<meta name="viewport" content="width=device-width" />
				<meta name="description" content={og.description} />
				<meta property="og:url" content={og.url} />
				<meta property="og:type" content={og.type} />
				<meta property="og:description" content={og.description} />
				<meta property="og:title" content={title} />
				<meta property="og:image" content={og.image} />
				<meta property="og:site_name" content={SITE_NAME} />
				<meta property="twitter:card" content="summary" />
				<title>{title ? `${title} | ${SITE_NAME}` : SITE_NAME}</title>
			</head>
			<body className="bg-background-default m-0 text-text-default font-sans">
				{children}
			</body>
		</html>
	);
}
