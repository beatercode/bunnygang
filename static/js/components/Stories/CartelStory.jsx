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
import heroBunny from "../../images/browny_cartel.png";

const CartelStory = () => {
  return (
    <div>
      <Center>
        <div data-aos="zoom-in-up">
          <StoriesContainer style={{ scrollMarginTop: "220px" }}>
            <StoriesHero>
              <img
                src={heroBunny}
                alt="Bunny Hero"
                style={{ width: "100%", display: "block" }}
              />
            </StoriesHero>

            <StoriesContent style={{ padding: "20px", textAlign: "justify" }}>
              <Title>El Cartel</Title>
              <SpacerXSmall />
              <Description>
                The story of the cartel begins in 1980, when Pablo Bunnybar was
                18 years old. This young bunny has ambitions to win millions of
                carrots and rule the world. He starts at the bottom of the
                ladder, and sells a few carrots. Little by little, the carrots
                turn into tens of carrots, the tens into hundreds, then into
                thousands and finally into millions. Pablo Bunnybar is now at
                the head of the El Cartel gang, which he runs with some of his
                closest rabbits, always loyal, and always dreaming of conquering
                the world.
              </Description>
              <SpacerMedium />
            </StoriesContent>
          </StoriesContainer>
        </div>
      </Center>
    </div>
  );
};
export default CartelStory;
