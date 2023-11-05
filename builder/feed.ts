import RSS from "rss";
import fs from "fs-extra";
import { getBlogList } from "../lib/client";
import { DOMAIN, SITE_TITLE, OG_DESCRIPTION } from "../kuma.config";

const generateRssFeed = async () => {
  const feed = new RSS({
    title: SITE_TITLE,
    description: OG_DESCRIPTION,
    generator: `https://${DOMAIN}`,
    site_url: `https://${DOMAIN}`,
    feed_url: `https://${DOMAIN}/feed.xml`,
    image_url: `https://${DOMAIN}/favicon.ico`,
    language: "ja",
  });

  const { contents } = await getBlogList();

  contents?.forEach((post) => {
    if (!post.publishedAt) {
      return;
    }
    feed.item({
      title: post.title,
      description: post.summary,
      url: `https://${DOMAIN}/blogs/${post.id}`,
      author: "naary",
      date: new Date(post.publishedAt),
    });
  });

  return feed;
};

(async function () {
  const feed = await generateRssFeed();
  fs.writeFileSync("./public/feed.xml", feed.xml());
})();
