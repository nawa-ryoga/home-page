import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export default function GridContainer({ children }: Props) {
	return (
		<nav className="pt-12 sm:pt-20 px-4">
			<ul className="grid grid-raws-3 gap-6 mx-auto w-full sm:w-[524px] lg:w-[768px]">
				{children}
			</ul>
		</nav>
	);
}
