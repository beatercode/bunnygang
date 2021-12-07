import React from "react";
import Sellerprofile from "./Sellerprofile";
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonNext,
	ButtonBack,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Center, Flex } from "@chakra-ui/react";
import logo from "../../../images/logodark.png";
import banniere from "../../../images/banner.png";
import interro from "../../../images/interro.jpg";
import baninter from "../../../images/degrade.jpg";
import "./styles.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const collections = [
	{
		creator: "The Bunny Gang",
		description:
			"1.332 Algorithmically generated Gangsta Bunnies on Arbitrum.",
		banniere: banniere,
		logo: logo,
		url: "/marketplace/bunnygang",
		contract: "0x091dB4502cbd66492D3e509403Bb7aC721AC9F84"
	},
	{
		creator: "YAY Bears",
		description:
			"8,085 Bear NFTs on Arbitrum. With extra Drip. Kayne West vibe.",
		banniere: "/images/yaybears.png",
		logo: "/images/yaybears_logo.png",
		url: "/marketplace/yaybears",
		contract: "0x53930807383be7139e1da1a758370cd64469ee43"
	},
	{
		creator: "Your collection",
		description: "You want your collection to be featured here? Contact us.",
		banniere: baninter,
		logo: interro,
	},
];

export default class Homecarousel extends React.Component {
	constructor() {
		super();
		this.handleWindowResize = this.handleWindowResize.bind(this);
		this.setTotalSlides = this.setTotalSlides.bind(this);
		this.state = {
			totalSlides: this.computeTotalSlides(),
		};
	}

	componentWillUnmount() {
		window.clearTimeout(this.throttle);
		window.removeEventListener("resize", this.handleWindowResize, false);
	}

	componentDidMount() {
		window.addEventListener("resize", this.handleWindowResize, false);
	}

	computeTotalSlides() {
		const width = Math.max(
			document.documentElement.clientWidth,
			window.innerWidth || 0
		);

		if (width < 768) {
			return 1; // show 1 slides
		} else {
			return 3; // show 3 slides
		}
	}

	setTotalSlides() {
		const totalSlides = this.computeTotalSlides();
		if (this.state.totalSlides !== totalSlides) this.setState({ totalSlides });
	}

	handleWindowResize() {
		window.clearTimeout(this.throttle);
		this.throttle = window.setTimeout(this.setTotalSlides, 400);
	}
	render() {
		return (
			<div>
				<Center>
					<CarouselProvider
						totalSlides={collections.length}
						visibleSlides={this.state.totalSlides}
						naturalSlideWidth={270}
						naturalSlideHeight={370}
						isIntrinsicHeight={true}
						isPlaying={true}
						interval={4000}>
						<Flex>
							<ButtonBack>
								<ChevronLeftIcon boxSize='20' />
							</ButtonBack>
							<Slider classNameTray='slider-tray'>
								{collections.map((collection, n) => (
									<Slide index={n}>
										<Sellerprofile collection={collection} />
									</Slide>
								))}
							</Slider>
							<ButtonNext>
								<ChevronRightIcon boxSize='20' />
							</ButtonNext>
						</Flex>
					</CarouselProvider>
				</Center>
			</div>
		);
	}
}
