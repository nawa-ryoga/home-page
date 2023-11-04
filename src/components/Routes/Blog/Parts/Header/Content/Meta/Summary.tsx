import { Box } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function Summary({ children }: Props) {
  return (
    <Box
      as={"span"}
      display={"block"}
      fontSize={"fontSizes.sm"}
      color={"colors.font.darken.2"}
      textAlign={"right"}
      letterSpacing={"0.05rem"}
      marginBottom={["18px", "30px"]}
    >
      {children}
    </Box>
  );
}
