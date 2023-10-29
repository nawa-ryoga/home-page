import { Box } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function NonStyleListItem({ children }: Props) {
  return <Box as={"li"}>{children}</Box>;
}
