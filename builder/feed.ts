import RSS from "rss";
import fs from "fs-extra";
import { DOMAIN, SITE_TITLE, OG_DESCRIPTION } from "../kuma.config";
import blogs from "../.contents/blogs.json";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

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

  blogs?.forEach((post) => {
    if (!post.publishedAt) {
      return;
    }
    feed.item({
      title: post.title,
      description: post.summary,
      url: `https://${DOMAIN}/blogs/${post.id}`,
      author: "naary",
      date: dayjs.utc(post.publishedAt).tz("Asia/Tokyo").format("YYYY MM DD"),
    });
  });

  return feed;
};

(async function () {
  const feed = await generateRssFeed();
  fs.writeFileSync("./public/feed.xml", feed.xml());
})();
