import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@kuma-ui/core";
import ExternalLink from "@/components/Commons/ExternalLink";
import theme from "../../../../../../../kuma.config";
import { linkCardFadeIn } from "@/styles/animation.css";

type Props = {
  href: string;
};

export type MetaData = {
  url: string;
  description: string;
  title: string;
  image: string;
};

export default function LinkCard({ href }: Props) {
  const [data, setData] = useState<MetaData>();

  useEffect(() => {
    async function fetchData(): Promise<MetaData> {
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
      borderRadius={"16px"}
      marginBottom={["2rem", "3rem"]}
      bg={"colors.background.darken.1"}
      letterSpacing={"0.05em"}
      wordBreak={"break-all"}
      textAlign={"justify"}
    >
      {data && (
        <>
          <Box
            className={linkCardFadeIn}
            textAlign={"center"}
            paddingX={[8, 16]}
          >
            <ExternalLink
              href={href}
              color={theme.colors["colors.font.darken.1"]}
            >
              <Text
                fontSize={["0.5rem", theme.fontSizes["fontSizes.xs"]]}
                paddingTop={[8, 16]}
              >
                <em>{data.url}</em>
              </Text>
            </ExternalLink>
            <ExternalLink href={href}>
              <Text
                color={"colors.font.darken.1"}
                fontSize={[theme.fontSizes["fontSizes.lg"], theme.fontSizes["fontSizes.md"]]}
                fontWeight={"bold"}
                paddingBottom={["0.3rem", "0.6rem"]}
              >
                {data.title}
              </Text>
            </ExternalLink>
            <ExternalLink href={href}>
              <Text
                fontSize={["0.5rem", theme.fontSizes["fontSizes.xs"]]}
                color={"colors.font.darken.2"}
                paddingBottom={[8, 16]}
                overflow={"hidden"}
                textOverflow={"ellipsis"}
                whiteSpace={"nowrap"}
              >
                {data.description}
              </Text>
            </ExternalLink>
          </Box>

          {data.image && (
            <Flex
              flex={1}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              bgSize={"cover"}
              style={{
                backgroundImage: `linear-gradient(rgba(3, 8, 28, 0.8), rgba(3, 8, 28, 0.8)), url(${data.image})`,
              }}
            >
              <Flex
                as={"a"}
                flex={1}
                className={linkCardFadeIn}
                href={href}
                target="_blank"
                rel="noopener nofollow noreferrer"
                width={"100%"}
                height={"auto"}
                bgPosition={"center"}
                bgRepeat={"no-repeat"}
                bgSize={"contain"}
                style={{ backgroundImage: `url(${data.image})` }}
              />
            </Flex>
          )}
        </>
      )}
    </Flex>
  );
}
