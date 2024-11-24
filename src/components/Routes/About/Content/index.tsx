import parse, {
	Element,
	domToReact,
	attributesToProps,
} from "html-react-parser";
import type { HTMLReactParserOptions, DOMNode } from "html-react-parser";

const options: HTMLReactParserOptions = {
	replace: (domNode) => {
		if (domNode instanceof Element && domNode.type === "tag") {
			const props = attributesToProps(domNode.attribs);

			if (domNode.attribs && domNode.name === "p") {
				return (
					<p className="mb-4 text-text-darken-1 text-sm" {...props}>
						{domToReact(domNode.children as DOMNode[], options)}
					</p>
				);
			}
		}
	},
};

type Props = {
	content: string;
};
export default function AboutContent({ content }: Props) {
	return <div className="px-4 sm:px-8">{parse(content, options)}</div>;
}
