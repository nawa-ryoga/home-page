import HeaderText from "./Text";
import { defaultInnerLinkStyle } from "../../../styles/default.css";
import { firstIn } from "../../../styles/animation.css";

type Props = {
	isTopPage?: boolean;
	title: string;
};

export default function Header({ isTopPage = false, title }: Props) {
	return (
		<>
			<header className={`${firstIn} flex flex-col justify-center`}>
				<div className="max-w-[1200px]flex justify-center items-center">
					{isTopPage ? (
						<HeaderText
							content={
								"Software engineer during reboot, and Japanese company employee"
							}
						/>
					) : (
						<a href="/" className={defaultInnerLinkStyle}>
							<HeaderText content={"NAARY.ME /"} />
						</a>
					)}
				</div>
				<div className={`${firstIn} flex justify-center items-center`}>
					<h1 className="font-bold text-[42px] sm:text-[96px]">{title}</h1>
				</div>
			</header>
		</>
	);
}
