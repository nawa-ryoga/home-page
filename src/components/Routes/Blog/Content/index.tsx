import parse, {
	Element,
	domToReact,
	attributesToProps,
} from "html-react-parser";
import type { HTMLReactParserOptions, DOMNode } from "html-react-parser";
import type { OgObject } from "open-graph-scraper/types";

import OgLink from "./OgLink";

type Props = {
	content: string;
	ogMap: Map<string, OgObject>;
};

export default function BlogContent({ content, ogMap }: Props) {
	const options: HTMLReactParserOptions = {
		replace(domNode) {
			if (domNode instanceof Element && domNode.attribs) {
				const isBlockquote =
					domNode.parentNode instanceof Element &&
					domNode.parentNode.name === "blockquote";
				const props = attributesToProps(domNode.attribs);
				if (domNode.name === "h2") {
					if (isBlockquote) {
						return (
							<h2 className="text-2xl font-bold mt-[2em] first:mt-0" {...props}>
								{domToReact(domNode.children as DOMNode[], options)}
							</h2>
						);
					}
					return (
						<h2
							className="text-2xl font-bold text-text-default text-center mt-[3em] first:mt-0"
							{...props}
						>
							{domToReact(domNode.children as DOMNode[], options)}
						</h2>
					);
				}
				if (domNode.name === "h3") {
					return (
						<h3 className="text-xl font-bold mb-[.7rem] mt-2 first:mt-0">
							{domToReact(domNode.children as DOMNode[], options)}
						</h3>
					);
				}
				if (domNode.name === "p") {
					return (
						<p className="mt-4 first:mt-0 leading-[1.7rem]">
							{domToReact(domNode.children as DOMNode[], options)}
						</p>
					);
				}
				if (domNode.name === "ul") {
					const isNested =
						domNode.parentNode instanceof Element &&
						domNode.parentNode.name === "li";
					console.log(isNested);
					return (
						<ul
							className={`${isNested ? "pl-8" : ""} ${isNested ? "" : "mt-4"} first:mt-0 list-disc`}
						>
							{domToReact(domNode.children as DOMNode[], options)}
						</ul>
					);
				}
				if (domNode.name === "ol") {
					const isNested =
						domNode.parentNode instanceof Element &&
						domNode.parentNode.name === "li";
					return (
						<ol
							className={`${isNested ? "pl-8" : ""} ${isNested ? "" : "mt-4"} first:mt-0 list-decimal`}
						>
							{domToReact(domNode.children as DOMNode[], options)}
						</ol>
					);
				}
				if (domNode.name === "li") {
					return (
						<li className="list-inside leading-6">
							{domToReact(domNode.children as DOMNode[], options)}
						</li>
					);
				}
				if (domNode.name === "figcaption") {
					return (
						<figcaption className="mt-1 text-center text-text-darken-2">
							{domToReact(domNode.children as DOMNode[], options)}
						</figcaption>
					);
				}
				if (domNode.name === "figure") {
					return (
						<figure className="mt-12 first:mt-0">
							{domToReact(domNode.children as DOMNode[], options)}
						</figure>
					);
				}
				if (domNode.name === "img") {
					const width = props.width;
					const halfWidth = Number(width) / 2;
					const height = props.height;
					return (
						<img
							className="rounded max-w-full h-auto mt-4 first:mt-0 "
							src={`${props.src}?w=${halfWidth}`}
							alt={props.alt ? (props.alt as string) : ""}
							height={height as string}
							width={width as string}
						/>
					);
				}
				if (domNode.tagName === "a") {
					return (
						<a
							href={props.href as string}
							target="_blank"
							rel="noreferrer"
							className="text-text-darken-2 underline"
						>
							{domToReact(domNode.children as DOMNode[], options)}
						</a>
					);
				}
				if (domNode.tagName === "div") {
					if (domNode.attribs.class !== "iframely-responsive") {
						return;
					}

					const a = domNode.children[1];
					if (a instanceof Element === false) {
						return;
					}
					const og = ogMap.get(a.attribs.href as string);
					if (og === undefined) {
						return <a href={a.attribs.href as string}>link</a>;
					}
					return <OgLink result={og} />;
				}
				if (domNode.tagName === "blockquote") {
					return (
						<blockquote className="font-[0.7em] text-text-darken-2 p-4 mt-8 border-l-background-lighten-2 border-l-4 bg-background-lighten-1 rounded-sm">
							{domToReact(domNode.children as DOMNode[], options)}
						</blockquote>
					);
				}
			}
		},
	};

	return (
		<section className="font-content text-text-darken-1 pt-16 flex justify-center">
			<div className="max-w-[750px] border-t border-text-darken-1 pt-12">
				{parse(content, options)}
			</div>
		</section>
	);
}
