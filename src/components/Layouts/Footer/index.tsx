import Link from "next/link";
import { VStack, HStack, Text } from "@kuma-ui/core";
import dayjs from "dayjs";
import { linkStyle } from "./style.css";

const today = dayjs();

export default function Footer() {
  return (
    <VStack
      as={"footer"}
      textAlign={"center"}
      fontSize={"fontSizes.xs"}
      color={"colors.font.darken.2"}
      letterSpacing={"0.08rem"}
      fontWeight={"700"}
      paddingY={[40, 80]}
    >
      <Text>© {today.year()} naary</Text>
      <HStack
        justifyContent={"center"}
        gap={4}
      >
        <Text>
          <Link
            className={linkStyle}
            href="/privacy"
          >
            Privacy
          </Link>
        </Text>
        <Text>|</Text>
        <Text>nawaryoga@gmail.com</Text>
      </HStack>
    </VStack>
  );
}
