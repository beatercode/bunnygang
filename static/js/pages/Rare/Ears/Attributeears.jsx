import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Flex } from "@chakra-ui/layout";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
  ButtonBack,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

import basic_ears_A from "./ears/basic ear A.png";
import basic_ears_B from "./ears/basic ear B.png";
import basic_ears_C from "./ears/basic ear C.png";
import basic_ears_D from "./ears/basic ear D.png";
import crooked_ears_A from "./ears/crooked A.png";
import crooked_ears_B from "./ears/crooked B.png";
import crooked_ears_C from "./ears/crooked C.png";
import crooked_ears_D from "./ears/crooked D.png";
import tattoo_ears_A from "./ears/Ear_tattoo A.png";
import tattoo_ears_B from "./ears/Ear_tattoo B.png";
import tattoo_ears_C from "./ears/Ear_tattoo C.png";
import tattoo_ears_D from "./ears/Ear_tattoo D.png";
import golden_ears_A from "./ears/earring A.png";
import golden_ears_B from "./ears/earring B.png";
import golden_ears_C from "./ears/earring C.png";
import golden_ears_D from "./ears/earring D.png";

import OneSlide from "../Slide";

const Attributeears = () => {
  const ears = [
    {
      title: "Basic Ears",
      probability: 40,
      gang: "Mafia",
      rarity: "0",
      img: basic_ears_A,
    },
    {
      title: "Basic Ears",
      probability: 40,
      gang: "Cartel",
      rarity: "0",
      img: basic_ears_B,
    },
    {
      title: "Basic Ears",
      probability: 40,
      gang: "Yakuza",
      rarity: "0",
      img: basic_ears_D,
    },
    {
      title: "Basic Ears",
      probability: 40,
      gang: "Blatzva",
      rarity: "0",
      img: basic_ears_C,
    },
    {
      title: "Crooked Ears",
      probability: 30,
      gang: "Mafia",
      rarity: "0",
      img: crooked_ears_A,
    },
    {
      title: "Crooked Ears",
      probability: 30,
      gang: "Cartel",
      rarity: "0",
      img: crooked_ears_B,
    },
    {
      title: "Crooked Ears",
      probability: 30,
      gang: "Yakuza",
      rarity: "0",
      img: crooked_ears_D,
    },
    {
      title: "Crooked Ears",
      probability: 30,
      gang: "Blatzva",
      rarity: "0",
      img: crooked_ears_C,
    },
    {
      title: "Golden Ears",
      probability: 20,
      gang: "Mafia",
      rarity: "0",
      img: golden_ears_A,
    },
    {
      title: "Golden Ears",
      probability: 20,
      gang: "Cartel",
      rarity: "0",
      img: golden_ears_B,
    },
    {
      title: "Golden Ears",
      probability: 20,
      gang: "Yakuza",
      rarity: "0",
      img: golden_ears_D,
    },
    {
      title: "Golden Ears",
      probability: 20,
      gang: "Blatzva",
      rarity: "0",
      img: golden_ears_C,
    },
    {
      title: "Tattoo ears",
      probability: 10,
      gang: "Mafia",
      rarity: "0",
      img: tattoo_ears_A,
    },
    {
      title: "Tattoo Ears",
      probability: 10,
      gang: "Cartel",
      rarity: "0",
      img: tattoo_ears_B,
    },
    {
      title: "Tattoo Ears",
      probability: 10,
      gang: "Yakuza",
      rarity: "0",
      img: tattoo_ears_D,
    },
    {
      title: "Tattoo ears",
      probability: 10,
      gang: "Blatzva",
      rarity: "0",
      img: tattoo_ears_C,
    },
  ];

  return (
    <div>
      <ul>
        <CarouselProvider
          totalSlides={ears.length}
          //visibleSlides={this.state.totalSlides}
          naturalSlideWidth={270}
          naturalSlideHeight={370}
          isIntrinsicHeight={true}
          isPlaying={false}
          interval={4000}
        >
          <Flex>
            <ButtonBack>
              <ChevronLeftIcon boxSize="20" />
            </ButtonBack>

            <Slider classNameTray="slider-tray">
              {ears.map((background) => (
                <Slide>
                  <OneSlide background={background} />
                </Slide>
              ))}
            </Slider>

            <ButtonNext>
              <ChevronRightIcon boxSize="20" />
            </ButtonNext>
          </Flex>
        </CarouselProvider>
      </ul>
    </div>
  );
};

export default Attributeears;
