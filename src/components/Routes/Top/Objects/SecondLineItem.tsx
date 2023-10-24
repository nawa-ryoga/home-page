import { Box, Text } from "@kuma-ui/core";
import theme from "../../../../../kuma.config";

type Props = {
  link: string;
  text: string;
  imageUrl: string;
};

export default function SecondLineItem({ link, text, imageUrl }: Props) {
  return (
    <Box
      as={"a"}
      href={`/${link}`}
      height={["360px", "620px"]}
      borderRadius={10}
      padding={16}
      display={"block"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgImage={[`url('${imageUrl}?w=320')`, `url('${imageUrl}?w=720')`]}
    >
      <Text
        as={"h2"}
        fontWeight={700}
        fontSize={[theme.fontSizes["fontSizes.3xl"], theme.fontSizes["fontSizes.5xl"]]}
        color={"colors.font.default"}
        textAlign={"end"}
      >
        {text}
      </Text>
    </Box>
  );
}
