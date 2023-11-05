import Meta from "@/components/Meta";
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import FeedItem from "./Objects/FeedItem";
import Container from "./Parts/Container";
import YearContainer from "./Parts/YearContainer";
import YearHeader from "./Parts/YearHeader";
import SectionContainer from "./Parts/SectionContainer";
import MonthContainer from "./Parts/MonthContainer";
import MonthHeader from "./Parts/MonthHeader";
import FeedListContainer from "./Parts/FeedListContainer";
import FeedItemContainer from "./Parts/FeedItemContainer";
import NonStyleListItem from "@/components/Commons/NoStyleListItem";
import type { ExperiencePerYears } from "@/pages/experiences";
import { secondIn } from "@/styles/animation.css";

type Props = {
  experiencesPerYears: ExperiencePerYears;
};

export default function Page({ experiencesPerYears }: Props) {
  return (
    <>
      <Meta
        title={"Experiences"}
        content={"naary's timeline"}
        path={"experiences"}
      />

      <Header title="Experiences" />

      <main className={secondIn}>
        <Container>
          {experiencesPerYears.map((experiences, index) => (
            <NonStyleListItem key={index}>
              <YearContainer>
                <YearHeader>{experiences.year}</YearHeader>
                <SectionContainer>
                  {experiences.months.map((items) => (
                    <MonthContainer key={items.month}>
                      <MonthHeader>{items.month}</MonthHeader>
                      <FeedListContainer>
                        {items.feeds.map(
                          (feed) =>
                            feed.isoDate && (
                              <FeedItemContainer key={feed.link}>
                                <FeedItem
                                  feedLink={feed.link}
                                  feedTitle={feed.title}
                                  feedDate={feed.isoDate}
                                />
                              </FeedItemContainer>
                            ),
                        )}
                      </FeedListContainer>
                    </MonthContainer>
                  ))}
                </SectionContainer>
              </YearContainer>
            </NonStyleListItem>
          ))}
        </Container>
      </main>

      <Footer />
    </>
  );
}
