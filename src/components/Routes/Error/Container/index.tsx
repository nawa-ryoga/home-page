type Props = {
	children: React.ReactNode;
};

export default function ErrorPageContainer({ children }: Props) {
	return (
		<div className="flex flex-col justify-center items-center pt-20 w-full max-w-[960px] mx-auto">
			{children}
		</div>
	);
}
