type Props = {
	children: React.ReactNode;
};

export default function HeaderTextContainer({ children }: Props) {
	return <div className="pt-16 pb-2 px-2 flex justify-center">{children}</div>;
}
