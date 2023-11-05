import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { FeedItem } from "../../builder/rss";
import rss from "../../.contents/rss.json";
import Page from "@/components/Routes/Experiences";

export type ExperiencePerMonths = {
  month: number;
  feeds: FeedItem[];
};

export type ExperiencePerYears = {
  year: number;
  months: ExperiencePerMonths[];
}[];

function sortFeeds(feedItems: FeedItem[]): ExperiencePerYears {
  const sortedFeedItemsByDate = [...feedItems].sort(
    (a, b) => b.dateMiliSeconds - a.dateMiliSeconds,
  );

  const feedMap: Map<number, Map<number, FeedItem[]>> = new Map();
  sortedFeedItemsByDate.forEach((item) => {
    const date = new Date(item.dateMiliSeconds);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    if (!feedMap.has(year)) {
      feedMap.set(year, new Map());
    }
    const yearMap = feedMap.get(year);

    if (!yearMap) {
      return;
    }

    if (!yearMap.has(month)) {
      yearMap.set(month, []);
    }

    const feedsPerMonth = yearMap.get(month);
    if (feedsPerMonth) {
      feedsPerMonth.push(item);
    }
  });

  const feedListPerYear: ExperiencePerYears = Array.from(feedMap.entries()).map(
    ([year, yearMap]) => {
      const feedList: ExperiencePerMonths[] = Array.from(yearMap.entries()).map(
        ([month, feeds]) => ({
          month,
          feeds,
        }),
      );
      feedList.sort((a, b) => b.month - a.month);
      return { year, months: feedList };
    },
  );

  feedListPerYear.sort((a, b) => b.year - a.year);

  return feedListPerYear;
}

export const getStaticProps: GetStaticProps<{
  experiencesPerYears: ExperiencePerYears;
}> = async () => {
  const feedItems: FeedItem[] = rss;
  const experiencesPerYears = sortFeeds(feedItems);

  return {
    props: { experiencesPerYears },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Experiences({ experiencesPerYears }: Props) {
  return <Page experiencesPerYears={experiencesPerYears} />;
}
