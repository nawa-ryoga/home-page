import { VStack } from "@kuma-ui/core";
import NonStyleList from "@/components/Commons/NoStyleList";

type Props = {
  children: React.ReactNode;
};

export default function SectionContainer({ children }: Props) {
  return (
    <VStack
      as={"section"}
      gridColumn={`span 4 / auto`}
      gap={"62px"}
      maxWidth={["348px","580px"]}
      width={"100%"}
      marginX={"auto"}
    >
      <NonStyleList>{children}</NonStyleList>
    </VStack>
  );
}
