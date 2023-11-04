import { Box } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function Figure({ children }: Props) {
  return (
    <Box
      as={"figure"}
      marginX={0}
      marginBottom={"2rem"}
    >
      {children}
    </Box>
  );
}
