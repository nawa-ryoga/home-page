import HeaderText from "./Text";
import { defaultInnerLinkStyle } from "../../../styles/default.css";
import { firstIn } from "../../../styles/animation.css";

export const HEADER_HEIGHT = 84;
export const HEADER_TITLE_HEIGHT = { BASE: 58, MD: 96 };

const defaultMinHeight = `min-h-[calc(100vh - ${HEADER_HEIGHT + HEADER_TITLE_HEIGHT.BASE}px)]`;
const largeMinHeight = `sm:min-h-[calc(100vh - ${HEADER_HEIGHT + HEADER_TITLE_HEIGHT.MD}px)]`;

type Props = {
	isTopPage?: boolean;
	title: string;
};

export default function Header({ isTopPage = false, title }: Props) {
	return (
		<>
			<header
				className={`${firstIn} h-[${HEADER_HEIGHT}px] overflow-visible flex flex-col justify-center`}
			>
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
					<h1
						className={`${defaultMinHeight} ${largeMinHeight} font-bold text-[42px] sm:text-[96px]`}
					>
						{title}
					</h1>
				</div>
			</header>
		</>
	);
}
