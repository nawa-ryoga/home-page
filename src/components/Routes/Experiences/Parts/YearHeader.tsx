import { Box, Flex, Text } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function YearHeader({ children }: Props) {
  return (
    <Box
      as={"header"}
      width={"100%"}
      backdropFilter={"blur(16px)"}
      position={"sticky"}
      top={0}
      zIndex={9999}
    >
      <Flex
        as={"span"}
        height={"120px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text
          as={"h2"}
          margin={0}
          color={"colors.font.darken.1"}
          fontSize={"fontSizes.4xl"}
          fontWeight={"bold"}
          lineHeight={1}
          letterSpacing={"0rem"}
          marginRight={"-0.4rem"}
        >
          {children}
        </Text>
      </Flex>
    </Box>
  );
}
