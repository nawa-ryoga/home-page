import type { GetStaticProps, InferGetStaticPropsType } from "next";
import rss from "../../.contents/rss.json";
import Page from "@/components/Routes/Experiences";

type ExperiencePerMonth = { [key: string]: typeof rss };
export type ExperiencePerYears = Array<{ [key: string]: ExperiencePerMonth }>;

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
  return <Page experiencesPerYears={experiencesPerYears} />;
}
