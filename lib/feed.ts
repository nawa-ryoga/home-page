import { Feed } from "feed";
import fs from "fs-extra";
import dayjs from "dayjs"
import { getBlogList } from "./client";
import { DOMAIN, SITE_TITLE, OG_DESCRIPTION } from "../kuma.config";

export async function generateFeedXml() {

  const baseUrl = `https://${DOMAIN}`;

  const feed = new Feed({
    title: SITE_TITLE,
    description: OG_DESCRIPTION,
    link: baseUrl,
    feed: `${baseUrl}/feed`,
    language: "ja",
    id: baseUrl,
    copyright: `©${dayjs().toDate().getFullYear()} naary.me`,
  });

  const { contents } = await getBlogList();
  contents?.forEach((post) => {
    feed.addItem({
      title: post.title,
      description: post.summary,
      date: new Date(post.createdAt),
      link: `${DOMAIN}/blogs/${post.id}`,
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
}
