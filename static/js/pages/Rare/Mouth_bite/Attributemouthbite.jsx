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

import bamboo_bite from "./mouth_bite/bamboo bite.png";
import bite_hand_police from "./mouth_bite/bite hand police.png";
import bone from "./mouth_bite/bone.png";
import bubble_gum from "./mouth_bite/bubble gum.png";
import cigarette from "./mouth_bite/cigarette.png";
import cuban_cigar from "./mouth_bite/cuban cigar.png";
import diamond_watch from "./mouth_bite/diamond watch.png";
import golden_pipe from "./mouth_bite/golden pipe.png";
import knives_baitn from "./mouth_bite/knives bait.png";
import kunai from "./mouth_bite/kunai.png";
import lsd_pack from "./mouth_bite/lsd pack.png";
import pasta from "./mouth_bite/pasta.png";
import pizza from "./mouth_bite/pizza.png";
import uranium from "./mouth_bite/uranium.png";
import vodka_bite from "./mouth_bite/vodka bite.png";
import whistle from "./mouth_bite/whistle.png";
import nothin from "./mouth_bite/nothin.png";

import OneSlide from "../Slide";

const backgrounds = [
	{
		title: "Nothing In Mouth",
		probability: 43,
		gang: "All",
		rarity: 0,
		img: nothin,
	},
	{
		title: "Whistle",
		probability: 12.8,
		gang: "All",
		rarity: 0,
		img: whistle,
	},
	{
		title: "Bone",
		probability: 11.5,
		gang: "All",
		rarity: 0,
		img: bone,
	},
	{
		title: "Lsd Pack",
		probability: 4.3,
		gang: "All",
		rarity: 2,
		img: lsd_pack,
	},
	{
		title: "Cigarette",
		probability: 3.2,
		gang: "Mafia",
		rarity: 2,
		img: cigarette,
	},
	{
		title: "Cuban Cigar",
		probability: 3.2,
		gang: "Cartel",
		rarity: 2,
		img: cuban_cigar,
	},
	{
		title: "Knife",
		probability: 3.2,
		gang: "Yakuza",
		rarity: 2,
		img: knives_baitn,
	},
	{
		title: "Vodka Bite",
		probability: 3.2,
		gang: "Blatzva",
		rarity: 2,
		img: vodka_bite,
	},
	{
		title: "Bubble Gum",
		probability: 2.9,
		gang: "All",
		rarity: 2,
		img: bubble_gum,
	},
	{
		title: "Pizza",
		probability: 2.1,
		gang: "Mafia",
		rarity: 3,
		img: pizza,
	},
	{
		title: "Golden Pipe",
		probability: 2.1,
		gang: "Cartel",
		rarity: 3,
		img: golden_pipe,
	},
	{
		title: "Kunai",
		probability: 2.1,
		gang: "Yakuza",
		rarity: 3,
		img: kunai,
	},
	{
		title: "Uranium",
		probability: 2.1,
		gang: "Blatzva",
		rarity: 3,
		img: uranium,
	},
	{
		title: "Pasta",
		probability: 1,
		gang: "Mafia",
		rarity: 3,
		img: pasta,
	},
	{
		title: "Police Hand",
		probability: 1,
		gang: "Cartel",
		rarity: 3,
		img: bite_hand_police,
	},
	{
		title: "Bamboo Bite",
		probability: 1,
		gang: "Yakuza",
		rarity: 3,
		img: bamboo_bite,
	},
	{
		title: "Diamond Watch",
		probability: 1,
		gang: "Blatzva",
		rarity: 3,
		img: diamond_watch,
	},
];

const Attributemouthbite = () => {
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
					interval={4000}>
					<Flex>
						<ButtonBack>
							<ChevronLeftIcon boxSize='20' />
						</ButtonBack>

						<Slider classNameTray='slider-tray'>
							{backgrounds.map((background) => (
								<Slide>
									<OneSlide background={background} />
								</Slide>
							))}
						</Slider>

						<ButtonNext>
							<ChevronRightIcon boxSize='20' />
						</ButtonNext>
					</Flex>
				</CarouselProvider>
			</ul>
		</div>
	);
};

export default Attributemouthbite;
