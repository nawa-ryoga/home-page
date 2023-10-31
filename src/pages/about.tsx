import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { About } from "../../lib/client";
import Page from "@/components/Routes/About";
import about from "../../.contents/about.json";

export const getStaticProps: GetStaticProps<{ about: About }> = async () => {
  return {
    props: {
      about,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function About({ about }: Props) {
  return <Page about={about} />;
}
