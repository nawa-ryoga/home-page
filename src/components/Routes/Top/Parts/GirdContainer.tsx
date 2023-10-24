import type { ReactNode } from "react";
import { Grid } from "@kuma-ui/core";

type Props = {
  children: ReactNode;
};

export default function GridContainer({ children }: Props) {
  return (
    <Grid
      gridTemplateColumns={"repeat(3, 1fr)"}
      gridTemplateRows="repeat(1fr)"
      gap={16}
      marginX={"auto"}
      width={["100%", "774px"]}
      height={"auto"}
      paddingTop={["24px", "40px"]}
    >
      {children}
    </Grid>
  );
}
