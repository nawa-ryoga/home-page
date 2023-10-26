import { NextApiRequest, NextApiResponse } from "next";
import RSS from "rss";
import { getBlogList } from "../../../lib/client";
import { DOMAIN, SITE_TITLE, OG_DESCRIPTION } from "../../../kuma.config";

export const runtime = "experimental-edge";

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
    const feed = new RSS({
      title: SITE_TITLE,
      description: OG_DESCRIPTION,
      site_url: `https://${DOMAIN}`,
      feed_url: `https://${DOMAIN}/api/feed`,
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

  res.setHeader("Content-Type", "application/rss+xml");
  res.write(feed.xml());
  res.end();
};

export default handler;
