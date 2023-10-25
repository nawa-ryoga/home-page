import type { ReactNode } from "react";
import { Box, Grid } from "@kuma-ui/core";

type Props = {
  children: ReactNode;
};

export default function GridContainer({ children }: Props) {
  return (
    <Box
      paddingTop={["48px", "80px"]}
      paddingX={"16px"}
    >
      <Grid
        gridTemplateColumns={"repeat(3, 1fr)"}
        gridTemplateRows="repeat(1fr)"
        gap={16}
        marginX={"auto"}
        width={["100%", "524px", "768px"]}
        height={"auto"}
      >
        {children}
      </Grid>
    </Box>
  );
}
