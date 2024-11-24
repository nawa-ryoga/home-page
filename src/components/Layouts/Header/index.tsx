import HeaderText from "./Text";
import HeaderTextContainer from "./Text/Container";
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
						<HeaderTextContainer>
							<HeaderText>
								Software engineer during reboot, and Japanese company employee
							</HeaderText>
						</HeaderTextContainer>
					) : (
						<HeaderTextContainer>
							<a href="/">
								<HeaderText>NAARY.ME /</HeaderText>
							</a>
						</HeaderTextContainer>
					)}
				</div>
				<div className={`${firstIn} flex justify-center items-center`}>
					<h1 className="font-bold text-[42px] sm:text-[96px]">{title}</h1>
				</div>
			</header>
		</>
	);
}
