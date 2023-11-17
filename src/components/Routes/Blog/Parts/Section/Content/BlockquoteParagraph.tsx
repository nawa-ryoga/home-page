import { Text } from "@kuma-ui/core";
import theme from "../../../../../../../kuma.config";

type Props = {
  children: React.ReactNode;
  alignRight?: boolean;
};

export default function BlockquoteParagraph({ children, alignRight }: Props) {
  return (
    <Text
      as={"p"}
      color={"colors.font.darken.2"}
      textAlign={alignRight ? "right" : "justify"}
      lineHeight={"1rem"}
      marginBottom={["1.4rem", "2rem"]}
      _last-child={{
        marginBottom: 0,
      }}
      fontSize={[theme.fontSizes["fontSizes.xs"], theme.fontSizes["fontSizes.sm"]]}
    >
      {children}
    </Text>
  );
}
