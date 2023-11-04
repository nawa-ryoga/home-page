import { Box } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function SectionContainer({ children }: Props) {
  return (
    <Box
      as={"section"}
      paddingTop={60}
      paddingX={[8, 0]}
      maxWidth={600}
      marginX={"auto"}
      letterSpacing={"0.03em"}
      lineHeight={"190%"}
      borderTop={"1px solid"}
    >
      {children}
    </Box>
  );
}
