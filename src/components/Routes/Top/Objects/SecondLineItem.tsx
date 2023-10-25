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
      height={["360px", "504px", "620px"]}
      borderRadius={10}
      paddingX={[12, 16]}
      display={"block"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={["right", "bottom"]}
      bgImage={[`url('${imageUrl}?w=320')`, `url('${imageUrl}?w=720')`]}
    >
      <Text
        as={"h2"}
        fontWeight={700}
        fontSize={[
          theme.fontSizes["fontSizes.2xl"],
          theme.fontSizes["fontSizes.3xl"],
          theme.fontSizes["fontSizes.5xl"],
        ]}
        color={"colors.font.default"}
        textAlign={"end"}
        letterSpacing={[2.2, 3.2]}
        paddingTop={["260px", "380px", "460px"]}
        margin={0}
      >
        {text}
      </Text>
    </Box>
  );
}
