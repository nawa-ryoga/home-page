// import { getDate } from "../day-js";
// import type { RssUrl } from "../cms-client";
// import { DOMParser as NodeDomParser } from "xmldom";

// export type FeedItem = {
// 	title: string;
// 	link: string;
// 	contentSnippet?: string;
// 	isoDate?: string;
// 	dateMiliSeconds: number;
// };

// function isNodeEnvironment(): boolean {
// 	return (
// 		typeof process !== "undefined" &&
// 		process.versions != null &&
// 		process.versions.node != null
// 	);
// }


// function isValidUrl(str: string): boolean {
// 	try {
// 		const { protocol } = new URL(str);
// 		return protocol === "http:" || protocol === "https:";
// 	} catch {
// 		return false;
// 	}
// }

// async function fetchFeedItems(
// 	url: string,
// 	parser: DOMParser | NodeDomParser
// ): Promise<FeedItem[] | undefined> {
// 	try {
// 		const response = await fetch(url);
// 		if (!response.ok) {
// 			console.error(`Failed to fetch RSS feed from ${url}`);
// 			return undefined;
// 		}

// 		const text = await response.text();
// 		const xmlDoc = parser.parseFromString(text, "application/xml");

// 		const items = Array.from(xmlDoc.querySelectorAll("item")).map((item) => {
// 			const title = item.querySelector("title")?.textContent ?? "";
// 			const link = item.querySelector("link")?.textContent ?? "";
// 			const contentSnippet = item
// 				.querySelector("description")
// 				?.textContent?.replace(/\n/g, "");
// 			const isoDateRaw = item.querySelector("pubDate")?.textContent;
// 			const isoDate = isoDateRaw ?? undefined;
// 			const dateMiliSeconds = isoDate ? getDate(isoDate).valueOf() : 0;

// 			return { title, link, contentSnippet, isoDate, dateMiliSeconds };
// 		});

// 		return items.filter(({ title, link }) => title && link && isValidUrl(link));
// 	} catch (error) {
// 		console.error(`Error fetching or parsing RSS feed from ${url}:`, error);
// 		return undefined;
// 	}
// }


// export const getRssTimeline = async (
// 	feedUrls: RssUrl[],
// ): Promise<FeedItem[]> => {
// 	const parser = isNodeEnvironment() ? new NodeDomParser(): new DOMParser();
// 	const feeds = await Promise.all(
// 		feedUrls.map((u) => fetchFeedItems(u.url, parser)),
// 	);

// 	const items: FeedItem[] = [];
// 	for (const feedItems of feeds) {
// 		if (feedItems) {
// 			items.push(...feedItems);
// 		}
// 	}

// 	return items.length
// 		? items.sort((a, b) => b.dateMiliSeconds - a.dateMiliSeconds)
// 		: items;
// };
