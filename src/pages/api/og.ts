import { NextApiRequest, NextApiResponse } from "next";
import { KVNamespace } from "@cloudflare/workers-types";
import he from "he";
import dayjs from "dayjs";
import type { OgResponse } from "@/components/Routes/Blog/Parts/Section/Content/LinkCard";

export const runtime = "experimental-edge";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.url) {
    return res.status(400).json({ error: "Invalid url" });
  }

  const { NAARY_ME_KV } = process.env as unknown as {
    NAARY_ME_KV: KVNamespace;
  };

  const url = new URL(req.url);
  const params = url.searchParams;
  const href = params.get("url");

  if (!href) {
    return res.status(400).json({ error: "Invalid url - missing query param" });
  }

  try {
    const hitData = await NAARY_ME_KV.get(href);
    if (hitData) {
      const hd = JSON.parse(hitData) as OgResponse;
      const savedAt = dayjs(hd.timestamp);

      if (dayjs().diff(savedAt, "hour") < 24) {
        return new Response(JSON.stringify(hd, null, 2), {
          status: 200,
          headers: { "content-type": "application/json;charset=UTF-8" },
        });
      }
    }

    const response = await fetch(href as string);
    const html = await response.text();
    const metaData = getMetaData(html);

    const value = {
      timestamp: dayjs().toString,
      data: metaData,
    };

    await NAARY_ME_KV.put(href, JSON.stringify(value));

    return new Response(JSON.stringify(value, null, 2), {
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
