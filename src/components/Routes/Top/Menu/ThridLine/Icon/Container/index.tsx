type Props = {
	href: string;
	imageUrl: string;
};

export default function IconContainer({ imageUrl, href }: Props) {
	return (
		<li className="aspect-square flex items-center justify-center rounded-xl bg-background-lighten-1">
			<a
				href={href}
				target="_blank"
				rel="noopener nofollow noreferrer"
				className="w-[48px] sm:w-[84px] aspect-square bg-text-darken-1 rounded-lg flex items-center justify-center box-border"
			>
				<img className="w-[70%] h-[70%] object-contain" src={imageUrl} alt="" />
			</a>
		</li>
	);
}
