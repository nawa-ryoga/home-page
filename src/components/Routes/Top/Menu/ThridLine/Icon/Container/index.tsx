import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export default function IconContainer({ children }: Props) {
	return (
		<li className="aspect-square">
			<div>{children}</div>
		</li>
	);
}
