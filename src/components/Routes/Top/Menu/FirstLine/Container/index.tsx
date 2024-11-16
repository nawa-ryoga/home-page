import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export default function FirstLineContainer({ children }: Props) {
	return <li className="grid grid-cols-2">{children}</li>;
}
