import { Center } from "@chakra-ui/layout";
import React from "react";
import { SpacerXSmall } from "../../styles/globalStyles";
import RarityBox from "./RarityBox";
import * as s from "./styles";

const rar = [
  { rare: "UNCOMMON", color: "#F7F0CC" },
  { rare: "RARE", color: "#88D5D5" },
  { rare: "SUPER RARE", color: "#F7E37B" },
  { rare: "EPIC", color: "#BBDBAB" },
  { rare: "MYTHIC", color: "#BA8FDB" },
];
const OneSlide = ({ background }) => {
  return (
    <div>
      <Center>
        <div data-aos="zoom-in-up">
          <s.StoriesContainer style={{ scrollMarginTop: "220px" }}>
            <Center>
              <s.StoriesHero>
                <img
                  src={background.img}
                  alt="Bunny Hero"
                  style={{
                    width: { base: "150px", sm: "225px", lg: "250px" },
                    display: "block",
                    borderRadius: "15px",
                  }}
                />
              </s.StoriesHero>
            </Center>
            <Center>
              <s.StoriesContent>
                <Center>
                  <s.Prob> {background.title} </s.Prob>
                </Center>
                <Center>
                  <s.Description>({background.gang})</s.Description>
                </Center>
              </s.StoriesContent>
            </Center>

            <SpacerXSmall />
            <SpacerXSmall />
            <Center>
              <RarityBox
                rarity={rar[background.rarity]}
                chance={background.probability}
              />
            </Center>
            <SpacerXSmall />
            <SpacerXSmall />
          </s.StoriesContainer>
        </div>
      </Center>
    </div>
  );
};

export default OneSlide;
