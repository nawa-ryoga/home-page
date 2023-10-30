import type { ReactNode } from "react";
import { Box, Grid } from "@kuma-ui/core";

type Props = {
  children: ReactNode;
};

export default function IconGridContainer({ children }: Props) {
  return (
    <Box
      marginTop={"16px"}
      paddingX={"16px"}
    >
      <Grid
        gridTemplateColumns={"repeat(3, 1fr)"}
        gridTemplateRows="repeat(1fr)"
        marginX={"auto"}
        width={["100%", "524px", "768px"]}
        height={"auto"}
      >
        {children}
      </Grid>
    </Box>
  );
}
