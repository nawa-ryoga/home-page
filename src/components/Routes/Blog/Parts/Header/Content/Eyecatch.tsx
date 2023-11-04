import { Flex } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function Eyecatch({ children }: Props) {
  return (
    <Flex
      as={"span"}
      maxWidth={["240px", "320px"]}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {children}
    </Flex>
  );
}
