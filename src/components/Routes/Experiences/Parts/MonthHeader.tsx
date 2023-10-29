import { Box, Flex, Text } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function MonthHeader({ children }: Props) {
  return (
    <Flex
      position={"relative"}
      paddingTop={"40px"}
      marginLeft={"-0.7rem"}
    >
      <Flex
        as={"span"}
        justifyContent={"center"}
        alignItems={"center"}
        aspectRatio={"1 / 1"}
        width={"35px"}
      >
        <Text
          as={"h3"}
          margin={0}
          fontSize={"fontSizes.xl"}
        >
          {children}
        </Text>
      </Flex>
      <Box
        as="hr"
        width={"28px"}
        height={"1px"}
        color={"colors.font.darken.1"}
        backgroundColor={"colors.font.darken.1"}
        transform={"rotate(135deg)"}
        position={"absolute"}
        top={70}
        left={18}
      ></Box>
    </Flex>
  );
}
