import Meta from "@/components/Meta";
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import Main from "@/components/Layouts/Main";
import type { Blog } from "../../../../lib/client";
import BlogHeader from "./Objects/Header";
import BlogSection from "./Objects/Section";

type Props = {
  blog: Blog;
};

export default function Page({ blog }: Props) {
  return (
    <>
      <Meta
        title={blog.title}
        path={`blogs/${blog.id}`}
        content={blog.summary}
      />
      <Header title="Blog" />

      <Main>
        <article>
          <BlogHeader {...blog} />
          <BlogSection {...blog} />
        </article>
      </Main>

      <Footer />
    </>
  );
}
