import { Box } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function MetaContainer({ children }: Props) {
  return (
    <Box
      as={"span"}
      marginX={["-16px", "-32px"]}
      marginTop={["-42px", "-78px"]}
      paddingX={["16px", 0]}
    >
      {children}
    </Box>
  );
}
