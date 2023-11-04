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
      color={"colors.font.darken.2"}
      paddingBottom={[8, 12]}
    >
      {children}
    </Flex>
  );
}
