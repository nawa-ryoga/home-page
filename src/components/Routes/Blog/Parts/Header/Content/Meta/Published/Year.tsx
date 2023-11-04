import { Box } from "@kuma-ui/core";
import theme from "../../../../../../../../../kuma.config";

type Props = {
  children: React.ReactNode;
};

export default function PublishedYear({ children }: Props) {
  return (
    <Box
      as={"span"}
      fontSize={[theme.fontSizes["fontSizes.xs"], theme.fontSizes["fontSizes.sm"]]}
      color={"colors.font.darken.1"}
      letterSpacing={"0.05rem"}
    >
      {children}
    </Box>
  );
}
