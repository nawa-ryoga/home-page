import { useState, useEffect } from "react";
import Link from "next/link";
import { VStack, HStack, Text } from "@kuma-ui/core";
import { linkStyle } from "./style.css";
import { getDate } from "../../../../lib/dayjs";

export default function Footer() {
  const [year, setYear] = useState<number>();
  useEffect(() => {
    const year = getDate().year();
    setYear(year);
  }, []);

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
      {year && <Text>© {year} naary</Text>}
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
