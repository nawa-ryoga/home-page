import fs from "fs-extra";
import { getBlogList } from "../lib/client";
import { domPurify } from "../lib/dom-purify";
import { optimizeImage } from "../utils/optimizedImage";

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

    return {
      ...blog,
      content: optimizeImage(content),
    };
  });

  fs.ensureDirSync(".contents");
  fs.writeJsonSync(".contents/blogs.json", blogs);
})();
