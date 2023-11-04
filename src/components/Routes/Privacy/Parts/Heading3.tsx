import { Text } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function Heading3({ children }: Props) {
  return (
    <Text
      as={"h3"}
      fontSize="xl"
      fontWeight="700"
      marginBottom="1.3rem"
      _nth-first-of-type={{
        marginTop: "2.5rem",
      }}
      textAlign={"center"}
    >
      {children}
    </Text>
  );
}
