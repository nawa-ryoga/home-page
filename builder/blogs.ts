import fs from "fs-extra";
import { getBlogList } from "../lib/client";
import { domPurify } from "../lib/dom-purify";
import { parseContent } from "../utils/parseContent";

(async function () {
  const { contents } = await getBlogList({ draftKey: undefined });
  if (!contents) return;

  const blogs = contents.map((blog) => {
    const content = domPurify().sanitize(blog.content, {
      USE_PROFILES: { html: true },
      ADD_ATTR: ["target"],
    });

    return {
      ...blog,
      content: parseContent(content),
    };
  });

  fs.ensureDirSync(".contents");
  fs.writeJsonSync(".contents/blogs.json", blogs);
})();
