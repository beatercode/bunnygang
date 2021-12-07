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

import basement_money from "./background/basement money.png";
import basil from "./background/basil.png";
import Brick from "./background/Brick.png";
import bw_building from "./background/bw building.png";
import casino from "./background/casino.png";
import cristo from "./background/cristo.png";
import psycedelic from "./background/psycedelic.png";
import rainbow from "./background/rainbow.png";
import prison from "./background/prison.png";
import pagoda from "./background/pagoda.png";
import mug_shot from "./background/mug shot.png";
import moonlight from "./background/moonlight.png";
import japanese_traditional_house from "./background/japanese traditional house.png";
import james_bond from "./background/james bond.png";
import graffiti from "./background/graffiti.png";
import sistine from "./background/sistine.png";
import space from "./background/space.png";
import strip from "./background/strip.png";
import submarine from "./background/submarine.png";
import sunset from "./background/sunset.png";
import cherry_blossom from "./background/cherry blossom.png";
import villa from "./background/villa.png";
import wallstreet from "./background/wallstreet.png";
import warzone from "./background/warzone.png";
import weapon_market from "./background/weapon market.png";

import OneSlide from "../Slide";

const backgrounds = [
  {
    title: "Brick",
    probability: 10,
    gang: "All",
    rarity: 0,
    img: Brick,
  },
  {
    title: "Mug Shot",
    probability: 8,
    gang: "All",
    rarity: 0,
    img: mug_shot,
  },
  {
    title: "graffiti",
    probability: 8,
    gang: "All",
    rarity: 0,
    img: graffiti,
  },
  {
    title: "Warzone",
    probability: 8,
    gang: "All",
    rarity: 0,
    img: warzone,
  },
  {
    title: "City Sky View",
    probability: 7,
    gang: "All",
    rarity: 1,
    img: bw_building,
  },
  {
    title: "James Bond",
    probability: 7,
    gang: "All",
    rarity: 1,
    img: james_bond,
  },
  {
    title: "Space",
    probability: 6,
    gang: "All",
    rarity: 1,
    img: space,
  },
  {
    title: "Rainbow",
    probability: 6,
    gang: "All",
    rarity: 1,
    img: rainbow,
  },
  {
    title: "Moonlight",
    probability: 6,
    gang: "All",
    rarity: 1,
    img: moonlight,
  },
  {
    title: "Sunset",
    probability: 5,
    gang: "All",
    rarity: 2,
    img: sunset,
  },
  {
    title: "Wallstreet",
    probability: 4,
    gang: "All",
    rarity: 2,
    img: wallstreet,
  },
  {
    title: "Psycedelic",
    probability: 3,
    gang: "All",
    rarity: 2,
    img: psycedelic,
  },
  {
    title: "Weapon Market",
    probability: 2.5,
    gang: "Mafia",
    rarity: 2,
    img: weapon_market,
  },
  {
    title: "Villa",
    probability: 2.5,
    gang: "Cartel",
    rarity: 2,
    img: villa,
  },
  {
    title: "Blatzva",
    probability: 2.5,
    gang: "Cartel",
    rarity: 2,
    img: prison,
  },
  {
    title: "Pagoda",
    probability: 2.5,
    gang: "Yakuza",
    rarity: 2,
    img: pagoda,
  },
  {
    title: "Strip Club",
    probability: 2,
    gang: "All",
    rarity: 3,
    img: strip,
  },
  {
    title: "Casino",
    probability: 1.75,
    gang: "Mafia",
    rarity: 3,
    img: casino,
  },
  {
    title: "Basement Money",
    probability: 1.75,
    gang: "Cartel",
    rarity: 3,
    img: basement_money,
  },
  {
    title: "Japanese Traditional House",
    probability: 1.75,
    gang: "Yakuza",
    rarity: 3,
    img: japanese_traditional_house,
  },
  {
    title: "Submarine",
    probability: 1.75,
    gang: "Blatzva",
    rarity: 3,
    img: submarine,
  },
  {
    title: "Sixtine Chapel",
    probability: 0.75,
    gang: "Mafia",
    rarity: 4,
    img: sistine,
  },
  {
    title: "Cristo",
    probability: 0.75,
    gang: "Cartel",
    rarity: 4,
    img: cristo,
  },
  {
    title: "Cherry Blossom",
    probability: 0.75,
    gang: "Yakuza",
    rarity: 4,
    img: cherry_blossom,
  },
  {
    title: "Basil",
    probability: 0.75,
    gang: "Blatzva",
    rarity: 4,
    img: basil,
  },
];

const Attributebackground = () => {
  return (
    <div>
      <ul>
        <CarouselProvider
          totalSlides={backgrounds.length}
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
              {backgrounds.map((background) => (
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

export default Attributebackground;
