import type { ReactNode } from "react";
import { Box } from "@kuma-ui/core";
import { HEADER_HEIGHT, HEADER_TITLE_HEIGHT } from "../../../kuma.config";

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
      minHeight={[
        `calc(100vh - ${HEADER_HEIGHT + HEADER_TITLE_HEIGHT.BASE}px)`,
        `calc(100vh - ${HEADER_HEIGHT + HEADER_TITLE_HEIGHT.MD}px)`,
      ]}
    >
      {children}
    </Box>
  );
}
