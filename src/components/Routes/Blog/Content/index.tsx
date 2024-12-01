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
							className="text-2xl font-bold text-text-default mb-1 mt-[3.5rem]"
							{...props}
						>
							{domToReact(domNode.children as DOMNode[], options)}
						</h2>
					);
				}
				if (domNode.name === "h3") {
					return (
						<h3 className="text-xl font-bold text-text-darken-1 mb-[.7rem] mt-2">
							{domToReact(domNode.children as DOMNode[], options)}
						</h3>
					);
				}
				if (domNode.name === "p") {
					return (
						<p className="text-text-darken-1 mb-1">
							{domToReact(domNode.children as DOMNode[], options)}
						</p>
					);
				}
				if (domNode.name === "ul") {
					const isNested =
						domNode.parent instanceof Element && domNode.parent.name === "li";
					return (
						<ul className={`${isNested ? "pl-8" : ""} ${isNested ? "": "my-4"}`}>
							{domToReact(domNode.children as DOMNode[], options)}
						</ul>
					);
				}
				if (domNode.name === "li") {
					return (
						<li className="list-disc list-inside">
							{domToReact(domNode.children as DOMNode[], options)}
						</li>
					);
				}
			}
		},
	};

	return (
		<section className="font-content pt-16 flex justify-center">
			<div className="max-w-[600px] border-t border-text-darken-1 pt-12">
				{parse(content, options)}
			</div>
		</section>
	);
}
