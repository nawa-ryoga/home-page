import GridContainer from "../Parts/GirdContainer";
import GridItem from "../Parts/GridItem";
import FirstLineItem from "../Objects/FitstLineItem";
import SecondLineItem from "../Objects/SecondLineItem";
import ThirdLineItem from "../Objects/ThirdLineItem";
import { themeConfig } from "../../../../../kuma.config";

export default function Menu() {
  const imageUrlList = themeConfig.image.background;
  return (
    <GridContainer>
      <GridItem griRowNumber={2}>
        <FirstLineItem
          link={"blogs"}
          text={"Blog"}
          imageUrl={imageUrlList.blog}
          imageSize={{ small: 250, large: 390 }}
        />
      </GridItem>
      <GridItem griRowNumber={1}>
        <FirstLineItem
          link={"about"}
          text={"About"}
          imageUrl={imageUrlList.about}
          imageSize={{ small: 180, large: 360 }}
        />
      </GridItem>
      <GridItem griRowNumber={3}>
        <SecondLineItem
          link={"experiences"}
          text={"Experience"}
          imageUrl={imageUrlList.experience}
        />
      </GridItem>

      <GridItem griRowNumber={1}>
        <ThirdLineItem />
      </GridItem>
    </GridContainer>
  );
}
