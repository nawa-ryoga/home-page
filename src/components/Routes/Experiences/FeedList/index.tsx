type Props = {
	children: React.ReactNode;
};

export default function FeedList({ children }: Props) {
	return (
		<ul className="flex flex-col gap-8">
			{children}
		</ul>
	);
}
