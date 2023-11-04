import { VStack } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function HeaderContainer({ children }: Props) {
  return (
    <VStack
      as={"header"}
      width={["100%", "440px"]}
      paddingY={48}
      paddingBottom={["40px", "48px"]}
      marginX={"auto"}
      gap={48}
    >
      {children}
    </VStack>
  );
}
