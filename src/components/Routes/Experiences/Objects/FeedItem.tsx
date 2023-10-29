import { Text, VStack, Image } from "@kuma-ui/core";
import FeedItemIcon from "../Parts/FeedItemIcon";
import FeedItemTitle from "../Parts/FeedItemTitle";
import FeedItemDate from "../Parts/FeedItemDate";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import theme from "../../../../../kuma.config";

dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  feedLink: string;
  feedTitle: string;
  feedDate: string;
};

function switchIconImage(feedLink: string) {
  const url = new URL(feedLink);
  switch (url.hostname) {
    case "note.com":
      return "/assets/image/social/note.svg";
    case "zenn.dev":
      return "/assets/image/social/zenn.svg";
    case "naary.me":
      return "/logo.svg";
    default:
      return "/logo.svg";
  }
}

function publishedDate(feedDate: string) {
  return dayjs.utc(feedDate).tz("Asia/Tokyo").format("MMM D, YYYY");
}

export default function FeedItem({ feedLink, feedTitle, feedDate }: Props) {
  return (
    <VStack
      backgroundColor={"colors.background.darken.1"}
      borderRadius={14}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <FeedItemIcon href={feedLink}>
        <Image
          src={switchIconImage(feedLink)}
          alt=""
          width={60}
          height={60}
        />
      </FeedItemIcon>

      <FeedItemTitle href={feedLink}>
        <Text
          as={"h3"}
          margin={0}
          fontSize={[theme.fontSizes["fontSizes.sm"], theme.fontSizes["fontSizes.md"]]}
          paddingX={["12px", "60px"]}
        >
          {feedTitle}
        </Text>
      </FeedItemTitle>

      <FeedItemDate href={feedLink}>
        <Text
          fontSize={[theme.fontSizes["fontSizes.xs"], theme.fontSizes["fontSizes.sm"]]}
          paddingX={["12px", "60px"]}
          margin={0}
        >
          {publishedDate(feedDate)}
        </Text>
      </FeedItemDate>
    </VStack>
  );
}
