import { Text } from "@kuma-ui/core";

type Props = {
  content: string;
};

export default function HeaderText({ content }: Props) {
  return (
    <Text
      fontSize={["xs", "xs"]}
      letterSpacing={"0.08rem"}
      fontWeight={"700"}
      textAlign={"center"}
    >
      {content}
    </Text>
  );
}
