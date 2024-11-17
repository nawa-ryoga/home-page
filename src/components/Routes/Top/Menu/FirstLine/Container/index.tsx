import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export default function FirstLineContainer({ children }: Props) {
	return <ul className="grid grid-cols-2 gap-6">{children}</ul>;
}
