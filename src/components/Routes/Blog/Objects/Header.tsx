import { useState, useEffect } from "react";
import type { Blog } from "../../../../../lib/client";
import { Image } from "@kuma-ui/core";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import HeaderContainer from "../Parts/Header/Container";
import HeaderContent from "../Parts/Header/Content";
import Eyecatch from "../Parts/Header/Content/Eyecatch";
import MetaContainer from "../Parts/Header/Content/Meta/Container";
import Summary from "../Parts/Header/Content/Meta/Summary";
import Title from "../Parts/Header/Content/Meta/Title";
import PublishedAtContainer from "../Parts/Header/Content/Meta/Published/Container";
import PublishedDate from "../Parts/Header/Content/Meta/Published/Date";
import PublishedYear from "../Parts/Header/Content/Meta/Published/Year";

type Props = Pick<Blog, "title" | "summary" | "eyecatch" | "publishedAt">;

dayjs.extend(utc);
dayjs.extend(timezone);

export default function BlogHeader({ title, summary, eyecatch, publishedAt }: Props) {
  const [publishedDate, setPublishedDate] = useState("");
  const [publishedYear, setPublishedYear] = useState("");

  useEffect(() => {
    if (publishedAt) {
      setPublishedDate(dayjs.utc(publishedAt).tz("Asia/Tokyo").format("MMM D"));
      setPublishedYear(dayjs.utc(publishedAt).tz("Asia/Tokyo").format("YYYY"));
    }
  }, [publishedAt]);
  return (
    <HeaderContainer>
      <HeaderContent>
        <Eyecatch>
          <Image
            src={`${eyecatch.url}`}
            srcSet={`${eyecatch.url}?w=180 180w, ${eyecatch.url}?w=240 240w`}
            maxWidth={"100%"}
            height={"auto"}
            alt={""}
            aspectRatio={"1 / 1"}
          />
        </Eyecatch>
        <MetaContainer>
          <Title>{title}</Title>
          <Summary>{summary}</Summary>
          {publishedAt && (
            <PublishedAtContainer>
              <PublishedDate>{publishedDate}</PublishedDate>
              <PublishedYear>{publishedYear}</PublishedYear>
            </PublishedAtContainer>
          )}
        </MetaContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
