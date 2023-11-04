import { Text } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function Figcaption({ children }: Props) {
  return (
    <Text
      as={"figcaption"}
      fontSize={"fontSizes.xs"}
      color={"colors.font.darken.2"}
      textAlign={"center"}
      maxWidth={"580px"}
      paddingY={"8px"}
    >
      {children}
    </Text>
  );
}
