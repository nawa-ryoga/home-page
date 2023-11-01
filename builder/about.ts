import fs from "fs-extra";
import type { About } from "../lib/client";
import { getAboutContent } from "../lib/client";
import { domPurify } from "../lib/dom-purify";

(async function () {
  const about = await getAboutContent();
  const purify = domPurify();

  const contents = about.contents.map((content) => {
    if (!content.content) {
      return content;
    }
    return {
      ...content,
      content: purify.sanitize(content.content, {
        USE_PROFILES: { html: true },
      }),
    };
  });

  const summery = purify.sanitize(about.summery, {
    USE_PROFILES: { html: true },
  });

  const a: About = {
    ...about,
    summery,
    contents,
  };

  fs.ensureDirSync(".contents");
  fs.writeJsonSync(".contents/about.json", a);
})();
