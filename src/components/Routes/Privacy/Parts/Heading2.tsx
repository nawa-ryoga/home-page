import { Text } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function Heading2({ children }: Props) {
  return (
    <Text
      as={"h2"}
      fontSize="2xl"
      fontWeight="700"
      marginBottom="1.5rem"
      _nth-first-of-type={{
        marginTop: "3rem",
      }}
      textAlign={"center"}
    >
      {children}
    </Text>
  );
}
