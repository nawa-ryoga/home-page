import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type { Blog } from "../../../lib/client";
import Page from "@/components/Routes/Blog";
import blogs from "../../../.contents/blogs.json";
import Error404 from "../404";
import Error500 from "../500";

export const runtime = "experimental-edge";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

async function getDraftBlog(blogId: string, draftKey: string) {
  if (!process.env.API_KEY) {
    throw new Error("APIキーが見つかりません。");
  }
  const blog: Blog = await fetch(
    `https://${process.env.API_SERVICE_DOMAIN}.microcms.io/api/v1/blogs/${blogId}?draftKey=${draftKey}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.API_KEY,
      },
    },
  ).then((res) => res.json());

  return blog;
}

export const getServerSideProps: GetServerSideProps<{ blog?: Blog; error?: 404 | 500 }> = async ({
  params,
  res,
  query,
}) => {
  /**
   * キャッシュされてから60秒間はキャッシュを返す
   * 60秒経過後にバックグラウンドでキャッシュを更新する（更新中も古いキャッシュを返す）
   * キャッシュの更新には最大で86400秒（24時間）許容する
   */
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=86400");

  const blogId = params?.blogId;
  const draftKey = query.draftKey;

  if (!blogId) {
    throw new Error("ブログIDが入力されていません。");
  }

  try {
    const blog: Blog | undefined = blogs.length
      ? blogs.find((b: Blog) => b.id === blogId)
      : undefined;

    const draftBlog: Blog | undefined = draftKey
      ? await getDraftBlog(String(blogId), String(draftKey))
      : undefined;

    if (draftBlog) {
      return {
        props: {
          blog: draftBlog,
        },
      };
    }

    if (!blog) {
      return {
        props: {
          error: 404,
        },
      };
    }

    return {
      props: {
        blog,
      },
    };
  } catch (e) {
    return {
      props: {
        error: 500,
      },
    };
  }
};

export default function Blog({ blog, error }: Props) {
  return (
    <>
      {blog && <Page blog={blog} />}
      {error === 404 && <Error404 />}
      {error === 500 && <Error500 />}
    </>
  );
}
