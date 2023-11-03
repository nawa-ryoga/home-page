import Parser from "rss-parser";
import fs from "fs-extra";
import { USER_RSS_FEEDS } from "../kuma.config";

const parser = new Parser();

type FeedItem = {
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
        dateMiliSeconds: isoDate ? new Date(isoDate).getTime() : 0,
      };
    })
    .filter(({ title, link }) => title && link && isValidUrl(link)) as FeedItem[];
}

const getRssTimeline = async () => {
  const feedUrls = USER_RSS_FEEDS;
  const feeds = await Promise.all(feedUrls.map((url) => fetchFeedItems(url)));

  const items: FeedItem[] = [];

  for (const feedItems of feeds) {
    if (feedItems) {
      items.push(...feedItems);
    }
  }

  return items ? items.sort((a, b) => b.dateMiliSeconds - a.dateMiliSeconds) : items;
};

(async function () {
  const rss = await getRssTimeline();

  fs.ensureDirSync(".contents");
  fs.writeJsonSync(".contents/rss.json", rss);
})();
