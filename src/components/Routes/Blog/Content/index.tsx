import parse, {
	Element,
	domToReact,
	attributesToProps,
} from "html-react-parser";
import type { HTMLReactParserOptions, DOMNode } from "html-react-parser";

type Props = {
	content: string;
};

export default function BlogContent({ content }: Props) {
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
						const a = domNode.next?.next;
						if (a instanceof Element === false) {
							return;
						}
						// 👍
						return <a href={a.attribs.href as string}>こちら</a>;
					}
				}
			}
		},
	};

	const sample = `
		<figure>
			<img src=\"https://images.microcms-assets.io/assets/c987b67b4da34a3d8860df3dc1a06811/8f32038064424fc5a2b932bdabcc09e1/IMG_3050.png\" alt=\"\" width=\"1600\" height=\"2000\">
			<figcaption>この絵を描いたときはこんな感じでした。</figcaption>
		</figure>
		<figure>
			<img src=\"https://images.microcms-assets.io/assets/c987b67b4da34a3d8860df3dc1a06811/f6f04d97b600446f9001de7ed99b1ed2/IMG_1034.jpeg\" alt=\"\" width=\"3978\" height=\"2238\">
		</figure>
		<p>
			<a href=\"https://omocoro.jp/kiji/487639/\">https://omocoro.jp/kiji/487639/</a>
		</p>
		<div class=\"iframely-embed\">
			<div class=\"iframely-responsive\" style=\"padding-bottom: 52.5%; padding-top: 120px;\">
				<a href=\"https://omocoro.jp/kiji/487639/\" data-iframely-url=\"//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fomocoro.jp%2Fkiji%2F487639%2F&amp;key=c271a3ec77ff4aa44d5948170dd74161\">
				</a>
			</div>
		</div>
		<script async src=\"//cdn.iframe.ly/embed.js\" charset=\"utf-8\"></script>
		<blockquote><p>このようにして引用しています</p></blockquote>
	`;

	return (
		<section className="font-content text-text-darken-1 pt-16 flex justify-center">
			<div className="max-w-[750px] border-t border-text-darken-1 pt-12">
				{/* {parse(content, options)} */}
				{parse(sample, options)}
			</div>
		</section>
	);
}
