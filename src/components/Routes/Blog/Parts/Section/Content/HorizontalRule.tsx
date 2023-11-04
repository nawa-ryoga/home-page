import { Box } from "@kuma-ui/core";
import theme from "../../../../../../../kuma.config";

export default function HorizontalRule() {
  return (
    <Box
      as={"hr"}
      marginTop={"4rem"}
      marginBottom={"4rem"}
      borderStyle={"none"}
      borderTop={`solid 1px ${theme.colors["colors.font.darken.2"]}`}
    />
  );
}
