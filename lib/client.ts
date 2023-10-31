import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from "microcms-js-sdk";

import { config } from "dotenv";

/**
 * ビルド中は参照できないので dotenv を使う
 */
if (!process.env.API_SERVICE_DOMAIN && !process.env.API_KEY) {
  config();
}

if (!process.env.API_SERVICE_DOMAIN) {
  throw new Error("microCMSのサービスドメインが設定されていません。");
}

if (!process.env.API_KEY) {
  throw new Error("microCMSのAPIキーが設定されていません。");
}

export const client = createClient({
  serviceDomain: process.env.API_SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

export type Blog = {
  title: string;
  content: string;
  summary: string;
  eyecatch: MicroCMSImage;
} & MicroCMSContentId &
  MicroCMSDate;

export const getBlogList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Blog>({
      endpoint: "blogs",
      queries,
    })
    .catch(() => {
      throw new Error("データが取得できませんでした。");
    });

  return listData;
};

export type AboutContent = {
  title: string;
  images?: MicroCMSImage[];
  content?: string;
};

export type About = {
  name: string;
  icon: MicroCMSImage;
  summery: string;
  birth_year?: number;
  birth_month?: number;
  birth_date?: number;
  contents: AboutContent[];
} & MicroCMSDate;

export const getAboutContent = async () => {
  const about = await client
    .get<About>({
      endpoint: "profile",
    })
    .catch(() => {
      throw new Error("データが取得できませんでした。");
    });

  return about;
};
