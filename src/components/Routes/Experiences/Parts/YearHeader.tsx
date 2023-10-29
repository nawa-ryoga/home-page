import { Box, HStack, Flex, Text } from "@kuma-ui/core";
import theme from "../../../../../kuma.config";

type Props = {
  children: React.ReactNode;
};

export default function YearHeader({ children }: Props) {
  return (
    <Box
      as={"aside"}
      position={"relative"}
    >
      <HStack
        alignItems={"flex-end"}
        justifyContent={"flex-start"}
      >
        <Box
          width={48}
          height={"100%"}
          borderBottom={`1px solid ${theme.colors["colors.font.darken.2"]}`}
        ></Box>
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
            fontWeight={700}
            letterSpacing={"0.3rem"}
            marginRight={"-0.4rem"}
            marginBottom={"-0.5rem"}
          >
            {children}
          </Text>
        </Flex>
        <Box
          width={24}
          height={"100%"}
          borderBottom={`1px solid ${theme.colors["colors.font.darken.2"]}`}
        ></Box>
      </HStack>
    </Box>
  );
}
