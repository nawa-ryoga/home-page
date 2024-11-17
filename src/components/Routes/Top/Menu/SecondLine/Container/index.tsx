import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export default function SecondLineContainer({ children }: Props) {
	return (
		<li className="aspect-square w-full">
			{children}
		</li>
	);
}
