import { Center } from "@chakra-ui/layout";
import React from "react";
import { SpacerXSmall, SpacerMedium } from "../../styles/globalStyles";
import {
  StoriesContainer,
  StoriesHero,
  StoriesContent,
  Description,
  Title,
} from "./styles";
import heroBunny from "../../images/golden_yakuza.png";

const YakuzaStory = () => {
  return (
    <div>
      <Center>
        <div data-aos="zoom-in-up">
          <StoriesContainer>
            <StoriesHero>
              <img
                src={heroBunny}
                alt="Bunny Hero"
                style={{ width: "100%", display: "block" }}
              />
            </StoriesHero>

            <StoriesContent style={{ padding: "20px", textAlign: "justify" }}>
              <Title>The Yakuza</Title>
              <SpacerXSmall />
              <Description>
                Originally, the yakuza lived in the highest mountains of the
                woakigen region. They respected the traditions of their
                ancestors: the love of hunting, the skill of sword fighting and
                the beliefs of the ancient gods. However, in 1962 the great
                industrialists of the city of Polutto found a deposit of
                precious metals a few dozen meters below their home. The people
                of faith were attacked head-on and suffered enormous losses. The
                few citizens migrated to the city of pulutto and settled in the
                low-lying areas of this huge site. In a few months they built an
                empire thanks to the gigantic sums of money produced by the
                sales of metals by the multinationals of the city.
              </Description>
              <SpacerMedium />
            </StoriesContent>
          </StoriesContainer>
        </div>
      </Center>
    </div>
  );
};
export default YakuzaStory;
