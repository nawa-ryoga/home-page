import { Flex } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function FeedItemTitle({ children, href }: Props) {
  return (
    <Flex
      as="a"
      href={href}
      target="_blank"
      rel="noopener nofollow noreferrer"
      width={"100%"}
      height={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      color={"colors.font.darken.1"}
      _visited={{ color: "colors.font.darken.2" }}
      wordBreak={"break-all"}
      paddingBottom={[4, 18]}
    >
      {children}
    </Flex>
  );
}
