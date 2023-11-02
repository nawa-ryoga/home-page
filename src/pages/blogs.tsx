import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type { Blog } from "../../lib/client";
import blogs from "../../.contents/blogs.json";
import Page from "@/components/Routes/Blogs";
import type { MicroCMSListResponse } from "microcms-js-sdk";

export const runtime = "experimental-edge";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

async function getDraftBlogs(draftKey: string) {
  if (!process.env.API_KEY) {
    throw new Error("APIキーが見つかりません。");
  }
  const { contents }: MicroCMSListResponse<Blog> = await fetch(
    `https://${process.env.API_SERVICE_DOMAIN}.microcms.io/api/v1/blogs?draftKey=${draftKey}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.API_KEY,
      },
    },
  ).then((res) => res.json());

  return contents;
}

export const getServerSideProps: GetServerSideProps<{ blogs: Blog[] }> = async ({ res, query }) => {
  /**
   * キャッシュされてから60秒間はキャッシュを返す
   * 60秒経過後にバックグラウンドでキャッシュを更新する（更新中も古いキャッシュを返す）
   * キャッシュの更新には最大で86400秒（24時間）許容する
   */
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=86400");

  const draftKey = query.draftKey;

  const b: Blog[] = draftKey ? await getDraftBlogs(String(draftKey)) : blogs;

  return {
    props: {
      blogs: b,
    },
  };
};

export default function Blogs({ blogs }: Props) {
  return <Page blogs={blogs} />;
}
