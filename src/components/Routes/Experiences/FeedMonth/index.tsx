type Props = {
	month: number;
	children: React.ReactNode;
};
export default function FeedMonth({ children, month }: Props) {
	return (
		<li className="px-8">
			<div className="relative pt-10 ml-[-0.7rem]">
				<span className="flex justify-center items-center aspect-square w-[35px]">
					<h3 className="m-0 text-2xl font-sans font-bold">{month}</h3>
				</span>
				<hr className="w-[28px] h-[1px] bg-gray-800 transform rotate-[135deg] absolute top-[70px] left-[18px]" />
			</div>
			{children}
		</li>
	);
}
