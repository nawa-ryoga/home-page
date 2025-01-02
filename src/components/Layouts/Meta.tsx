import type React from "react";
import "../../styles/font.css";

type Props = {
	title: string;
	content: string;
	children: React.ReactNode;
};

export default function Meta({ title, content, children }: Props) {
	return (
		<html lang="ja" className="m-0 text-text-default">
			<head>
				<meta charSet="utf-8" />
				<link rel="icon" href="/favicon.ico" sizes="32x32" />
				<link rel="icon" href="/icon.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/manifest.webmanifest.txt" />
				<meta name="viewport" content="width=device-width" />
				<meta name="description" content={content} />
				<title>{title}</title>
			</head>
			<body className="bg-background-default m-0 text-text-default font-sans">
				{children}
			</body>
		</html>
	);
}
