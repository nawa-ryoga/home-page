type Props = {
	content: string;
};

export default function HeaderText({ content }: Props) {
	return (
		<p className="text-xs font-bold text-center text-gray-700">{content}</p>
	);
}
