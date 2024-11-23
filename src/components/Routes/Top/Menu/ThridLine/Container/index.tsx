import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export default function SecondLineContainer({ children }: Props) {
	return (
		<ul className="grid grid-cols-3 gap-6">
			{children}
		</ul>
	);
}
