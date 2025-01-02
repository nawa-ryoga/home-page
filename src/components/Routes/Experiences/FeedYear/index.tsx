type Props = {
	year: number;
    children: React.ReactNode;
};

export default function FeedYear({ year, children }: Props) {
	return (
		<section className="py-16 sm:py-32">
			<h2 className="w-full backdrop-blur-[16px] sticky top-0 z-[9999]">
				<span className="flex justify-center items-center py-6">
					<span className="m-0 text-4xl font-bold leading-none tracking-tight">
						{year}
					</span>
				</span>
			</h2>
			<ul className="flex flex-col gap-12 max-w-[670px] mx-auto">{children}</ul>
		</section>
	);
}
