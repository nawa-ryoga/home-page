import { Box, VStack } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function FeedItemContainer({ children }: Props) {
  return (
    <Box
      as={"li"}
      marginBottom={["12px", "24px"]}
    >
      <VStack
        backgroundColor={"colors.background.darken.1"}
        borderRadius={14}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {children}
      </VStack>
    </Box>
  );
}
