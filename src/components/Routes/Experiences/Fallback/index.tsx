type Props = {
	children: React.ReactNode;
};
export default function Fallback({ children }: Props) {
	return (
		<div className="secondIn opacity-0 pt-20 flex justify-center max-w-[560px] mx-auto">
			{children}
		</div>
	);
}
