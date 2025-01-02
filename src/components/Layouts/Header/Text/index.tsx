type Props = {
	children: React.ReactNode;
};

export default function HeaderText({ children }: Props) {
	return <p className="text-sm font-bold text-center">{children}</p>;
}
