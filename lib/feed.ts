import RSS from "rss";
import { getBlogList } from "./client";
import { DOMAIN as D, SITE_TITLE, OG_DESCRIPTION } from "../kuma.config";

export async function generateFeedXml() {
  const DOMAIN = process.env.NODE_ENV === "production" ? D : "localhost";
  const PROTOCOL = process.env.NODE_ENV === "production" ? "https" : "http";

  const feed = new RSS({
    title: SITE_TITLE,
    description: OG_DESCRIPTION,
    site_url: `${PROTOCOL}://${DOMAIN}`,
    feed_url: `${PROTOCOL}://${DOMAIN}/feed`,
    language: "ja",
  });

  const { contents } = await getBlogList();
  contents?.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.summary,
      date: new Date(post.createdAt),
      url: `${DOMAIN}/blogs/${post.id}`,
    });
  });

  return feed.xml();
}
