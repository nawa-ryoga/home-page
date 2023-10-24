import { Box, Text } from "@kuma-ui/core";

type Props = {
  link: string;
  text: string;
  imageUrl: string;
  imageSize: {
    small: number;
    large: number;
  }
};

export default function FirstLineItem({ link, text, imageUrl, imageSize }: Props) {
  return (
    <Box
      as={"a"}
      href={`/${link}`}
      height={["86px", "128px"]}
      borderRadius={10}
      padding={16}
      display={"flex"}
      alignItems={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgImage={[
        `url('${imageUrl}?w=${imageSize.small}')`,
        `url('${imageUrl}?w=${imageSize.large}')`,
      ]}
    >
      <Text
        as={"h2"}
        fontWeight={700}
        fontSize={"fontSizes.xl"}
        color={"colors.font.default"}
      >
        {text}
      </Text>
    </Box>
  );
}
