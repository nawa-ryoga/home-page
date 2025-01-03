type Props = {
	children: React.ReactNode;
};

export default function ContentContainer({ children }: Props) {
	return (
		<div className="flex flex-col items-center w-full px-4 pb-40">
			<div className="border-t-[1px] border-text-darken-2 max-w-[620px] pt-20 sm:pt-40">
				{children}
			</div>
		</div>
	);
}
