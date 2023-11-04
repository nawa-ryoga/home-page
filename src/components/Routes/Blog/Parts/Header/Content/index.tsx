import { VStack } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function HeaderContent({ children }: Props) {
  return (
    <VStack
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
    >
      {children}
    </VStack>
  );
}
