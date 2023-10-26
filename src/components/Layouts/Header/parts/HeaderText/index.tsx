import { Text } from "@kuma-ui/core";

type Props = {
  content: string;
};

export default function HeaderText({ content }: Props) {
  return (
    <Text
      fontSize={"fontSizes.xs"}
      letterSpacing={"0.08rem"}
      fontWeight={"700"}
      textAlign={"center"}
      color={"colors.font.darken.1"}
    >
      {content}
    </Text>
  );
}
