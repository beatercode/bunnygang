import { Center, Text } from "@chakra-ui/layout";
import React from "react";
import { SpacerLarge } from "../../styles/globalStyles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import RussianStory from "./RussianStory";
import CartelStory from "./CartelStory";
import YakuzaStory from "./YakuzaStory";
import NostraStory from "./NostraStory";
// import { Button } from "@chakra-ui/react";

// renderArrowPrev: (clickHandler: () => void, hasPrev: boolean, label: string) =>
//   React.ReactNode;
// renderArrowNext: (clickHandler: () => void, hasNext: boolean, label: string) =>
//   React.ReactNode;

const Stories = () => {
  return (
    <div>
      <ul>
        <li>
          <Center id="Story">
            <Text
              as={"span"}
              position={"relative"}
              fontSize="7xl"
              color={"var(--white)"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "var(--red)",
                zIndex: -1,
              }}
            >
              Story
            </Text>
          </Center>
        </li>
        <SpacerLarge />
        <SpacerLarge />
        <li>
          <Carousel
            autoPlay="true"
            emulateTouch="true"
            infiniteLoop="true"
            number="4000"
            showStatus="true"
            showArrows="false"
            showThumbs="false"
          >
            <RussianStory />
            <YakuzaStory />
            <CartelStory />
            <NostraStory />
          </Carousel>
        </li>
      </ul>
    </div>
  );
};

export default Stories;
