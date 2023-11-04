import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@kuma-ui/core";
import ExternalLink from "@/components/Commons/ExternalLink";
import theme from "../../../../../../../kuma.config";

type Props = {
  href: string;
};

type Og = {
  url: string;
  description: string;
  title: string;
  image: string;
};

export default function LinkCard({ href }: Props) {
  const [data, setData] = useState<Og>();

  useEffect(() => {
    async function fetchData(): Promise<Og> {
      const data = await fetch(`${window.location.origin}/api/og?url=${href}`);
      return data.json();
    }
    fetchData().then((ogData) => {
      setData(ogData);
    });
  }, [href]);

  return (
    <Flex
      as={"figure"}
      width={"100%"}
      flexDirection={"column"}
      minHeight={["180px", "250px"]}
      borderRadius={"8px"}
      marginBottom={["2rem", "3rem"]}
      bg={"colors.background.darken.1"}
      letterSpacing={"0.05em"}
      paddingTop={[8, 16]}
      wordBreak={"break-all"}
      textAlign={"justify"}
    >
      {data && (
        <>
          <Box
            textAlign={"center"}
            paddingX={[8, 16]}
          >
            <ExternalLink href={href}>
              <Text fontSize={["0.5rem", theme.fontSizes["fontSizes.xs"]]}>
                <em>{data.url}</em>
              </Text>
            </ExternalLink>
            <ExternalLink href={href}>
              <Text
                color={"colors.font.darken.1"}
                fontSize={[theme.fontSizes["fontSizes.md"], theme.fontSizes["fontSizes.xl"]]}
                fontWeight={"bold"}
                marginBottom={["0.6rem", "1rem"]}
              >
                {data.title}
              </Text>
            </ExternalLink>
            <ExternalLink href={href}>
              <Text
                fontSize={[theme.fontSizes["fontSizes.xs"], theme.fontSizes["fontSizes.sm"]]}
                color={"colors.font.darken.2"}
              >
                {data.description}
              </Text>
            </ExternalLink>
          </Box>

          {data.image && (
            <Flex
              as={"a"}
              flex={1}
              href={href}
              target="_blank"
              rel="noopener nofollow noreferrer"
              width={"100%"}
              height={"100%"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              bgSize={"contain"}
              style={{ backgroundImage: `url(${data.image})` }}
            />
          )}
        </>
      )}
    </Flex>
  );
}
