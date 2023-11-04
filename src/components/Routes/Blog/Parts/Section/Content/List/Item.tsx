import { Text } from "@kuma-ui/core";
import theme from "../../../../../../../../kuma.config";

type Props = {
  children: React.ReactNode;
};

export default function ListItem({ children }: Props) {
  return (
    <Text
      as={"li"}
      color={"colors.font.darken.1"}
      marginX={"0.8rem"}
      wordBreak={"break-all"}
      fontSize={[theme.fontSizes["fontSizes.sm"], theme.fontSizes["fontSizes.base"]]}
    >
      {children}
    </Text>
  );
}
