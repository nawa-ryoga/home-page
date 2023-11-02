const cheerio = require("cheerio");

export function optimizeImage(content: string) {
  const $ = cheerio.load(content);
  $("img").attr("loading", "lazy");

  return $.html();
}
