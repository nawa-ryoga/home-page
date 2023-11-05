import { Flex, Text } from "@kuma-ui/core";
import Link from "next/link";
import HeaderText from "./parts/HeaderText";
import { HEADER_HEIGHT, HEADER_TITLE_HEIGHT } from "../../../../kuma.config";
import { defaultInnerLinkStyle } from "@/styles/global.css";
import { firstIn } from "@/styles/animation.css";

type Props = {
  isTopPage?: boolean;
  title: string;
};

export default function Header({ isTopPage = false, title }: Props) {
  return (
    <>
      <Flex
        as={"header"}
        className={firstIn}
        height={HEADER_HEIGHT}
        overflow={"visible"}
        justifyContent={"center"}
        alignItems={"flex-end"}
        paddingBottom={"1.2rem"}
      >
        <Flex
          maxWidth={"1200px"}
          marginX={"auto"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingX={[9, 0]}
          paddingBottom={"8px"}
        >
          {isTopPage && (
            <HeaderText
              content={"Web writer, amateur software engineer, and Japanese company employee"}
            />
          )}
          {!isTopPage && (
            <Link
              className={defaultInnerLinkStyle}
              href="/"
            >
              <HeaderText content={"NAARY.ME /"} />
            </Link>
          )}
        </Flex>
      </Flex>

      <Flex
        className={firstIn}
        height={[HEADER_TITLE_HEIGHT.BASE, HEADER_TITLE_HEIGHT.MD]}
        justifyContent={"center"}
        alignItems={"center"}
        letterSpacing={"0.05rem"}
        paddingX={"16px"}
      >
        <Text
          as={"h1"}
          fontWeight={"700"}
          fontSize={["42px", "96px"]}
          lineHeight={["48px", "52px"]}
          zIndex={"999"}
        >
          {title}
        </Text>
      </Flex>
    </>
  );
}
