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
      paddingTop={["16px", "40px"]}
      paddingBottom={[10, 24]}
    >
      {children}
    </Flex>
  );
}
