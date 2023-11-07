import { useState, useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { VStack, Box } from "@kuma-ui/core";
import theme from "../../../../../kuma.config";

dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  publishedAt: string
}
export default function Date({ publishedAt }: Props) {
  const [publishedDate, setPublishedDate] = useState("");
  const [publishedYear, setPublishedYear] = useState("");

  useEffect(() => {
    if (publishedAt) {
      setPublishedDate(dayjs.utc(publishedAt).tz("Asia/Tokyo").format("MMM D"));
      setPublishedYear(dayjs.utc(publishedAt).tz("Asia/Tokyo").format("YYYY"));
    }
  }, [publishedAt]);

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