import type { GetStaticProps, InferGetStaticPropsType } from "next";
import rss from "../../.contents/rss.json";
import { Box, HStack, VStack, Flex, Text } from "@kuma-ui/core";
import Main from "@/components/Layouts/Main";
import Header from "@/components/Layouts/Header";
import FeedItem from "@/components/Routes/Experiences/Objects/FieedItem";
import theme from "../../kuma.config";

type ExperiencePerMonth = { [key: string]: typeof rss };
type ExperiencePerYears = Array<{ [key: string]: ExperiencePerMonth }>;

export const getStaticProps: GetStaticProps<{
  experiencesPerYears: ExperiencePerYears;
}> = async () => {
  const yearsObj: { [key: string]: ExperiencePerMonth } = {};

  // { "2023": 2023年のRSSフィード } のような形にする
  rss.forEach((feed) => {
    const date = new Date(feed.isoDate);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString();

    if (!yearsObj[year]) {
      yearsObj[year] = { [month]: [feed] };
    } else if (!yearsObj[year][month]) {
      yearsObj[year][month] = [feed];
    } else {
      yearsObj[year][month].push(feed);
    }
  });

  // キー（年）を降順にソート、内部も月の降順にソート
  const sortedYears = Object.keys(yearsObj).sort((a, b) => Number(b) - Number(a));
  const experiencesPerYears: ExperiencePerYears = sortedYears.map((key) => {
    const sortedMonths = Object.keys(yearsObj[key]).sort((a, b) => Number(b) - Number(a));
    return {
      [key]: sortedMonths.reduce((acc, k) => ({ ...acc, [k]: yearsObj[key][k] }), {}),
    };
  });

  return {
    props: { experiencesPerYears },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Experiences({ experiencesPerYears }: Props) {
  return (
    <>
      <Header
        title="Experiences"
        isTopPage={false}
      />

      <Main>
        <Box
          paddingTop={"120px"}
          as={"ul"}
          listStyleType={"none"}
          paddingLeft={0}
        >
          {experiencesPerYears.map((experiences, index) => (
            <Box
              key={index}
              as={"li"}
            >
              {Object.keys(experiences).map((year) => (
                <Box
                  key={year}
                  marginBottom={["4rem", "8rem"]}
                >
                  <Box
                    marginX={"auto"}
                    width={["100%", "680px"]}
                    height={"auto"}
                  >
                    <Box
                      as={"aside"}
                      position={"relative"}
                    >
                      <HStack
                        alignItems={"flex-end"}
                        justifyContent={"flex-start"}
                      >
                        <Box
                          width={48}
                          height={"100%"}
                          borderBottom={`1px solid ${theme.colors["colors.font.darken.2"]}`}
                        ></Box>
                        <Flex
                          as={"span"}
                          justifyContent={"center"}
                          paddingX={"8px"}
                        >
                          <Text
                            as={"h2"}
                            margin={0}
                            color={"colors.font.darken.1"}
                            fontSize={"fontSizes.2xl"}
                            fontWeight={700}
                            letterSpacing={"0.3rem"}
                            marginRight={"-0.4rem"}
                            marginBottom={"-0.5rem"}
                          >
                            {year}
                          </Text>
                        </Flex>
                        <Box
                          width={24}
                          height={"100%"}
                          borderBottom={`1px solid ${theme.colors["colors.font.darken.2"]}`}
                        ></Box>
                      </HStack>
                    </Box>
                    <VStack
                      as={"section"}
                      gridColumn={`span 4 / auto`}
                      gap={"62px"}
                    >
                      <Box
                        as={"ul"}
                        listStyleType={"none"}
                        paddingLeft={0}
                      >
                        {Object.keys(experiences[year]).map((month) => (
                          <Box
                            as={"li"}
                            key={month}
                            paddingX={"24px"}
                          >
                            <Flex
                              position={"relative"}
                              paddingTop={"40px"}
                              marginLeft={"-0.7rem"}
                            >
                              <Flex
                                as={"span"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                aspectRatio={"1 / 1"}
                                width={"35px"}
                              >
                                <Text
                                  as={"h3"}
                                  margin={0}
                                  fontSize={"fontSizes.xl"}
                                >
                                  {month}
                                </Text>
                              </Flex>
                              <Box
                                as="hr"
                                width={"28px"}
                                height={"1px"}
                                color={"colors.font.darken.1"}
                                backgroundColor={"colors.font.darken.1"}
                                transform={"rotate(135deg)"}
                                position={"absolute"}
                                top={70}
                                left={18}
                              ></Box>
                            </Flex>
                            <VStack
                              as={"ul"}
                              listStyleType={"none"}
                              gap={"24px"}
                              paddingX={"18px"}
                            >
                              {experiences[year][month].map((feed) => (
                                <Box
                                  as={"li"}
                                  key={feed.link}
                                >
                                  <FeedItem
                                    feedLink={feed.link}
                                    feedTitle={feed.title}
                                  />
                                </Box>
                              ))}
                            </VStack>
                          </Box>
                        ))}
                      </Box>
                    </VStack>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Main>
    </>
  );
}
