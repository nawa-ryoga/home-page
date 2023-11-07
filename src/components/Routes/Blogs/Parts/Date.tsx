import { VStack, Box } from "@kuma-ui/core";
import theme from "../../../../../kuma.config";
import usePublishedDate from "@/hooks/usePublishedAt";

type Props = {
  publishedAt: string
}
export default function Date({ publishedAt }: Props) {
  const { publishedDate, publishedYear } = usePublishedDate(publishedAt);

  return (
    <VStack
      justifyContent={"center"}
      alignItems={"center"}
      gap={[4, 8]}
    >
      <Box
        as={"span"}
        fontSize={[theme.fontSizes["fontSizes.sm"], theme.fontSizes["fontSizes.base"]]}
        color={"colors.font.darken.1"}
        letterSpacing={"0.1rem"}
      >
        {publishedDate}
      </Box>
      <Box
        as={"span"}
        fontSize={[theme.fontSizes["fontSizes.xs"], theme.fontSizes["fontSizes.sm"]]}
        color={"colors.font.darken.1"}
        letterSpacing={"0.05rem"}
      >
        {publishedYear}
      </Box>
    </VStack>
  );
}