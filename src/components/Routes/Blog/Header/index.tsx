import type { MicroCMSImage } from "microcms-js-sdk";
type Props = {
	image: MicroCMSImage;
	title: string;
	summery: string;
	publishedAtYear: string;
	publishedAtDate: string;
};

export default function HeaderContainer({
	image,
	title,
	summery,
	publishedAtYear,
	publishedAtDate,
}: Props) {
	return (
		<header className="py-12 pb-[40px] md:pb-12 gap-12">
			<div className="flex flex-col justify-center items-center relative">
				<div className="max-w-[320px] md:max-w-[480px] flex justify-center items-center">
					<img
						src={image.url}
						srcSet={`${image.url}?w=320 320w, ${image.url}?w=480 480w`}
						alt=""
						className="max-w-full min-h-[320px] sm:min-h-[480px] h-auto aspect-square"
						width={image.width}
						height={image.height}
					/>
				</div>
				<div className="mx-[-16px] md:mx-[-32px] mt-[-42px] md:mt-[-78px] px-[16px] md:px-0">
					<h1 className="text-4xl font-bold text-center mb-2">{title}</h1>
					<div className="text-xl text-right tracking-[0.05rem] mb-[18px] md:mb-[30px] text-text-darken-1">
						{summery}
					</div>
					<div className="flex flex-col justify-center items-center gap-2 md:gap-[8px] font-sans">
						<div className="text-sm  text-text-darken-1 tracking-[0.1rem]">
							{publishedAtYear}
						</div>
						<div className="text-sm  text-text-darken-1 tracking-[0.05rem]">
							{publishedAtDate}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
