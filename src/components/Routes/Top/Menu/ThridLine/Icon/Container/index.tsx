type Props = {
	href: string;
	imageUrl: string;
	alt: string;
};

export default function IconContainer({ imageUrl, href, alt }: Props) {
	return (
		<li className="aspect-square flex items-center justify-center">
			<a
				href={href}
				target="_blank"
				rel="noopener nofollow noreferrer"
				className="w-[48px] sm:w-[84px] aspect-square"
			>
				<span className="flex items-center aspect-square rounded-xl justify-center bg-text-darken-1">
					<img className="w-[80%] h-[80%]" src={imageUrl} alt={alt} />
				</span>
			</a>
		</li>
	);
}
