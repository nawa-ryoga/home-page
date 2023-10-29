import { Box } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function MonthContainer({ children }: Props) {
  return (
    <Box
      as={"li"}
      paddingX={"24px"}
    >
      {children}
    </Box>
  );
}
