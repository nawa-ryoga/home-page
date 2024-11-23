type Props = {
	content: string;
};

export default function HeaderText({ content }: Props) {
	return (
		<div className="pt-16 pb-2">
			<p className="text-sm font-bold text-center">{content}</p>
		</div>
	);
}
