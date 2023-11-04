import { VStack } from "@kuma-ui/core";
import NonStyleList from "@/components/Commons/NoStyleList";

type Props = {
  children: React.ReactNode;
};

export default function FeedListContainer({ children }: Props) {
  return (
    <VStack paddingX={[8, 16]}>
      <NonStyleList>{children}</NonStyleList>
    </VStack>
  );
}
