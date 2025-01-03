import rss from "@astrojs/rss";
import { getBlogList } from "../lib/cms-client";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
	const blogs = await getBlogList();

	return rss({
		title: "NAARY.ME",
		description: "Personal website of naary",
		site: context.site?.origin ?? "https://naary.me",
		items: blogs.map((blog) => ({
			title: blog.title,
			description: blog.summary,
			link: `/blog/${blog.id}`,
			pubDate: new Date(blog.createdAt),
		})),
	});
}
