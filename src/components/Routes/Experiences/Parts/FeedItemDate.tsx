import { Flex } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function FeedItemDate({ children, href }: Props) {
  return (
    <Flex
      as="a"
      href={href}
      target="_blank"
      rel="noopener nofollow noreferrer"
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      paddingBottom={"40px"}
      paddingX={"40px"}
      color={"colors.font.darken.2"}
    >
      {children}
    </Flex>
  );
}
