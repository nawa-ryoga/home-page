import { Box } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function YearContainer({ children }: Props) {
  return (
    <Box marginBottom={["4rem", "8rem"]}>
      <Box height={"auto"}>{children}</Box>
    </Box>
  );
}
