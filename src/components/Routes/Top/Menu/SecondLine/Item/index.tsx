import type { MicroCMSImage } from "microcms-js-sdk";

type Props = {
	image: MicroCMSImage;
	title: string;
};

export default function SecondLineItem({ image, title }: Props) {
	return (
		<div className="relative">
			<a href="/experiences">
				<img
					className="w-full object-cover rounded-xl"
					src={`${image.url}?w=480`}
					alt=""
				/>
			</a>
			<div className="absolute z-20 flex justify-end items-end w-full h-full inset-0 rounded-xl">
				<div className="pr-4 pb-20 font-bold text-3xl sm:text-4xl md:text-6xl">
					{title}
				</div>
			</div>
		</div>
	);
}
