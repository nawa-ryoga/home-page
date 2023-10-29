import { Box } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function FeedItemContainer({ children }: Props) {
  return (
    <Box
      as={"li"}
      marginBottom={"24px"}
    >
      {children}
    </Box>
  );
}
