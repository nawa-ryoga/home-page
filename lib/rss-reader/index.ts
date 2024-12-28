import { getDate } from "../day-js";
import type { RssUrl } from "../cms-client";
import * as cheerio from "cheerio";

export type FeedItem = {
	title: string;
	link: string;
	contentSnippet?: string;
	isoDate?: string;
	dateMiliSeconds: number;
};

function isValidUrl(str: string): boolean {
	try {
		const { protocol } = new URL(str);
		return protocol === "http:" || protocol === "https:";
	} catch {
		return false;
	}
}

async function fetchFeedItems(url: string): Promise<FeedItem[] | undefined> {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			console.error(`Failed to fetch RSS feed from ${url}`);
			return undefined;
		}

		const text = await response.text();
		const $ = cheerio.load(text, { xmlMode: true });

		const items = $("item").map((_, elem) => {
			const title = $(elem).find("title").text() || "";
			const link = $(elem).find("link").text() || "";
			const contentSnippet = $(elem).find("description").text().replace(/\n/g, "");
			const isoDateRaw = $(elem).find("pubDate").text();
			const isoDate = isoDateRaw || undefined;
			const dateMiliSeconds = isoDate ? getDate(isoDate).valueOf() : 0;

			return { title, link, contentSnippet, isoDate, dateMiliSeconds };
		}).get();

		return items.filter(({ title, link }) => title && link && isValidUrl(link));
	} catch (error) {
		console.error(`Error fetching or parsing RSS feed from ${url}:`, error);
		return undefined;
	}
}

export const getRssTimeline = async (
	feedUrls: RssUrl[],
): Promise<FeedItem[]> => {
	const feeds = await Promise.all(
		feedUrls.map((u) => fetchFeedItems(u.url)),
	);

	const items: FeedItem[] = [];
	for (const feedItems of feeds) {
		if (feedItems) {
			items.push(...feedItems);
		}
	}

	return items.length
		? items.sort((a, b) => b.dateMiliSeconds - a.dateMiliSeconds)
		: items;
};
