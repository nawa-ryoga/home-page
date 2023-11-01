import Meta from "@/components/Meta";
import Header from "@/components/Layouts/Header";
import Main from "@/components/Layouts/Main";
import type { About } from "../../../../lib/client";
import { VStack, Image, Text, Box, Grid } from "@kuma-ui/core";
import parse, { Element, domToReact, attributesToProps } from "html-react-parser";
import type { HTMLReactParserOptions, DOMNode } from "html-react-parser";
import theme from "../../../../kuma.config";

type Props = {
  about: About;
};

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.type === "tag") {
      const props = attributesToProps(domNode.attribs);

      if (domNode.attribs && domNode.name === "p") {
        return (
          <Text
            as={"p"}
            marginBottom={"1.5rem"}
            color={"colors.font.darken.1"}
            fontSize={theme.fontSizes["fontSizes.sm"]}
            {...props}
          >
            {domToReact(domNode.children as DOMNode[], options)}
          </Text>
        );
      }
    }
  },
};

function age(birth_year: number) {
  const year = new Date().getFullYear();
  return year - birth_year;
}

export default function Page({ about }: Props) {
  console.log(about.contents);
  return (
    <>
      <Meta
        title={"About"}
        path={"about"}
        content={"about NAARY.ME"}
      />
      <Header title="About" />

      <Main>
        <VStack
          width={"100%"}
          height={"auto"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingTop={"40px"}
        >
          <Image
            alt={""}
            src={`${about.icon.url}?w=150`}
            width={128}
            height={128}
            borderRadius={"9999px"}
            marginBottom={"16px"}
          />

          <Text
            as={"h2"}
            textAlign={"center"}
            letterSpacing={"0.05rem"}
            marginBottom={"20px"}
          >
            {about.name}
          </Text>

          {/* 戻り値に生年月日の情報があったら、何年何月何日生まれの今年何歳、という表記を出す */}
          {about.birth_year && (
            <Text
              textAlign={"center"}
              marginBottom={"40px"}
            >
              Web writer. <br /> {age(about.birth_year)} years old this year.
            </Text>
          )}

          <Box
            as={"section"}
            maxWidth={"580px"}
          >
            <Box paddingX={[16, 32]}>{parse(about.summery, options)}</Box>

            {about.contents.map((c) => (
              <Box key={c.title}>
                <Text
                  as={"h3"}
                  marginTop={"4.8rem"}
                  marginBottom={"1.5rem"}
                  textAlign={"center"}
                >
                  {c.title}
                </Text>
                {c.images && (
                  <Grid
                    gridTemplateColumns={["repeat(3, 1fr)", "repeat(4, 1fr)"]}
                    gridTemplateRows="repeat(1fr)"
                    gap={"16px"}
                    marginBottom={"16px"}
                  >
                    {c.images.map((i, index) => (
                      <Image
                        key={i.url}
                        display={[index === 3 ? "none" : "inline", "inline"]}
                        aspectRatio={"1"}
                        gridColumn={"span 1 / auto"}
                        maxWidth={"100%"}
                        height={"auto"}
                        src={`${i.url}?w=200`}
                        objectFit={"cover"}
                        borderRadius={"10px"}
                      />
                    ))}
                  </Grid>
                )}
                {c.content && <Box paddingX={[16, 32]}>{parse(c.content, options)}</Box>}
              </Box>
            ))}
          </Box>
        </VStack>
      </Main>
    </>
  );
}
