import type { MicroCMSImage } from "microcms-js-sdk";

type Props = {
	image: MicroCMSImage;
	href: string
	title: string;
};

export default function FirstLineItem({ image, href, title }: Props) {
	return (
		<li className="relative">
			<a href={`/${href}`}>
				<img
					className="object-cover max-h-[8rem] w-full rounded-xl z-10"
					src={`${image.url}?w=360`}
					alt=""
				/>
			</a>
			<div className="absolute z-20 w-full h-full inset-0 bg-background-default bg-opacity-50 rounded-xl">
				<div className="flex items-center h-full px-4 font-bold tracking-[0.3rem]">
					{title}
				</div>
			</div>
		</li>
	);
}
