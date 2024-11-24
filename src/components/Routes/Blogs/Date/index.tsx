type Props = {
	publishedYear: string;
	publishedDate: string;
};

export default function PublishedDate({ publishedYear, publishedDate }: Props) {
	return (
		<div className="flex flex-col items-center justify-center gap-1 md:gap-2">
			<span className="text-sm md:text-base text-gray-700 tracking-wide">
				{publishedDate}
			</span>
			<span className="text-xs md:text-sm text-gray-700 tracking-tight">
				{publishedYear}
			</span>
		</div>
	);
}
