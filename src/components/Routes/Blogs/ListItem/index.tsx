import type { Blog } from "../../../../../lib/cms-client";
import { formatDate } from "../../../../../lib/day-js";
import PublishedDate from "../Date";

type Props = {
	blog: Blog;
};

export default function ListItem({ blog }: Props) {
	return (
		<div className="flex flex-col justify-center items-center relative">
			<span className="flex justify-center items-center max-w-[180px] sm:max-w-[280px]">
				<a href={`/blogs/${blog.id}`}>
					<img
						src={`${blog.eyecatch.url}`}
						src-set={`${blog.eyecatch.url}?w=180 180w, ${blog.eyecatch.url}?w=280 280w`}
						className="max-w-full h-auto min-h-[180px] md:min-h-[240px] aspect-square"
						alt=""
					/>
				</a>
			</span>
			<span className="mx-[-16px] md:mx-[-32px] mt-[-42px] md:mt-[-78px] px-[16px] sm:px-0">
				<a href={`/blogs/${blog.id}`}>
					<h2 className="font-bold text-center text-md md:text-xl tracking-wide mb-2 sm:mb-4">
						{blog.title}
					</h2>
				</a>

				{blog.publishedAt && (
					<PublishedDate
						publishedDate={formatDate(blog.publishedAt, "MMM D")}
						publishedYear={formatDate(blog.publishedAt, "YYYY")}
					/>
				)}
			</span>
		</div>
	);
}
