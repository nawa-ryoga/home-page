import Meta from "@/components/Meta";
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import Main from "@/components/Layouts/Main";
import Link from "next/link";
import type { Blog } from "../../../../lib/client";
import { Text, Image, VStack, Flex, Box } from "@kuma-ui/core";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import theme from "../../../../kuma.config";
import { defaultInnerLinkStyle } from "@/styles/global.css";

dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  blogs: Blog[];
};

function publishedDate(publishedAt: string) {
  return dayjs.utc(publishedAt).tz("Asia/Tokyo").format("MMM D");
}

function publishedYear(publishedAt: string) {
  return dayjs.utc(publishedAt).tz("Asia/Tokyo").format("YYYY");
}

export default function Page({ blogs }: Props) {
  return (
    <>
      <Meta
        title={"Blogs"}
        path={"blogs"}
        content={"NAARY.ME's blog entries"}
      />

      <Header title={"Blogs"} />

      <Main>
        <VStack
          width={["100%", "440px"]}
          paddingY={48}
          marginX={"auto"}
          gap={48}
        >
          {!blogs.length && (
            <VStack
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                as={"h2"}
                fontSize={[theme.fontSizes["fontSizes.md"], theme.fontSizes["fontSizes.xl"]]}
                letterSpacing={"0.05rem"}
                textAlign={"center"}
              >
                記事がありません
              </Text>
            </VStack>
          )}
          {blogs.length >= 1 &&
            blogs.map((blog) => (
              <VStack
                key={blog.id}
                justifyContent={"center"}
                alignItems={"center"}
                position={"relative"}
              >
                <Flex
                  as={"span"}
                  maxWidth={["180px", "280px"]}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Link
                    className={defaultInnerLinkStyle}
                    href={`/blogs/${blog.id}`}
                  >
                    <Image
                      src={`${blog.eyecatch.url}`}
                      srcSet={`${blog.eyecatch.url}?w=180 180w, ${blog.eyecatch.url}?w=240 240w`}
                      maxWidth={"100%"}
                      height={"auto"}
                      alt={""}
                      aspectRatio={"1 / 1"}
                    />
                  </Link>
                </Flex>
                <Box
                  as={"span"}
                  marginX={["-16px", "-32px"]}
                  marginTop={["-42px", "-78px"]}
                  paddingX={["16px", 0]}
                >
                  <Link
                    className={defaultInnerLinkStyle}
                    href={`/blogs/${blog.id}`}
                  >
                    <Text
                      as={"h2"}
                      fontSize={[theme.fontSizes["fontSizes.md"], theme.fontSizes["fontSizes.xl"]]}
                      letterSpacing={"0.05rem"}
                      textAlign={"center"}
                      marginBottom={["12px", "16px"]}
                    >
                      {blog.title}
                    </Text>
                  </Link>

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
                        fontSize={[
                          theme.fontSizes["fontSizes.xs"],
                          theme.fontSizes["fontSizes.sm"],
                        ]}
                        color={"colors.font.darken.1"}
                        letterSpacing={"0.05rem"}
                      >
                        {publishedYear(blog.publishedAt)}
                      </Box>
                    </VStack>
                  )}
                </Box>
              </VStack>
            ))}
        </VStack>
      </Main>

      <Footer />
    </>
  );
}
