import { VStack } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function ErrorPageContainer({ children }: Props) {
  return (
    <VStack
      justifyContent={"center"}
      alignItems={"center"}
    >
      <VStack
        justifyContent={"center"}
        alignItems={"center"}
        gap={[24, 48]}
      >
        {children}
      </VStack>
    </VStack>
  );
}
