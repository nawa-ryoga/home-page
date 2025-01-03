import type { OgObject } from "../../../../../lib/og-scraper";
type Props = {
	result: OgObject;
};

const getDomain = (url: string) => {
	try {
		const parsedUrl = new URL(url);
		return `${parsedUrl.protocol}//${parsedUrl.hostname}`;
	} catch (error) {
		console.error("Invalid URL:", error);
		return "";
	}
};

export default function OgLink({ result }: Props) {
	return (
		<figure className="my-16 w-full flex flex-col rounded-2xl bg-background-darken-1 text-justify break-all">
			<>
				<figcaption className="px-8 md:px-16 py-4 flex flex-col text-center gap-2">
					<a
						href={result.ogUrl}
						target="_blank"
						rel="noopener nofollow noreferrer"
						className="text-text-darken-2 text-[0.5rem] md:text-xs w-full"
					>
						<em>{result.ogUrl}</em>
					</a>
					<a
						href={result.ogUrl}
						target="_blank"
						rel="noopener nofollow noreferrer"
						className="text-text-darken-1 text-lg font-bold no-underline w-full"
					>
						{result.ogTitle}
					</a>
					<a
						href={result.ogUrl}
						target="_blank"
						rel="noopener nofollow noreferrer"
						className="text-text-darken-2 overflow-hidden text-ellipsis whitespace-nowrap no-underline w-full"
					>
						{result.ogDescription}
					</a>
				</figcaption>

				{result.ogImage && (
					<a
						href={result.ogUrl}
						target="_blank"
						rel="noopener nofollow noreferrer"
						className="rounded-b-2xl"
					>
						<img
							src={result.ogImage[0].url}
							alt=""
							className="w-full h-auto rounded-b-2xl"
							width={result.ogImage[0].width}
							height={result.ogImage[0].height}
						/>
					</a>
				)}

				{!result.ogImage && result.ogUrl && (
					<a
						href={result.ogUrl}
						target="_blank"
						rel="noopener nofollow noreferrer"
						className="w-full flex justify-center items-center"
					>
						<span className="aspect-square w-10 pb-2">
							<img
								src={`${getDomain(result.ogUrl)}://${result.favicon}`}
								alt=""
							/>
						</span>
					</a>
				)}
			</>
		</figure>
	);
}
