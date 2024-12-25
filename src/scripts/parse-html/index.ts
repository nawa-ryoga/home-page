import * as cheerio from "cheerio";

export const parseHtml = (html: string) => {
	const $ = cheerio.load(html);

	$("p").addClass("mt-[1em] first:mt-0 leading-[1.7rem]");
	$("h2").addClass("text-2xl font-bold text-text-default text-center mt-[4em] first:mt-0");
	$("h3").addClass("text-xl font-bold mt-[2.4em] first:mt-0 text-center");
	$("ul").addClass("pl-8 mt-4 first:mt-0 list-disc marker:text-text-darken-2");
	$("ol").addClass("pl-6 mt-4 first:mt-0 list-decimal marker:text-text-darken-2");
	$("li").addClass("list-outside pl-1 leading-6");
	$("figcaption").addClass("mt-1 text-center text-text-darken-2");
	$("figure").addClass("mt-12 first:mt-0");
	$("blockquote").addClass(
		"font-[0.7em] text-text-darken-2 p-4 mt-8 border-l-background-lighten-2 border-l-4 bg-background-lighten-1 rounded-sm"
	);

	// Add classes to <img> tags
	$("img").each((_, elem) => {
		$(elem).addClass("rounded max-w-full h-auto mt-4 first:mt-0");
	});

	// Add classes to <a> tags
	$("a").each((_, elem) => {
		$(elem)
			.addClass("text-text-darken-2 underline")
			.attr("target", "_blank")
			.attr("rel", "noreferrer");
	});
	// Return the modified HTML
	return $("body").html();
};
