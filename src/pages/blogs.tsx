import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type { Blog } from "../../lib/client";
import blogs from "../../.contents/blogs.json";
import Page from "@/components/Routes/Blogs";

export const runtime = "experimental-edge";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<{ blogs: Blog[] }> = async ({ res }) => {
  /**
   * キャッシュされてから60秒間はキャッシュを返す
   * 60秒経過後にバックグラウンドでキャッシュを更新する（更新中も古いキャッシュを返す）
   * キャッシュの更新には最大で86400秒（24時間）許容する
   */
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=86400");

  return {
    props: {
      blogs,
    },
  };
};

export default function Blogs({ blogs }: Props) {
  return <Page blogs={blogs} />;
}
