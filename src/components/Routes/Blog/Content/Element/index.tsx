import { imageConfig } from "astro:assets";

type Props = {
	tagName: string;
	children?: React.ReactNode;
	img?: {
		width: number;
		height: number;
		src: string;
		alt: string;
	};
	href?: string;
};

export default function Element({ tagName, children, img, href }: Props) {
	switch (tagName) {
		case "p":
			return <p className="mt-[1em] first:mt-0 leading-[1.7rem]">{children}</p>;
		case "h2":
			return (
				<h2 className="text-2xl font-bold text-text-default text-center mt-[4em] first:mt-0">
					{children}
				</h2>
			);
		case "h3":
			return (
				<h3 className="text-xl font-bold mt-[2.4em] first:mt-0 text-center">
					{children}
				</h3>
			);
		case "ul":
			return (
				<ul className="pl-8 mt-4 first:mt-0 list-disc marker:text-text-darken-2">
					{children}
				</ul>
			);
		case "ol":
			return (
				<ol className="pl-6 mt-4 first:mt-0 list-decimal marker:text-text-darken-2">
					{children}
				</ol>
			);
		case "li":
			return <li className="list-outside pl-1 leading-6">{children}</li>;
		case "figcaption":
			return (
				<figcaption className="mt-1 text-center text-text-darken-2">
					{children}
				</figcaption>
			);
		case "figure":
			return <figure className="mt-12 first:mt-0">{children}</figure>;
		case "img":
			if (!img) return;

			return (
				<img
					src={img.src}
					alt={img.alt}
					width={img.width}
					height={img.height}
					className="rounded max-w-full h-auto mt-4 first:mt-0"
				/>
			);
		case "a":
			if (!href) return;
			return (
				<a
					href={href}
					target="_blank"
					rel="noreferrer"
					className="text-text-darken-2 underline"
				>
					{children}
				</a>
			);
		case "blockquote":
			return (
				<blockquote className="font-[0.7em] text-text-darken-2 p-4 mt-8 border-l-background-lighten-2 border-l-4 bg-background-lighten-1 rounded-sm">
					{children}
				</blockquote>
			);
		default:
			return <p className="mt-[1em] first:mt-0 leading-[1.7rem]">{children}</p>;
	}
}
