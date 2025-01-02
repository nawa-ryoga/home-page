import type { MicroCMSImage } from "microcms-js-sdk";

type Props = {
	image: MicroCMSImage;
	href: string;
	title: string;
};

export default function FirstLineItem({ image, href, title }: Props) {
	return (
		<li className="relative">
			<img
				className="object-cover h-auto max-h-[8rem] w-full rounded-xl z-10"
				src={`${image.url}?w=360`}
				alt=""
				fetchPriority="high"
			/>
			<a
				href={`/${href}`}
				className="absolute z-20 w-full h-full inset-0 bg-background-default bg-opacity-50 rounded-xl"
			>
				<span className="flex items-center h-full px-4 font-bold tracking-[0.3rem]">
					{title}
				</span>
			</a>
		</li>
	);
}
