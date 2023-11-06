import fs from "fs-extra";
import type { Blog } from "../lib/client";
import { DOMAIN } from "../kuma.config";
import blogs from "../.contents/blogs.json";

function generateSiteMap(blogs: Blog[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${DOMAIN}</loc>
     </url>
     <url>
       <loc>${DOMAIN}/about</loc>
     </url>
     <url>
       <loc>${DOMAIN}/experiences</loc>
     </url>
     <url>
       <loc>${DOMAIN}/privacy</loc>
     </url>
     ${blogs
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${DOMAIN}/blogs/${id}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

(async function () {
  const sitemap = generateSiteMap(blogs);
  fs.writeFileSync("./public/sitemap.xml", sitemap);
})();
