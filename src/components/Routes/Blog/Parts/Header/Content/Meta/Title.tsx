import { Text } from "@kuma-ui/core";
import theme from "../../../../../../../../kuma.config";

type Props = {
  children: React.ReactNode;
};

export default function Title({ children }: Props) {
  return (
    <Text
      as={"h1"}
      fontSize={[theme.fontSizes["fontSizes.2xl"], theme.fontSizes["fontSizes.3xl"]]}
      letterSpacing={"0.05rem"}
      textAlign={"center"}
      marginBottom={["12px", "16px"]}
    >
      {children}
    </Text>
  );
}
