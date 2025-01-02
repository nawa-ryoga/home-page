type Props = {
	href: string;
	imageUrl: string;
	alt: string;
};

export default function IconContainer({ imageUrl, href, alt }: Props) {
	return (
		<li className="aspect-square flex items-center justify-center rounded-xl bg-background-lighten-1">
			<a
				href={href}
				target="_blank"
				rel="noopener nofollow noreferrer"
				className="w-[48px] sm:w-[84px] aspect-square"
			>
				<img className="" src={imageUrl} alt={alt} />
			</a>
		</li>
	);
}
