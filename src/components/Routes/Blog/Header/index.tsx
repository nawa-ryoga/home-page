type Props = {
	imageSrc: string;
	title: string;
	summery: string;
	publishedAtYear: string;
	publishedAtDate: string;
};

export default function HeaderContainer({
	imageSrc,
	title,
	summery,
	publishedAtYear,
	publishedAtDate,
}: Props) {
	return (
		<header className="w-full max-w-[440px] py-12 pb-[40px] md:pb-12 mx-auto gap-12">
			<div className="flex flex-col justify-center items-center relative">
				<span className="max-w-[240px] md:max-w-[320px] flex justify-center items-center">
					<img
						src={imageSrc}
						srcSet={`${imageSrc}?w=180 180w, ${imageSrc}?w=240 240w`}
						alt=""
						className="max-w-full min-h-[180px] sm:min-h-[240px] h-auto aspect-square"
					/>
				</span>
				<span className="mx-[-16px] md:mx-[-32px] mt-[-42px] md:mt-[-78px] px-[16px] md:px-0">
					<h1 className="text-2xl">{title}</h1>
					<span className="block text-sm text-right tracking-[0.05rem] mb-[18px] md:mb-[30px] text-text-darken-1">
						{summery}
					</span>
					<div className="flex flex-col justify-center items-center gap-[4px] md:gap-[8px]">
						<span className="text-sm  text-text-darken-1 tracking-[0.1rem]">
							{publishedAtYear}
						</span>
						<span className="text-sm  text-text-darken-1 tracking-[0.05rem]">
							{publishedAtDate}
						</span>
					</div>
				</span>
			</div>
		</header>
	);
}
