import { getTopMenuImages, getAboutContent } from "../../lib/cms-client";
import { getRssTimeline, groupItems } from "../../lib/rss-reader";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
	const about = await getAboutContent();
	const feedItemList = await getRssTimeline(about.rss);
	const { socials } = await getTopMenuImages();

	// 年月単位でネストされたデータ構造に変換
	const groupedData = groupItems(feedItemList);

	return new Response(
		JSON.stringify({
			rss: groupedData,
			socials,
		}),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json",
				"Cache-Control": `public, max-age=86400, stale-while-revalidate=86400`,
			},
		},
	);
};
