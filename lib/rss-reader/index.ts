import Parser from "rss-parser";
import { getDate } from "../day-js";
import type { RssUrl } from "../cms-client";

const parser = new Parser();

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

async function fetchFeedItems(url: string) {
	const feed = await parser.parseURL(url);
	if (!feed?.items?.length) return undefined;

	return feed.items
		.map(({ title, contentSnippet, link, isoDate }) => {
			return {
				title,
				contentSnippet: contentSnippet?.replace(/\n/g, ""),
				link,
				isoDate,
				dateMiliSeconds: isoDate ? getDate(isoDate).valueOf() : 0,
			};
		})
		.filter(
			({ title, link }) => title && link && isValidUrl(link),
		) as FeedItem[];
}

export const getRssTimeline = async (feedUrls: RssUrl[]) => {
	const feeds = await Promise.all(feedUrls.map((u) => fetchFeedItems(u.url)));

	const items: FeedItem[] = [];

	for (const feedItems of feeds) {
		if (feedItems) {
			items.push(...feedItems);
		}
	}

	return items
		? items.sort((a, b) => b.dateMiliSeconds - a.dateMiliSeconds)
		: items;
};
