import { Box } from "@kuma-ui/core";
import theme from "../../../../../../../../../kuma.config";

type Props = {
  children: React.ReactNode;
};

export default function PublishedDate({ children }: Props) {
  return (
    <Box
      as={"span"}
      fontSize={[theme.fontSizes["fontSizes.sm"], theme.fontSizes["fontSizes.base"]]}
      color={"colors.font.darken.1"}
      letterSpacing={"0.1rem"}
    >
      {children}
    </Box>
  );
}
