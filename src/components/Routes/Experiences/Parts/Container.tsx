import { Box } from "@kuma-ui/core";
import NonStyleList from "@/components/Commons/NoStyleList";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <NonStyleList>
      <Box paddingTop={["60px","120px"]}>{children}</Box>
    </NonStyleList>
  );
}
