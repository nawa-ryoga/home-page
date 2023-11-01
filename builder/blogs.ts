import fs from "fs-extra";
import { getBlogList } from "../lib/client";
import { domPurify } from "../lib/dom-purify";
const cheerio = require("cheerio");

(async function () {
  const { contents } = await getBlogList({ draftKey: undefined });
  if (!contents) return;

  const blogs = contents.map((blog) => {
    const content = domPurify().sanitize(blog.content, {
      USE_PROFILES: { html: true },
      ADD_ATTR: ["target"],
      FORCE_BODY: true,
      ADD_TAGS: ["script"],
    });

    const $ = cheerio.load(content);
    $("img").attr("loading", "lazy");

    return {
      ...blog,
      content: $.html(),
    };
  });

  fs.ensureDirSync(".contents");
  fs.writeJsonSync(".contents/blogs.json", blogs);
})();
