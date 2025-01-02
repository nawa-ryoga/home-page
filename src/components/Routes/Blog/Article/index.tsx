type Props = {
    children: React.ReactNode
}
export default function ArticleContainer({ children }: Props) {
	return (
		<article className="w-full max-w-[680px] mx-auto font-sans">
			{children}
		</article>
	);
}