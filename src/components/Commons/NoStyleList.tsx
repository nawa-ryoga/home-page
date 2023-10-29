import { Box } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function NonStyleList({ children }: Props) {
  return (
    <Box
      as={"ul"}
      listStyleType={"none"}
      paddingLeft={0}
    >
      {children}
    </Box>
  );
}
