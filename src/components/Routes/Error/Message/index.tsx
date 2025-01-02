type Props = {
	children: React.ReactNode;
};

export default function ErrorMessage({ children }: Props) {
	return <div className="flex flex-col align-center pt-10">{children}</div>;
}
