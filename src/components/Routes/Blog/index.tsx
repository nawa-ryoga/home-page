import Meta from "@/components/Meta";
import Header from "@/components/Layouts/Header";
import Main from "@/components/Layouts/Main";
import type { Blog } from "../../../../lib/client";
import { Text, Link, Image, VStack, Flex, Box } from "@kuma-ui/core";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import theme from "../../../../kuma.config";
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser";
import type { DomElement } from "htmlparser2";
import "./styles.css";
import { sectionStyle } from "./styles.css";
import Paragraph from "./Parts/Paragraph";
import LinkCard from "./Parts/linkCard";

dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  blog: Blog;
};

function publishedDate(publishedAt: string) {
  return dayjs.utc(publishedAt).tz("Asia/Tokyo").format("MMM D");
}

function publishedYear(publishedAt: string) {
  return dayjs.utc(publishedAt).tz("Asia/Tokyo").format("YYYY");
}

function transform(node: DomElement, index: number) {
  if (node.type === "tag") {
    if (node.name === "div" && node.attribs && node.attribs["class"].includes("iframely-embed")) {
      const href = node.children?.[0]?.children?.[0]?.attribs?.["href"];
      if (href) {
        return (
          <LinkCard
            key={index}
            href={href}
          />
        );
      }
    }
    if (node.name === "p" && node.children) {
      return (
        <Paragraph key={index}>
          {node.children.map((child, i) => {
            if (child.name === "a" && child.children && child.attribs) {
              return (
                <Link
                  key={i}
                  href={child.attribs["href"]}
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                  color={"colors.font.darken.2"}
                  textDecoration={"underline"}
                >
                  {child.children.map((child, i) => convertNodeToElement(child, i, transform))}
                </Link>
              );
            } else {
              return convertNodeToElement(child, i, transform);
            }
          })}
        </Paragraph>
      );
    }
    if (node.name === "h2" && node.children) {
      return (
        <Text
          key={index}
          as={node.name}
          marginBottom={["1.5rem", "3.5rem"]}
          fontSize={[theme.fontSizes["fontSizes.xl"], theme.fontSizes["fontSizes.2xl"]]}
        >
          {node.children.map((child, i) => convertNodeToElement(child, i, transform))}
        </Text>
      );
    }
    if (node.name === "h3" && node.children) {
      return (
        <Text
          key={index}
          as={node.name}
          color={"colors.font.darken.1"}
          marginBottom={["0.8rem", "1.5rem"]}
          marginTop={["2rem", "2.5rem"]}
          fontSize={[theme.fontSizes["fontSizes.lg"], theme.fontSizes["fontSizes.xl"]]}
        >
          {node.children.map((child, i) => convertNodeToElement(child, i, transform))}
        </Text>
      );
    }
    if ((node.name === "ul" || node.name === "ol") && node.children) {
      return (
        <Box
          key={index}
          as={node.name}
          color={"colors.font.darken.1"}
          marginBottom={["0.8rem", "1.5rem"]}
          marginTop={"1.5rem"}
          _first-child={{
            marginY: 0,
          }}
          listStylePosition={"outside"}
          listStyleType={"decimal"}
        >
          {node.children.map((child, i) => {
            if (child.name === "li" && child.children) {
              return (
                <Text
                  key={i}
                  as={child.name}
                  color={"colors.font.darken.1"}
                  marginX={"0.8rem"}
                  wordBreak={"break-all"}
                  fontSize={[theme.fontSizes["fontSizes.sm"], theme.fontSizes["fontSizes.base"]]}
                >
                  {child.children.map((child, i) => convertNodeToElement(child, i, transform))}
                </Text>
              );
            } else {
              return convertNodeToElement(child, i, transform);
            }
          })}
        </Box>
      );
    }
    if (node.name === "hr") {
      return (
        <Box
          key={index}
          as={node.name}
          marginTop={"4rem"}
          marginBottom={"4rem"}
          borderStyle={"none"}
          borderTop={`solid 1px ${theme.colors["colors.font.darken.2"]}`}
        />
      );
    }
    if (node.name === "figure" && node.children) {
      return (
        <Box
          key={index}
          as={"figure"}
          marginX={0}
          marginBottom={"2rem"}
        >
          {node.children.map((child, i) => {
            if (child.name === "img" && child.attribs) {
              const src = child.attribs["src"];
              return (
                <img
                  key={i}
                  src={src}
                  srcSet={`${src}?w=320 320w, ${src}?w=670 670w`}
                  alt={child.attribs["alt"]}
                  loading={"lazy"}
                  width={child.attribs["width"]}
                  height={child.attribs["height"]}
                />
              );
            } else {
              return convertNodeToElement(child, i, transform);
            }
          })}
        </Box>
      );
    }
    if (node.name === "figcaption" && node.children) {
      return (
        <Text
          key={index}
          as={"figcaption"}
          fontSize={"fontSizes.xs"}
          color={"colors.font.darken.2"}
          textAlign={"center"}
          maxWidth={"580px"}
          paddingY={"8px"}
        >
          {convertNodeToElement(node, index, transform)}
        </Text>
      );
    }
  }
}

