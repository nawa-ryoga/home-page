import { useState, useEffect } from "react";
import { formatDate } from "../../lib/dayjs";

const usePublishedDate = (publishedAt: string | undefined) => {
  const [publishedDate, setPublishedDate] = useState("");
  const [publishedYear, setPublishedYear] = useState("");

  useEffect(() => {
    if (publishedAt) {
      setPublishedDate(formatDate(publishedAt, "MMM D"));
      setPublishedYear(formatDate(publishedAt, "YYYY"));
    }
  }, [publishedAt]);

  return { publishedDate, publishedYear };
};

export default usePublishedDate;
