import { useState, useEffect } from "react";
import { Text, Image } from "@kuma-ui/core";
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

export default function FeedItem({ feedLink, feedTitle, feedDate }: Props) {
  const [publishedAt, setPublishedAt] = useState("");

  useEffect(() => {
    setPublishedAt(dayjs.utc(feedDate).tz("Asia/Tokyo").format("MMM D, YYYY"));
  }, [feedDate]);

  return (
    <>
      <FeedItemIcon href={feedLink}>
        <Image
          src={switchIconImage(feedLink)}
          alt=""
          width={[48, 60]}
          height={[48, 60]}
        />
      </FeedItemIcon>

      <FeedItemTitle href={feedLink}>
        <Text
          as={"h3"}
          margin={0}
          fontSize={[theme.fontSizes["fontSizes.xs"], theme.fontSizes["fontSizes.sm"]]}
          paddingX={["12px", "60px"]}
        >
          {feedTitle}
        </Text>
      </FeedItemTitle>

      <FeedItemDate href={feedLink}>
        <Text
          fontSize={["0.6rem", theme.fontSizes["fontSizes.xs"]]}
          paddingX={["12px", "60px"]}
          margin={0}
        >
          {publishedAt}
        </Text>
      </FeedItemDate>
    </>
  );
}
