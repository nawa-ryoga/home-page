import * as cheerio from "cheerio";
import React from "react";
import ReactDOMServer from "react-dom/server";
import Element from "../../components/Routes/Blog/Content/Element";

export const element = (html: string): string => {
	const $ = cheerio.load(html);

	// Process non-special tags
	for (const tagName of [
		"p, h2, h3, ul, ol, li, figcaption, figure, blockquote",
	]) {
		$(tagName).each((_, elem) => {
			const children = $(elem).html();
			const renderedComponent = ReactDOMServer.renderToStaticMarkup(
				React.createElement(Element, { tagName, children }),
			);
			$(elem).replaceWith(renderedComponent);
		});
	}

	// Process <img> tags
	$("img").each((_, elem) => {
		const imgAttrs = {
			src: $(elem).attr("src") || "",
			alt: $(elem).attr("alt") || "",
			width: Number($(elem).attr("width") || "0"),
			height: Number($(elem).attr("height") || "0"),
		};
		const renderedComponent = ReactDOMServer.renderToStaticMarkup(
			React.createElement(Element, { tagName: "img", img: imgAttrs }),
		);
		$(elem).replaceWith(renderedComponent);
	});

	// Process <a> tags
	$("a").each((_, elem) => {
		const href = $(elem).attr("href") || "";
		const children = $(elem).html();
		const renderedComponent = ReactDOMServer.renderToStaticMarkup(
			React.createElement(Element, { tagName: "a", href }, children),
		);
		$(elem).replaceWith(renderedComponent);
	});

	// Return the modified HTML
	return $.html();
};
