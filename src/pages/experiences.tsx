import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { FeedItem } from "../../builder/rss";
import rss from "../../.contents/rss.json";
import Page from "@/components/Routes/Experiences";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

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
    const date = dayjs(item.dateMiliSeconds).tz("Asia/Tokyo");
    const year = date.year();
    const month = date.month() + 1;
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