export default function Page({ blog }: Props) {
  return (
    <>
      <Meta
        title={blog.title}
        path={`blogs/${blog.id}`}
        content={blog.summary}
      />
      <Header title="Blog" />

      <Main>
        <Box as={"article"}>
          <VStack
            as={"header"}
            width={["100%", "440px"]}
            paddingY={48}
            paddingBottom={["40px", "48px"]}
            marginX={"auto"}
            gap={48}
          >
            <VStack
              justifyContent={"center"}
              alignItems={"center"}
              position={"relative"}
            >
              <Flex
                as={"span"}
                maxWidth={["240px", "320px"]}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image
                  src={`${blog.eyecatch.url}`}
                  srcSet={`${blog.eyecatch.url}?w=180 180w, ${blog.eyecatch.url}?w=240 240w`}
                  maxWidth={"100%"}
                  height={"auto"}
                  alt={""}
                  aspectRatio={"1 / 1"}
                />
              </Flex>
              <Box
                as={"span"}
                marginX={["-16px", "-32px"]}
                marginTop={["-42px", "-78px"]}
                paddingX={["16px", 0]}
              >
                <Text
                  as={"h1"}
                  fontSize={[theme.fontSizes["fontSizes.2xl"], theme.fontSizes["fontSizes.3xl"]]}
                  letterSpacing={"0.05rem"}
                  textAlign={"center"}
                  marginBottom={["12px", "16px"]}
                >
                  {blog.title}
                </Text>

                <Text
                  fontSize={"fontSizes.sm"}
                  color={"colors.font.darken.2"}
                  textAlign={"right"}
                  letterSpacing={"0.05rem"}
                  marginBottom={["18px", "30px"]}
                >
                  {blog.summary}
                </Text>

                {blog.publishedAt && (
                  <VStack
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={[4, 8]}
                  >
                    <Box
                      as={"span"}
                      fontSize={[
                        theme.fontSizes["fontSizes.sm"],
                        theme.fontSizes["fontSizes.base"],
                      ]}
                      color={"colors.font.darken.1"}
                      letterSpacing={"0.1rem"}
                    >
                      {publishedDate(blog.publishedAt)}
                    </Box>
                    <Box
                      as={"span"}
                      fontSize={[theme.fontSizes["fontSizes.xs"], theme.fontSizes["fontSizes.sm"]]}
                      color={"colors.font.darken.1"}
                      letterSpacing={"0.05rem"}
                    >
                      {publishedYear(blog.publishedAt)}
                    </Box>
                  </VStack>
                )}
              </Box>
            </VStack>
          </VStack>

          <Box
            as={"section"}
            className={sectionStyle}
            paddingX={[16, 0]}
          >
            {ReactHtmlParser(blog.content, { decodeEntities: false, transform })}
          </Box>
        </Box>
      </Main>
    </>
  );
}
