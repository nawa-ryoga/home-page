import { parse } from "node-html-parser";
import ogs from "open-graph-scraper";
import type { OgObject } from "open-graph-scraper/types";

export const createOgMap = async (htmlString: string): Promise<Map<string, OgObject>> => {
	const root = parse(htmlString);
	const iframelyDivs = root.querySelectorAll(".iframely-embed a");
	const ogMap = new Map<string, OgObject>();

	for (const aTag of iframelyDivs) {
		const href = aTag.getAttribute("href");
		if (href) {
			try {
				const { result } = await ogs({ url: href });
				ogMap.set(href, result);
			} catch (error) {
				console.error(`Failed to fetch Open Graph data for ${href}:`, error);
			}
		}
	}

	return ogMap;
}
