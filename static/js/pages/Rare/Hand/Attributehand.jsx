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

import axe from "./hand/axe.png";
import banknotes from "./hand/banknotes.png";
import bereta from "./hand/bereta.png";
import chinese_chopstick from "./hand/chinese chopstick.png";
import chiuahua from "./hand/chiuahua.png";
import crowbar from "./hand/crowbar.png";
import drug_bag from "./hand/drug bag.png";
import expensive_car_key from "./hand/expensive car key.png";
import fuck_hand from "./hand/fuck hand.png";
import gasoline from "./hand/gasoline.png";
import graphic_card from "./hand/graphic card.png";
import hand_carrot from "./hand/hand carrot.png";
import hand_vodka from "./hand/hand vodka.png";
import kalachnikov from "./hand/kalachnikov.png";
import nunchaku from "./hand/nunchaku.png";
import pickaxe from "./hand/pickaxe.png";
import piz_tower from "./hand/piz tower.png";
import rocket_launcher from "./hand/rocket launcher.png";
import saber from "./hand/saber.png";
import shotgun from "./hand/shotgun.png";
import shuriken from "./hand/shuriken.png";
import silencer from "./hand/silencer.png";
import skull from "./hand/skull.png";
import treasure_map from "./hand/treasure map.png";
import uzi from "./hand/uzi.png";
import ww2_hand_grenade from "./hand/ww2 hand grenade.png";
import nothin from "./hand/nothin.png";

import OneSlide from "../Slide";

const hand = [
  {
    title: "Nothing",
    probability: 40,
    gang: "All",
    rarity: 0,
    img: nothin,
  },
  {
    title: "Hand Carrot",
    probability: 7,
    gang: "All",
    rarity: 1,
    img: hand_carrot,
  },
  {
    title: "Gasoline",
    probability: 5,
    gang: "All",
    rarity: 2,
    img: gasoline,
  },
  {
    title: "Crowbar",
    probability: 5,
    gang: "All",
    rarity: 2,
    img: crowbar,
  },
  {
    title: "Banknotes",
    probability: 4,
    gang: "All",
    rarity: 2,
    img: banknotes,
  },
  {
    title: "Bereta",
    probability: 3.75,
    gang: "Mafia",
    rarity: 2,
    img: bereta,
  },
  {
    title: "Uzi",
    probability: 3.75,
    gang: "Mafia",
    rarity: 2,
    img: uzi,
  },
  {
    title: "Nunchaku",
    probability: 3.75,
    gang: "Yakuza",
    rarity: 2,
    img: nunchaku,
  },
  {
    title: "Axe",
    probability: 3.75,
    gang: "Blatzva",
    rarity: 2,
    img: axe,
  },
  {
    title: "Graphic Card",
    probability: 2.5,
    gang: "All",
    rarity: 2,
    img: graphic_card,
  },
  {
    title: "Skull",
    probability: 2,
    gang: "All",
    rarity: 3,
    img: skull,
  },
  {
    title: "Expensive Car Key",
    probability: 2,
    gang: "All",
    rarity: 3,
    img: expensive_car_key,
  },
  {
    title: "Silencer",
    probability: 2,
    gang: "Mafia",
    rarity: 3,
    img: silencer,
  },
  {
    title: "Drug Bag",
    probability: 2,
    gang: "Cartel",
    rarity: 3,
    img: drug_bag,
  },
  {
    title: "Chinese Chopstick",
    probability: 2,
    gang: "Yakuza",
    rarity: 3,
    img: chinese_chopstick,
  },
  {
    title: "WW2 Hand Grenade",
    probability: 2,
    gang: "Blatzva",
    rarity: 3,
    img: ww2_hand_grenade,
  },
  {
    title: "Shotgun",
    probability: 1.25,
    gang: "Mafia",
    rarity: 3,
    img: shotgun,
  },
  {
    title: "Rocket Launcher",
    probability: 1.25,
    gang: "Cartel",
    rarity: 3,
    img: rocket_launcher,
  },
  {
    title: "Saber",
    probability: 1.25,
    gang: "Yakuza",
    rarity: 3,
    img: saber,
  },
  {
    title: "Kalachnikov",
    probability: 1.25,
    gang: "Blatzva",
    rarity: 3,
    img: kalachnikov,
  },
  {
    title: "Fuck Hand",
    probability: 1,
    gang: "All",
    rarity: 3,
    img: fuck_hand,
  },
  {
    title: "Treasure Map",
    probability: 1,
    gang: "All",
    rarity: 3,
    img: treasure_map,
  },
  {
    title: "Chiuahua",
    probability: 0.5,
    gang: "All",
    rarity: 4,
    img: chiuahua,
  },
  {
    title: "Piz Tower",
    probability: 0.5,
    gang: "Mafia",
    rarity: 4,
    img: piz_tower,
  },
  {
    title: "Pickaxe",
    probability: 0.5,
    gang: "Cartel",
    rarity: 4,
    img: pickaxe,
  },
  {
    title: "Shuriken",
    probability: 0.5,
    gang: "Yakuza",
    rarity: 4,
    img: shuriken,
  },
  {
    title: "Hand Vodka",
    probability: 0.5,
    gang: "Blatzva",
    rarity: 4,
    img: hand_vodka,
  },
];

const Attributehand = () => {
  return (
    <div>
      <ul>
        <CarouselProvider
          totalSlides={hand.length}
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
              {hand.map((background) => (
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

export default Attributehand;
