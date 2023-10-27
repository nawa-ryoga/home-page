import type { ReactNode } from "react";
import { Box } from "@kuma-ui/core";

type Props = { children: ReactNode };

export default function Main({ children }: Props) {
  return (
    <Box
      as={"main"}
      paddingX={16}
      paddingTop={[24, 40]}
      paddingBottom={40}
      maxWidth={"786px"}
      marginX={"auto"}
      overflow={["hidden", "visible"]}
    >
      {children}
    </Box>
  );
}
