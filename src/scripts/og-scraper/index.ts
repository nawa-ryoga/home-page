import * as cheerio from "cheerio";

export type OgObject = {
	ogUrl: string;
	ogTitle: string;
	ogDescription?: string;
	ogImage?: { url: string; width?: number; height?: number }[];
	favicon?: string;
};

const fetchOgData = async (url: string): Promise<OgObject> => {
	try {
		const response = await fetch(url);
		const html = await response.text();
		const $ = cheerio.load(html);

		const ogUrl = $('meta[property="og:url"]').attr('content') || url;
		const ogTitle = $('meta[property="og:title"]').attr('content') || "No Title";
		const ogDescription = $('meta[property="og:description"]').attr('content') || "";
		const ogImageMeta = $('meta[property="og:image"]');
		const ogImage = ogImageMeta.map((_, elem) => {
			const imageUrl = $(elem).attr('content');
			if (imageUrl) {
				return { url: imageUrl };
			}
			return null;
		}).get().filter(Boolean);

		const favicon = $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href') || "";

		return { ogUrl, ogTitle, ogDescription, ogImage, favicon };
	} catch (error) {
		console.error(`Failed to fetch Open Graph data from ${url}:`, error);
		return { ogUrl: url, ogTitle: "Failed to fetch data" };
	}
};

export const createOgMap = async (htmlString: string): Promise<Map<string, OgObject>> => {
	const $ = cheerio.load(htmlString);
	const ogMap = new Map<string, OgObject>();

	const promises = $(".iframely-embed a").map(async (_, elem) => {
		const href = $(elem).attr("href");
		if (href) {
			const result = await fetchOgData(href);
			ogMap.set(href, result);
		}
	}).get();

	await Promise.all(promises);

	return ogMap;
};
