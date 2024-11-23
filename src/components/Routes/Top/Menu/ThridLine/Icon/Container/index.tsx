type Props = {
	href: string;
	imageUrl: string;
};

export default function IconContainer({ imageUrl, href }: Props) {
	return (
		<li className="aspect-square flex items-center justify-center rounded-xl">
			<a
				href={href}
				target="_blank"
				rel="noopener nofollow noreferrer"
				className="w-[56px] sm:w-[84px] aspect-square"
			>
				<img className="w-full h-full invert" src={imageUrl} alt="" />
			</a>
		</li>
	);
}
