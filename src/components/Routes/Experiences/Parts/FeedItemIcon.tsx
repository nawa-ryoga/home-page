import { Flex } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function FeedItemIcon({ children, href }: Props) {
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
      paddingTop={[8, 12]}
      paddingBottom={[4, 8]}
    >
      {children}
    </Flex>
  );
}
