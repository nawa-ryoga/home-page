import { useEffect, useState } from "react";
import { Box, Text } from "@kuma-ui/core";
import ExternalLink from "@/components/Commons/ExternalLink";


type Props = {
  href: string;
};

export default function LinkCard({ href }: Props) {
  const [data, setData] = useState<{
    title: "タイトル";
    content: "本文";
  }>();

  useEffect(() => {
    setTimeout(() => {
      setData((prev) => {
        return {
          title: "タイトル",
          content: "本文",
        };
      });
    }, 3000);
  }, [href]);

  return (
    <Box
      width={"100%"}
      height={"60px"}
      bg={"black"}
      borderRadius={"4px"}
    >
      {data && 
        <>
          <Text>{data.title}</Text>
          <Text>{data.content}</Text>
        </>
      }
    </Box>
  );
}
