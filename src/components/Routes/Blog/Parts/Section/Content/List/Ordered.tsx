import { Box } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function OrderedList({ children }: Props) {
  return (
    <Box
      as={"ol"}
      color={"colors.font.darken.1"}
      marginBottom={["0.8rem", "1.5rem"]}
      marginTop={"1.5rem"}
      _first-child={{
        marginY: 0,
      }}
      listStylePosition={"outside"}
      listStyleType={"decimal"}
    >
      {children}
    </Box>
  );
}
