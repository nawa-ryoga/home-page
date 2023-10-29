import Image from "next/image";
import { Text, VStack, Box } from "@kuma-ui/core";

type Props = {
  feedLink: string;
  feedTitle: string;
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

export default function FeedItem({ feedLink, feedTitle }: Props) {
  return (
    <VStack
      alignItems={"center"}
      padding={"40px"}
      gap={24}
      backgroundColor={"colors.background.darken.1"}
      borderRadius={14}
    >
      <Box
        aspectRatio={"1 / 1"}
        width={60}
        height={60}
      >
        <Image
          src={switchIconImage(feedLink)}
          alt=""
          width={60}
          height={60}
        />
      </Box>
      <Text
        as={"h3"}
        margin={0}
        fontSize={"fontSizes.md"}
      >
        {feedTitle}
      </Text>
    </VStack>
  );
}
