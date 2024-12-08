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
				const props = attributesToProps(domNode.attribs);
				if (domNode.name === "h2") {
					return (
						<h2
							className="text-2xl font-bold text-text-default mt-[3em] first:mt-0"
							{...props}
						>
							{domToReact(domNode.children as DOMNode[], options)}
						</h2>
					);
				}
				if (domNode.name === "h3") {
					return (
						<h3 className="text-xl font-bold mb-[.7rem] mt-2">
							{domToReact(domNode.children as DOMNode[], options)}
						</h3>
					);
				}
				if (domNode.name === "p") {
					return (
						<p className="mt-4 leading-[1.7rem]">
							{domToReact(domNode.children as DOMNode[], options)}
						</p>
					);
				}
				if (domNode.name === "ul") {
					const isNested =
						domNode.parent instanceof Element && domNode.parent.name === "li";
					return (
						<ul
							className={`${isNested ? "pl-10" : ""} ${isNested ? "" : "my-4"}`}
						>
							{domToReact(domNode.children as DOMNode[], options)}
						</ul>
					);
				}
				if (domNode.name === "li") {
					return (
						<li className="list-disc list-inside leading-6">
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
					return (
						<img
							className="rounded max-w-full h-auto"
							src={props.src as string}
							alt={props.alt ? (props.alt as string) : ""}
							width={props.width as string}
							height={props.height as string}
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
					if (domNode.attribs.class === "iframely-embed") {
						const node = domNode.firstChild?.next;
						if (node instanceof Element === false) {
							return;
						}
						const a = node.children.find(
							(c) => c.type === "tag" && c.name === "a",
						) as Element;
						const og = ogMap.get(a.attribs.href as string);
						if (og === undefined) {
							return <a href={a.attribs.href as string}>link</a>;
						}
						return <OgLink result={og} />;
					}
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
