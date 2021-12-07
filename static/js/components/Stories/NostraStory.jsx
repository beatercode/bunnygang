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
import heroBunny from "../../images/grey_mafioso.png";

const NostraStory = () => {
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
              <Title>La Nostra</Title>
              <SpacerXSmall />
              <Description>
                La Nostra has its roots in the Bunyple valley, its members were
                originally simple farmers cultivating and blessing carrots. One
                day, the villagers were attacked and robbed of their carrots by
                bandits. They bombed the village and destroyed the years of work
                of the farmers. The few survivors of the village spent years in
                poverty looking for a home and a purpose. They were driven by a
                thirst for revenge. Wandering in the remote lands of the rocky
                plains they came across Parmigianot, the leader of their people
                who they thought was a slave or dead. Led by their newfound
                leader, they took revenge and gradually gained control of the
                carrot trade in Europe, sometimes by force.
              </Description>
              <SpacerMedium />
            </StoriesContent>
          </StoriesContainer>
        </div>
      </Center>
    </div>
  );
};
export default NostraStory;
