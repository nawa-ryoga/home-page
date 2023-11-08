import { VStack } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function ErrorPageHeader({ children }: Props) {
  return (
    <VStack
      as="span"
      justifyItems={"center"}
      alignItems={"center"}
      gap={8}
      paddingTop={[16, 32]}
    >
      {children}
    </VStack>
  );
}
