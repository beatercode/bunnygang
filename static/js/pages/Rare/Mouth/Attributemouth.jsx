import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import React from "react";
import { Flex } from "@chakra-ui/layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
  ButtonBack,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import basic_mouth from "./mouth/basic mouth.png";
import beard from "./mouth/beard.png";
import blood from "./mouth/blood.png";
import blowing_mouth from "./mouth/blowing mouth.png";
import diamond_teeh from "./mouth/diamond teeh.png";
import evil_smile from "./mouth/evil smile.png";
import golden_teeth from "./mouth/golden teeth.png";
import grimace from "./mouth/grimace.png";
import moustache from "./mouth/moustache.png";
import no_teeth from "./mouth/no teeth.png";
import smirk from "./mouth/smirk.png";
import tounge_out from "./mouth/tounge out.png";

import OneSlide from "../Slide";

const mouth = [
  {
    title: "Basic Mouth",
    probability: 30,
    gang: "All",
    rarity: 0,
    img: basic_mouth,
  },
  {
    title: "Blowing Mouth",
    probability: 17.5,
    gang: "All",
    rarity: 0,
    img: blowing_mouth,
  },
  {
    title: "Moustache",
    probability: 10,
    gang: "All",
    rarity: 0,
    img: moustache,
  },
  {
    title: "Smirk",
    probability: 10,
    gang: "All",
    rarity: 0,
    img: smirk,
  },
  {
    title: "Golden Teeth",
    probability: 8,
    gang: "All",
    rarity: 0,
    img: golden_teeth,
  },
  {
    title: "Beard",
    probability: 7,
    gang: "All",
    rarity: 1,
    img: beard,
  },
  {
    title: "Blood",
    probability: 6,
    gang: "All",
    rarity: 1,
    img: blood,
  },
  {
    title: "Tounge Out",
    probability: 4,
    gang: "All",
    rarity: 2,
    img: tounge_out,
  },
  {
    title: "Grimace",
    probability: 3,
    gang: "All",
    rarity: 2,
    img: grimace,
  },
  {
    title: "Evil Smile",
    probability: 2,
    gang: "All",
    rarity: 3,
    img: evil_smile,
  },
  {
    title: "No Teeth",
    probability: 2,
    gang: "All",
    rarity: 3,
    img: no_teeth,
  },
  {
    title: "Diamond Teeh",
    probability: 0.5,
    gang: "All",
    rarity: 4,
    img: diamond_teeh,
  },
];

const Attributemouth = () => {
  return (
    <div>
      <ul>
        <CarouselProvider
          totalSlides={mouth.length}
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
              {mouth.map((background) => (
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

export default Attributemouth;
