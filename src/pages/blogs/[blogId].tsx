import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type { Blog } from "../../../lib/client";
import Page from "@/components/Routes/Blog";
import blogs from "../../../.contents/blogs.json";

export const runtime = "experimental-edge";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps<{ blog: Blog }> = async ({ params, res }) => {
  /**
   * キャッシュされてから60秒間はキャッシュを返す
   * 60秒経過後にバックグラウンドでキャッシュを更新する（更新中も古いキャッシュを返す）
   * キャッシュの更新には最大で86400秒（24時間）許容する
   */
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=86400");

  const blogId = params?.blogId;

  if (!blogId) {
    throw new Error("ブログIDが入力されていません。");
  }

  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return { notFound: true };
  }

  return {
    props: {
      blog,
    },
  };
};

export default function Blog({ blog }: Props) {
  return <Page blog={blog} />;
}
