import type { ReactNode } from "react";
import { Box } from "@kuma-ui/core";

type Props = {
  children: ReactNode;
  griRowNumber: number;
};

export default function GridItem({ griRowNumber, children }: Props) {
  return <Box gridColumn={`span ${griRowNumber} / auto`}>{children}</Box>;
}
