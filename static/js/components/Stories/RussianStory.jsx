import { Center } from "@chakra-ui/layout";
import React from "react";
import {
  SpacerLarge,
  SpacerXSmall,
  SpacerMedium,
} from "../../styles/globalStyles";
import {
  StoriesContainer,
  StoriesHero,
  StoriesContent,
  Description,
  Title,
} from "./styles";

import heroBunny from "../../images/black_rusian.png";

const RussianStory = () => {
  return (
    <div>
      <Center>
        <SpacerLarge />
        <SpacerLarge />
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
              <Title>The Prestupnaya</Title>
              <SpacerXSmall />
              <Description>
                The Russian Mafia Rabbits are the direct descendants of the
                Russian Tsars. In the early 1940s, Bunnybroskov, a prisoner in
                the gulag, decides to escape with his fellow prisoners. During
                the escape, Bunnybroskov loses all his comrades in a violent
                shootout. He decides to avenge his brothers, and sets up the
                first Russian criminal organization. He decides to call this
                mafia organization the Prestupnaya. Since then, he leads all
                criminal activities in Russia such as importing carrots or
                trafficking corn.
              </Description>
              <SpacerMedium />
            </StoriesContent>
          </StoriesContainer>
        </div>
      </Center>
    </div>
  );
};
export default RussianStory;
