import { Box,Flex, Text } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function YearHeader({ children }: Props) {
  return (
    <Box as={"aside"}>
      <Flex
        as={"span"}
        justifyContent={"center"}
        paddingX={"8px"}
      >
        <Text
          as={"h2"}
          margin={0}
          color={"colors.font.darken.1"}
          fontSize={"fontSizes.2xl"}
          fontWeight={"bold"}
          letterSpacing={"0.3rem"}
          marginRight={"-0.4rem"}
          marginBottom={"-0.5rem"}
        >
          {children}
        </Text>
      </Flex>
    </Box>
  );
}
