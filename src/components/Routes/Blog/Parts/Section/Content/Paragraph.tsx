import { Text } from "@kuma-ui/core";
import theme from "../../../../../../../kuma.config";

type Props = {
  children: React.ReactNode;
};

export default function Paragraph({ children }: Props) {
  return (
    <Text
      as={"p"}
      color={"colors.font.darken.1"}
      textAlign={"justify"}
      lineHeight={"1.7rem"}
      marginBottom={["2.5rem", "3rem"]}
      fontSize={[theme.fontSizes["fontSizes.sm"], theme.fontSizes["fontSizes.base"]]}
    >
      {children}
    </Text>
  );
}
