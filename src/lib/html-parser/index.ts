import * as cheerio from "cheerio";
import ReactDOMServer from "react-dom/server";
import type { OgObject } from "../og-scraper";

import OgLink from "../../components/Routes/Blog/Content/OgLink";

export const parseHtml = (html: string, ogMap?: Map<string, OgObject> ) => {
	const $ = cheerio.load(html);

	$("p").addClass("paragraph");
	$("h2").addClass("heading-2");
	$("h3").addClass("heading-3");
	$("ul").addClass("unordered-list");
	$("ol").addClass("ordered-list");
	$("li").addClass("list-item");
	$("figcaption").addClass("figcaption");
	$("figure").addClass("figure");
	$("blockquote").addClass("blockquote");
	$("img").addClass("image");
	$("a").addClass("anchor").attr("target", "_blank").attr("rel", "noreferrer");

	$("div.iframely-embed").each((_, elem) => {
		const anchor = $(elem).find("a");
		const url = anchor.attr("href");

		if (url && ogMap) {
			const result = ogMap.get(url);
			if (result === undefined) {
				return $(elem).replaceWith("");
			}
			const ogLinkHtml = ReactDOMServer.renderToStaticMarkup(OgLink({result}));
			$(elem).replaceWith(ogLinkHtml);
		}
	});

	$("script").remove();
	$("iframe").remove();

	return $("body").html();
};
