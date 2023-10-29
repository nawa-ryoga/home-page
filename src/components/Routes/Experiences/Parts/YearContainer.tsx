import { Box } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function YearContainer({ children }: Props) {
  return (
    <Box marginBottom={["4rem", "8rem"]}>
      <Box
        marginX={"auto"}
        width={["100%", "680px"]}
        height={"auto"}
      >
        {children}
      </Box>
    </Box>
  );
}