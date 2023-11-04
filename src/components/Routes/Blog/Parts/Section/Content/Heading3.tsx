import { Text } from "@kuma-ui/core";
import theme from "../../../../../../../kuma.config";

type Props = {
  children: React.ReactNode;
};

export default function Heading3({ children }: Props) {
  return (
    <Text
      as={"h3"}
      color={"colors.font.darken.1"}
      marginBottom={["0.8rem", "1.5rem"]}
      marginTop={["2rem", "2.5rem"]}
      fontSize={[theme.fontSizes["fontSizes.lg"], theme.fontSizes["fontSizes.xl"]]}
    >
      {children}
    </Text>
  );
}
