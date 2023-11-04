import { VStack } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function PublishedAtContainer({ children }: Props) {
  return (
    <VStack
      justifyContent={"center"}
      alignItems={"center"}
      gap={[4, 8]}
    >
      {children}
    </VStack>
  );
}
