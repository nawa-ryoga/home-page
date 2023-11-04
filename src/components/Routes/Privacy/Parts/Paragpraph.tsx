import { Text } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function Paragraph({ children }: Props) {
  return (
    <Text
      as={"p"}
      color={"colors.font.darken.1"}
      textAlign="justify"
      wordBreak="break-all"
      lineHeight={"1.7rem"}
      marginBottom="3rem"
      _last-child={{
        marginBottom: 0,
      }}
    >
      {children}
    </Text>
  );
}
