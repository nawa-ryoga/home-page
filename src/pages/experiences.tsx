import type { GetStaticProps, InferGetStaticPropsType } from "next";
import rss from "../../.contents/rss.json";
import { Box, Grid, Text } from "@kuma-ui/core";
import Main from "@/components/Layouts/Main";
import Header from "@/components/Layouts/Header";

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

    // 各年に9月と8月を追加し、値は10月のものと同じものを使用
    ["9", "8"].forEach((m) => {
      if (!yearsObj[year][m]) {
        yearsObj[year][m] = [...yearsObj[year][month]];
      }
    });

    // 2022年のキーを追加し、2023年のRSSフィードを格納
    if (year === "2023" && !yearsObj["2022"]) {
      yearsObj["2022"] = { [month]: [feed] };
      // 各年に9月と8月を追加し、値は10月のものと同じものを使用
      ["9", "8"].forEach((m) => {
        if (!yearsObj["2022"][m]) {
          yearsObj["2022"][m] = [...yearsObj["2022"][month]];
        }
      });
    } else if (year === "2023" && !yearsObj["2022"][month]) {
      yearsObj["2022"][month] = [feed];
      // 各年に9月と8月を追加し、値は10月のものと同じものを使用
      ["9", "8"].forEach((m) => {
        if (!yearsObj["2022"][m]) {
          yearsObj["2022"][m] = [...yearsObj["2022"][month]];
        }
      });
    } else if (year === "2023") {
      yearsObj["2022"][month].push(feed);
      // 各年に9月と8月を追加し、値は10月のものと同じものを使用
      ["9", "8"].forEach((m) => {
        if (!yearsObj["2022"][m]) {
          yearsObj["2022"][m] = [...yearsObj["2022"][month]];
        }
      });
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
        {experiencesPerYears.map((experiences, index) => (
          <Box key={index}>
            {Object.keys(experiences).map((year) => (
              <div key={year}>
                <Grid
                  gridTemplateColumns={"repeat(5, 1fr)"}
                  gridTemplateRows="repeat(1fr)"
                  gap={16}
                  marginX={"auto"}
                  width={["100%", "524px", "768px"]}
                  height={"auto"}
                >
                  <Box
                    as={"aside"}
                    gridColumn={`span 1 / auto`}
                  >
                    <Text
                      as={"h2"}
                      margin={0}
                      fontWeight={700}
                    >
                      {year}
                    </Text>
                  </Box>
                  <Box
                    as={"section"}
                    gridColumn={`span 4 / auto`}
                  >
                    {Object.keys(experiences[year]).map((month) => (
                      <Box key={month}>
                        <Text
                          as={"h3"}
                          margin={0}
                        >
                          {month}
                        </Text>
                        {experiences[year][month].map((feed, index) => (
                          <Box key={index}>
                            <Text
                              as={"h3"}
                              margin={0}
                            >
                              {feed.title}
                            </Text>
                          </Box>
                        ))}
                      </Box>
                    ))}
                  </Box>
                </Grid>
              </div>
            ))}
          </Box>
        ))}
      </Main>
    </>
  );
}
