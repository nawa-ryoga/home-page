import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from "microcms-js-sdk";

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
