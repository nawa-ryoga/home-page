import { Box } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function Blockquote({ children }: Props) {
  return (
    <Box
      as={"blockquote"}
      marginBottom={["1.5rem", "2.8rem"]}
      background={"colors.background.darken.1"}
      paddingX={16}
      paddingY={8}
    >
      {children}
    </Box>
  );
}
