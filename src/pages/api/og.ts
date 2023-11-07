import { NextApiRequest, NextApiResponse } from "next";
import type { KVNamespace } from "@cloudflare/workers-types";
import he from "he";

export const runtime = "experimental-edge";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.url) {
    return res.status(400).json({ error: "Invalid url" });
  }

  const url = new URL(req.url);
  const params = url.searchParams;
  const href = params.get("url");

  if (!href) {
    return res.status(400).json({ error: "Invalid url - missing query param" });
  }

  const { KV_NAMESPACE } = process.env as unknown as {
    KV_NAMESPACE: KVNamespace;
  };

  if (KV_NAMESPACE) {

  }

  try {
    const cachedData = await KV_NAMESPACE.get(href);

    // キャッシュが存在し、最後の更新から24時間以内であればキャッシュを返す
    if (cachedData) {
      return new Response(JSON.stringify(cachedData, null, 2), {
        status: 200,
        headers: { "content-type": "application/json;charset=UTF-8" },
      });
    }

    const response = await fetch(href as string);
    const html = await response.text();
    const metaData = getMetaData(html);

    const res = {
      timestamp: new Date().toString(),
      data: JSON.stringify(metaData, null, 2)
    }

    KV_NAMESPACE.put(href, JSON.stringify(res, null, 2));

    return new Response(JSON.stringify(res, null, 2), {
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
