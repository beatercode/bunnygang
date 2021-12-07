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

import afro_hair from "./hair/afro hair.png";
import angel_halo from "./hair/angel halo.png";
import arbitrum_cap from "./hair/arbitrum cap.png";
import astro_helm from "./hair/astro helm.png";
import bane_mask from "./hair/bane mask.png";
import beret from "./hair/beret.png";
import cap from "./hair/cap.png";
import chapka from "./hair/chapka.png";
import headband from "./hair/headband.png";
import illu from "./hair/illu.png";
import kings_crown from "./hair/king's crown.png";
import magic_hat from "./hair/magic hat.png";
import mcd_hat from "./hair/mcd hat.png";
import mexican_hat from "./hair/mexican hat.png";
import prison_hat from "./hair/prison hat.png";
import punk_hair from "./hair/punk hair.png";
import samurai_hair from "./hair/samurai hair.png";
import sleek_hair from "./hair/sleek hair.png";
import OneSlide from "../Slide";

const hair = [
  {
    title: "Cap",
    probability: 8,
    gang: "All",
    rarity: 0,
    img: cap,
  },
  {
    title: "Prison Hat",
    probability: 8,
    gang: "All",
    rarity: 0,
    img: prison_hat,
  },
  {
    title: "Arbitrum Cap",
    probability: 8,
    gang: "All",
    rarity: 0,
    img: arbitrum_cap,
  },
  {
    title: "Headband",
    probability: 7,
    gang: "All",
    rarity: 1,
    img: headband,
  },
  {
    title: "Kings Crown",
    probability: 6,
    gang: "All",
    rarity: 1,
    img: kings_crown,
  },
  {
    title: "Magic Hat",
    probability: 6,
    gang: "All",
    rarity: 1,
    img: magic_hat,
  },
  {
    title: "Afro Hair",
    probability: 4,
    gang: "All",
    rarity: 2,
    img: afro_hair,
  },
  {
    title: "Punk Hair",
    probability: 3,
    gang: "All",
    rarity: 2,
    img: punk_hair,
  },
  {
    title: "Sleek Hair",
    probability: 3,
    gang: "Mafia",
    rarity: 2,
    img: sleek_hair,
  },
  {
    title: "Mexican Hat",
    probability: 3,
    gang: "Cartel",
    rarity: 2,
    img: mexican_hat,
  },
  {
    title: "Samurai Hair",
    probability: 3,
    gang: "Yakuza",
    rarity: 2,
    img: samurai_hair,
  },
  {
    title: "Angel Halo",
    probability: 2.5,
    gang: "All",
    rarity: 2,
    img: angel_halo,
  },
  {
    title: "Illuminati",
    probability: 2,
    gang: "All",
    rarity: 3,
    img: illu,
  },
  {
    title: "Mcdonald's Hat",
    probability: 2,
    gang: "All",
    rarity: 3,
    img: mcd_hat,
  },
  {
    title: "Chapka",
    probability: 1.75,
    gang: "Blatzva",
    rarity: 3,
    img: chapka,
  },
  {
    title: "Berêt",
    probability: 1.25,
    gang: "Blatzva",
    rarity: 3,
    img: beret,
  },
  {
    title: "Bane Mask",
    probability: 1,
    gang: "All",
    rarity: 3,
    img: bane_mask,
  },
  {
    title: "Astronaut Helmet",
    probability: 0.5,
    gang: "All",
    rarity: 4,
    img: astro_helm,
  },
];

const Attributehair = () => {
  return (
    <div>
      <ul>
        <CarouselProvider
          totalSlides={hair.length}
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
              {hair.map((background) => (
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

export default Attributehair;
