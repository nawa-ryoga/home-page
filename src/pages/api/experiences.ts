import dayjs from "dayjs";
import { getTopMenuImages, getAboutContent } from "../../lib/cms-client";
import { getRssTimeline } from "../../lib/rss-reader";
import type { FeedItem as Item } from "../../lib/rss-reader";
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
			},
		},
	);
};

export type GroupedPerYear = {
	year: number;
	months: {
		month: number;
		items: Item[];
	}[];
};

/**
 * アイテムを年と月でグループ化する
 * @param items - フィードアイテムの配列
 * @returns 年月単位でネストされたデータ構造
 */
const groupItems = (items: Item[]): GroupedPerYear[] => {
	const yearGroups = items.reduce<Record<number, Record<number, Item[]>>>(
		(acc, item) => {
			const year = dayjs(item.isoDate).year();
			const month = dayjs(item.isoDate).month() + 1; // 月は0ベースなので1を加算

			// 年が存在しない場合は初期化
			if (!acc[year]) {
				acc[year] = {};
			}

			// 月が存在しない場合は初期化
			if (!acc[year][month]) {
				acc[year][month] = [];
			}

			// アイテムを追加
			acc[year][month].push(item);

			return acc;
		},
		{},
	);

	return Object.entries(yearGroups)
		.sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)) // 年を降順にソート
		.map(([year, months]) => ({
			year: Number(year),
			months: Object.entries(months)
				.sort(([monthA], [monthB]) => Number(monthB) - Number(monthA)) // 月も降順にソート
				.map(([month, items]) => ({
					month: Number(month),
					items,
				})),
		}));
};
