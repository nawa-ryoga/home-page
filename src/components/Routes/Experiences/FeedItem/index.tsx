import type { FeedItem as Feed } from "../../../../lib/rss-reader";
import type { SocialIcon } from "../../../../lib/cms-client";
import { formatDate } from "../../../../lib/day-js";

type Props = {
	feed: Feed;
	favicon: SocialIcon[];
};

export default function FeedItem({ feed, favicon }: Props) {
	return (
		<li className="flex flex-col items-center gap-2 p-4 bg-background-darken-1 rounded-2xl">
			<a
				href={feed.link}
				target="_blank"
				rel="noopener nofollow noreferrer"
				className="w-[4rem] flex items-center justify-center bg-text-darken-1 aspect-square p-2 rounded-xl"
			>
				<img
					className="w-full h-auto"
					src={favicon.find((f) => feed.link.includes(f.name))?.logo.url || "/icon.svg"}
					alt=""
					width={60}
					height={60}
				/>
			</a>
			<span className="flex flex-col items-center">
				<a
					href={feed.link}
					target="_blank"
					rel="noopener nofollow noreferrer"
					className="text-text-darken-1 visited:text-text-darken-2 font-bold"
				>
					{feed.title}
				</a>
				{feed.isoDate && (
					<a
						href={feed.link}
						target="_blank"
						rel="noopener nofollow noreferrer"
						className="text-text-darken-1 visited:text-text-darken-2 text-sm"
					>
						{formatDate(feed.isoDate, "MMM D, YYYY")}
					</a>
				)}
			</span>
		</li>
	);
}
