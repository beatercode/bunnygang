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

import eyes_per_eye from "./eyes/3 eyes per eye.png";
import glasses from "./eyes/80's glasses.png";
import basic_eye from "./eyes/basic eye.png";
import black_small_glasses from "./eyes/black small glasses.png";
import bloody_eyes from "./eyes/bloody eyes.png";
import cat_eyes from "./eyes/cat eyes.png";
import closed_eye_tattoo from "./eyes/closed eye tattoo.png";
import cyborg_eye from "./eyes/cyborg eye.png";
import cyclops from "./eyes/cyclops.png";
import drunken_eye from "./eyes/drunken eye.png";
import eyepatch from "./eyes/eyepatch.png";
import heterochromia from "./eyes/heterochromia.png";
import laser_eye from "./eyes/laser eye.png";
import monocle from "./eyes/monocle.png";
import nightmare_eye from "./eyes/nightmare eye.png";
import one_eyed_scar from "./eyes/one eyed scar.png";
import orbital_eye from "./eyes/orbital eye.png";
import psycedelic_eyes from "./eyes/psycedelic eyes.png";
import scar from "./eyes/scar.png";
import wink from "./eyes/wink.png";

import OneSlide from "../Slide";

const eyes = [
  {
    title: "Basic Eyes",
    probability: 30,
    gang: "All",
    rarity: 0,
    img: basic_eye,
  },
  {
    title: "Cat Eyes",
    probability: 8,
    gang: "All",
    rarity: 0,
    img: cat_eyes,
  },
  {
    title: "Heterochromia",
    probability: 8,
    gang: "All",
    rarity: 0,
    img: heterochromia,
  },
  {
    title: "Cyborg eyes",
    probability: 7,
    gang: "All",
    rarity: 1,
    img: cyborg_eye,
  },
  {
    title: "Closed Eye Tattoo",
    probability: 6,
    gang: "All",
    rarity: 1,
    img: closed_eye_tattoo,
  },
  {
    title: "Monocle",
    probability: 5,
    gang: "All",
    rarity: 2,
    img: monocle,
  },
  {
    title: "Bloody Eyes",
    probability: 4,
    gang: "All",
    rarity: 2,
    img: bloody_eyes,
  },
  {
    title: "Cyclops",
    probability: 4,
    gang: "All",
    rarity: 2,
    img: cyclops,
  },
  {
    title: "Black Small Glasses",
    probability: 3.75,
    gang: "Mafia",
    rarity: 2,
    img: black_small_glasses,
  },
  {
    title: "Drunken Eyes",
    probability: 3.75,
    gang: "Cartel",
    rarity: 2,
    img: drunken_eye,
  },
  {
    title: "Scary Eyes",
    probability: 3.75,
    gang: "Yakuza",
    rarity: 2,
    img: scar,
  },
  {
    title: "Eyepatch",
    probability: 3.75,
    gang: "All",
    rarity: 2,
    img: eyepatch,
  },
  {
    title: "Psycedelic Eyes",
    probability: 3,
    gang: "All",
    rarity: 2,
    img: psycedelic_eyes,
  },
  {
    title: "Orbital Eyes",
    probability: 2.5,
    gang: "All",
    rarity: 2,
    img: orbital_eye,
  },
  {
    title: "Laser Eyes",
    probability: 1.5,
    gang: "All",
    rarity: 3,
    img: laser_eye,
  },
  {
    title: "Wink",
    probability: 1.25,
    gang: "Mafia",
    rarity: 3,
    img: wink,
  },
  {
    title: "80's Glasses",
    probability: 1.25,
    gang: "Cartel",
    rarity: 3,
    img: glasses,
  },
  {
    title: "One Eye Scar",
    probability: 1.25,
    gang: "Yakuza",
    rarity: 3,
    img: one_eyed_scar,
  },
  {
    title: "3 Eyes Per Eye",
    probability: 1.25,
    gang: "Mafia",
    rarity: 3,
    img: eyes_per_eye,
  },
  {
    title: "Nightmare Eye",
    probability: 1,
    gang: "Yakuza",
    rarity: 3,
    img: nightmare_eye,
  },
];

const Attributeeyes = () => {
  return (
    <div>
      <ul>
        <CarouselProvider
          totalSlides={eyes.length}
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
              {eyes.map((background) => (
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

export default Attributeeyes;
