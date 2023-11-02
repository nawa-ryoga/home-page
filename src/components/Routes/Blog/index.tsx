import Meta from "@/components/Meta";
import Header from "@/components/Layouts/Header";
import Main from "@/components/Layouts/Main";
import type { Blog } from "../../../../lib/client";
import { Text, Image, VStack, Flex, Box } from "@kuma-ui/core";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import theme from "../../../../kuma.config";
import "./styles.css";
import { sectionStyle } from "./styles.css";

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
            paddingX={[16, 0]}
          >
            <Box
              className={sectionStyle}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </Box>
        </Box>
      </Main>
    </>
  );
}
