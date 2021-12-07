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

import arbitrum_shirt from "./clothes/arbitrum shirt.png";
import astronaut_suit from "./clothes/astronaut suit.png";
import basketball_jersey from "./clothes/basketball jersey.png";
import black_open_shirt from "./clothes/black open shirt.png";
import black_suit_mafia from "./clothes/black suit mafia.png";
import blue_suit_mafia from "./clothes/blue suit mafia.png";
import gold_body from "./clothes/gold body.png";
import gucci_jacket from "./clothes/gucci jacket.png";
import gun_holster from "./clothes/gun holster.png";
import half_samurai_clothes from "./clothes/half samurai clothes.png";
import hype_beast_tshirt from "./clothes/hype beast tshirt.png";
import khaki_shirt_open from "./clothes/khaki shirt open.png";
import lab_coat from "./clothes/lab coat.png";
import leather_jacket from "./clothes/leather jacket.png";
import male_kimono from "./clothes/male kimono.png";
import military_uniform from "./clothes/military uniform.png";
import poncho from "./clothes/poncho.png";
import prison_clothes from "./clothes/prison clothes.png";
import shirt_maroon_vest from "./clothes/shirt maroon vest.png";
import tshirt_with_avax from "./clothes/tshirt avax logo.png";
import tshirt_with_solana from "./clothes/t shirt with solana.png";
import tshirt from "./clothes/tshirt.png";
import white_shirt from "./clothes/white shirt.png";
import white_suit_mafia from "./clothes/white suit mafia.png";
import yellow_suit from "./clothes/yellow suit.png";
import nothin from "./clothes/nothin.png";

import OneSlide from "../Slide";

const clothes = [
  {
    title: "T-Shirt",
    probability: 12,
    gang: "All",
    rarity: 0,
    img: tshirt,
  },
  {
    title: "Black Open Shirt",
    probability: 9,
    gang: "All",
    rarity: 0,
    img: black_open_shirt,
  },
  {
    title: "Khaki Shirt Open",
    probability: 8,
    gang: "All",
    rarity: 0,
    img: khaki_shirt_open,
  },
  {
    title: "White Shirt",
    probability: 7,
    gang: "All",
    rarity: 1,
    img: white_shirt,
  },
  {
    title: "Basketball Jersey",
    probability: 7,
    gang: "All",
    rarity: 1,
    img: basketball_jersey,
  },
  {
    title: "Prison Clothes",
    probability: 6,
    gang: "All",
    rarity: 1,
    img: prison_clothes,
  },
  {
    title: "Shirt Maroon Vest",
    probability: 6,
    gang: "All",
    rarity: 1,
    img: shirt_maroon_vest,
  },
  {
    title: "Arbitrum T-Shirt",
    probability: 5,
    gang: "All",
    rarity: 2,
    img: arbitrum_shirt,
  },
  {
    title: "Hype Beast T-shirt",
    probability: 5,
    gang: "All",
    rarity: 2,
    img: hype_beast_tshirt,
  },
  {
    title: "Astronaut Suit",
    probability: 4,
    gang: "All",
    rarity: 2,
    img: astronaut_suit,
  },
  {
    title: "No Clothes",
    probability: 4,
    gang: "All",
    rarity: 2,
    img: nothin,
  },
  {
    title: "Lab Coat",
    probability: 3,
    gang: "All",
    rarity: 2,
    img: lab_coat,
  },
  {
    title: "Black Suit Mafia",
    probability: 2.5,
    gang: "Mafia",
    rarity: 2,
    img: black_suit_mafia,
  },
  {
    title: "Yellow Suit Mafia",
    probability: 2.5,
    gang: "Cartel",
    rarity: 2,
    img: yellow_suit,
  },
  {
    title: "Blue Suit Mafia",
    probability: 2.5,
    gang: "Yakuza",
    rarity: 2,
    img: blue_suit_mafia,
  },
  {
    title: "White Suit Mafia",
    probability: 2.5,
    gang: "Blatzva",
    rarity: 2,
    img: white_suit_mafia,
  },
  {
    title: "Gun Holster",
    probability: 2.5,
    gang: "Blatzva - Cartel",
    rarity: 2,
    img: gun_holster,
  },
  {
    title: "Leather Jacket",
    probability: 1.75,
    gang: "Mafia",
    rarity: 3,
    img: leather_jacket,
  },
  {
    title: "Poncho",
    probability: 1.75,
    gang: "Cartel",
    rarity: 3,
    img: poncho,
  },
  {
    title: "Kimono",
    probability: 1.75,
    gang: "Yakuza",
    rarity: 3,
    img: male_kimono,
  },
  {
    title: "Gold Body",
    probability: 1,
    gang: "All",
    rarity: 3,
    img: gold_body,
  },
  {
    title: "T-shirt With Avax",
    probability: 1,
    gang: "All",
    rarity: 3,
    img: tshirt_with_avax,
  },
  {
    title: "T-shirt With Solana",
    probability: 1,
    gang: "All",
    rarity: 3,
    img: tshirt_with_solana,
  },
  {
    title: "Gucci Jacket",
    probability: 0.75,
    gang: "Mafia",
    rarity: 4,
    img: gucci_jacket,
  },
  {
    title: "Half Samurai Clothes",
    probability: 0.75,
    gang: "Yakuza",
    rarity: 4,
    img: half_samurai_clothes,
  },
  {
    title: "Military Uniform",
    probability: 0.75,
    gang: "Blatzva",
    rarity: 4,
    img: military_uniform,
  },
];

const Attributeclothes = () => {
  return (
    <div>
      <ul>
        <CarouselProvider
          totalSlides={clothes.length}
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
              {clothes.map((background) => (
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

export default Attributeclothes;
