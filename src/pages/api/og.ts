import { NextApiRequest, NextApiResponse } from "next";
import he from "he";

export const runtime = "experimental-edge";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.url) {
    return res.status(400).json({ error: "Invalid url" });
  }

  const url = new URL(req.url);
  const params = url.searchParams;
  const href = params.get("url");

  try {
    const response = await fetch(href as string);
    const html = await response.text();
    const metaData = getMetaData(html);

    return new Response(JSON.stringify(metaData, null, 2), {
      status: 200,
      headers: { "content-type": "application/json;charset=UTF-8" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "An error occurred while fetching the URL." }, null, 2),
      {
        status: 500,
        headers: { "content-type": "application/json;charset=UTF-8" },
      },
    );
  }
}

function getMetaData(html: string) {
  const metaData: { [key: string]: string } = {};
  const metaTags = html.match(/<meta[^>]*>/g);

  if (metaTags) {
    metaTags.forEach((metaTag) => {
      const propertyMatch = metaTag.match(/property="og:([^"]*)"/);
      const contentMatch = metaTag.match(/content="([^"]*)"/);

      if (propertyMatch && contentMatch) {
        const property = propertyMatch[1];
        const content = he.decode(contentMatch[1]);

        metaData[property] = content;
      }
    });
  }

  return metaData;
}
