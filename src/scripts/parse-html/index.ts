import * as cheerio from "cheerio";

export const parseHtml = (html: string) => {
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

	// Add classes to <img> tags
	$("img").each((_, elem) => {
		$(elem).addClass("image");
	});

	// Add classes to <a> tags
	$("a").each((_, elem) => {
		$(elem)
			.addClass("anchor")
			.attr("target", "_blank")
			.attr("rel", "noreferrer");
	});
	// Return the modified HTML
	return $("body").html();
};
