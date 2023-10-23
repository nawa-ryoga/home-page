import { Flex, Text } from "@kuma-ui/core";
import Link from "next/link";
import HeaderText from "./parts/HeaderText";

type Props = {
  isTopPage: boolean;
  title: string;
};

export default function Header({ isTopPage, title }: Props) {
  return (
    <>
      <Flex
        as={"header"}
        height={"84px"}
        overflow={"visible"}
        justifyContent={"center"}
        alignItems={"flex-end"}
      >
        <Flex
          maxWidth={"1200px"}
          marginX={"auto"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingX={[9, 0]}
        >
          {isTopPage && <HeaderText content={""} />}
          {!isTopPage && (
            <Link href="/">
              <HeaderText content={"NAARY.ME /"} />
            </Link>
          )}
        </Flex>
      </Flex>

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        letterSpacing={"0.05rem"}
        paddingX={4}
        marginTop={[6, 10]}
        marginBottom={[8, 14]}
      >
        <Text
          as={"h1"}
          fontWeight={"700"}
          fontSize={["64px", "96px"]}
          lineHeight={["48px", "52px"]}
          zIndex={"999"}
        >
          {title}
        </Text>
      </Flex>
    </>
  );
}
