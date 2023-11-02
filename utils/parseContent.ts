import * as cheerio from "cheerio";

export function parseContent(content: string) {
  const $ = cheerio.load(content);
  $("img").attr("loading", "lazy");

  $(".iframely-embed")
    .find("a")
    .each((_, element) => {
      const a = $(element);
      a.each((_, element) => {
        const a = $(element);
        const href = a.attr("href") || "";
        a.replaceWith(
          $(
            `<a class="embed-link" style="display: block; height: 180px; width: 100%;" href=${href}>${href}</a>`,
          ),
        );
      });
    });

  $(".iframely-embed").each((_, element) => {
    const div = $(element);
    const aElement = div.find("a").clone();
    div.replaceWith(aElement);
  });

  return $.html();
}
