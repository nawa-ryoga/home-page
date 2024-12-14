type Props = {
    children: React.ReactNode
}
export default function ArticleContainer({ children }: Props) {
	return <article className="w-full max-w-[720px] mx-auto">{children}</article>;
}