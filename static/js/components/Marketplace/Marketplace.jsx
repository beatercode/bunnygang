import React from "react";
import { SpacerLarge } from "../../styles/globalStyles";
import { Heading, Text, Center } from "@chakra-ui/layout";
import Homecarousel from "./components/Homecarousel";
import Textcontainer from "./components/Textcontainer";
import Supportartists from "./components/SupportArtists";

const Marketplace = () => {
	return (
		<div>
			<Center>
				<ul>
					<li>
						<Center>
							<Heading
								lineHeight={1.1}
								fontWeight={600}
								fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
								textAlign='center'
								margin='20px'>
								<Text
									as={"span"}
									position={"relative"}
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
									}}>
									Explore, Collect and Trade NFTs
								</Text>
							</Heading>
						</Center>
					</li>
					<SpacerLarge />
					<li>
						<Center>
							<ul>
								<li>
									<Text
										fontSize='20px'
										color={"var(--light-grey)"}
										textAlign='center'
										margin='20px'>
										First fully fledged Marketplace on Arbitrum. Get quick and
										easy access to verified collections of NFT.
									</Text>
								</li>
								<li>
									<Text
										fontSize='20px'
										color={"var(--light-grey)"}
										textAlign='center'
										margin='20px'>
										The Agora marketplace is in beta. Please use it at your own
										discretion, and report any bug you encounter.
									</Text>
								</li>
							</ul>
						</Center>
					</li>
				</ul>
			</Center>
			<SpacerLarge />
			<Center>
				<ul>
					<li>
						<Homecarousel />
					</li>
					<li>
						<SpacerLarge />
						<SpacerLarge />
					</li>
					<li>
						<Center>
							<Heading
								lineHeight={1.1}
								fontWeight={600}
								fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
								textAlign='center'
								margin='20px'>
								<Text
									as={"span"}
									position={"relative"}
									color={"var(--red)"}
									_after={{
										content: "''",
										width: "full",
										height: "30%",
										position: "absolute",
										bottom: 1,
										left: 0,
										bg: "var(--white)",
										zIndex: -1,
									}}>
									Buy and sell NFTs
								</Text>
							</Heading>
						</Center>
						<SpacerLarge />
						<SpacerLarge />
						<Textcontainer />
					</li>
					<SpacerLarge />
					<SpacerLarge />
					<li>
						<Center>
							<Heading
								lineHeight={1.1}
								fontWeight={600}
								fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
								textAlign='center'
								margin='20px'>
								<Text
									as={"span"}
									position={"relative"}
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
									}}>
									We support the artists
								</Text>
							</Heading>
						</Center>
						<SpacerLarge />
						<SpacerLarge />
						<Supportartists />
					</li>
				</ul>
				<SpacerLarge />
			</Center>
		</div>
	);
};

export default Marketplace;
