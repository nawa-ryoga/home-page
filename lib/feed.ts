import RSS from "rss";
import { getBlogList } from "./client";
import { DOMAIN, SITE_TITLE, OG_DESCRIPTION } from "../kuma.config";

export async function generateFeedXml() {
  const feed = new RSS({
    title: SITE_TITLE,
    description: OG_DESCRIPTION,
    site_url: `https://${DOMAIN}`,
    feed_url: `https://${DOMAIN}/feed`,
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
