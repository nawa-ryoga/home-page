import type { ReactNode } from "react";
import { secondIn } from "../../styles/animation.css";

export const HEADER_HEIGHT = 84;
export const HEADER_TITLE_HEIGHT = { BASE: 58, MD: 96 };

const defaultMinHeight = `min-h-[calc(100vh - ${HEADER_HEIGHT + HEADER_TITLE_HEIGHT.BASE}px)]`;
const largeMinHeight = `sm:min-h-[calc(100vh - ${HEADER_HEIGHT + HEADER_TITLE_HEIGHT.MD}px)]`;

type Props = {
    children: ReactNode;
}

export default function Main({ children }: Props) {
	return (
		<main
			className={`${secondIn} px-4 sm:px-10 pt-6 sm:pt-10 pb-10 max-w-[786px] mx-auto ${defaultMinHeight} ${largeMinHeight}`}
		>
			{children}
		</main>
	);
}
