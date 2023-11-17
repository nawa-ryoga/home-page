import { Text } from "@kuma-ui/core";
import theme from "../../../../../../../kuma.config";

type Props = {
  children: React.ReactNode;
};

export default function Heading2({ children }: Props) {
  return (
    <Text
      as={"h2"}
      marginBottom={["1.5rem", "2.8rem"]}
      marginTop={["5rem", "6rem"]}
      fontSize={[theme.fontSizes["fontSizes.xl"], theme.fontSizes["fontSizes.2xl"]]}
    >
      {children}
    </Text>
  );
}
