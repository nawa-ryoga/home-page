import type { ExperiencePerYears } from "@/pages/experiences";
import Meta from "@/components/Meta";
import Main from "@/components/Layouts/Main";
import Header from "@/components/Layouts/Header";
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

      <Header
        title="Experiences"
        isTopPage={false}
      />

      <Main>
        <Container>
          {experiencesPerYears.map((experiences, index) => (
            <NonStyleListItem key={index}>
              {Object.keys(experiences).map((year) => (
                <YearContainer key={year}>
                  <YearHeader>{year}</YearHeader>
                  <SectionContainer>
                    {Object.keys(experiences[year]).map((month) => (
                      <MonthContainer key={month}>
                        <MonthHeader>{month}</MonthHeader>
                        <FeedListContainer>
                          {experiences[year][month].map((feed) => (
                            <FeedItemContainer key={feed.link}>
                              <FeedItem
                                feedLink={feed.link}
                                feedTitle={feed.title}
                                feedDate={feed.isoDate}
                              />
                            </FeedItemContainer>
                          ))}
                        </FeedListContainer>
                      </MonthContainer>
                    ))}
                  </SectionContainer>
                </YearContainer>
              ))}
            </NonStyleListItem>
          ))}
        </Container>
      </Main>
    </>
  );
}
