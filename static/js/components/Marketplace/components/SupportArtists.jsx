import React from "react";
import * as s from "./styles";
import { SpacerLarge, TextDescription1 } from "../../../styles/globalStyles";
import { Center, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import exclusivecontent from "../../../images/head.gif";
import communitydriven from "../../../images/communitydriven.png";
import designedforthefuture from "../../../images/future.png";

function Supportartists() {
	return (
		<div>
			<Center>
				<s.RaritiesContainer>
					<s.ArtistsContainer>
						<Flex
							gridGap={10}
							flexWrap={"wrap"}
							justifyContent='center'
							alignItems='center'>
							<Flex flex={{ base: "auto", md: "0 0 60%" }}>
								<ul>
									<li>
										<s.Titleartist>Exclusive content</s.Titleartist>
									</li>
									<SpacerLarge />

									<li>
										<TextDescription1>
											Our goal is to support artists through this marketplace.
											Whether they are experienced, novice, known or not, we
											want to make art accessible to all. We therefore only
											accept collections that have real artistic value, and
											bring a new vision to Arbitrum. We will also provide funds
											to support artists from all walks of life who do not have
											the means to share their talent.
										</TextDescription1>
									</li>
								</ul>
							</Flex>
							<Image
								src={exclusivecontent}
								boxSize='300px'
								borderRadius='20px'
							/>
						</Flex>
					</s.ArtistsContainer>
					<SpacerLarge />
					<s.ArtistsContainer>
						<Flex
							gridGap={10}
							flexWrap={"wrap"}
							justifyContent='center'
							alignItems='center'>
							<Image
								src={communitydriven}
								boxSize='300px'
								borderRadius='20px'
							/>
							<Flex flex={{ base: "auto", md: "0 0 60%" }}>
								<ul>
									<li>
										<s.Titleartist>Community driven</s.Titleartist>
									</li>
									<SpacerLarge />

									<li>
										<TextDescription1>
											We believe that our community will be at the center of
											Agora. Indeed, a DAO is planned to make decisions on the
											projects listed on Agora, and many more other decisions.
											Moreover, the fact that only collections approved by the
											Agora team can be listed on the site allows us to avoid
											scams present on open marketplaces. We want to provide a
											safe, reliable and quality platform.
										</TextDescription1>
									</li>
								</ul>
							</Flex>
						</Flex>
					</s.ArtistsContainer>
					<SpacerLarge />
					<s.ArtistsContainer>
						<Flex
							gridGap={10}
							flexWrap={"wrap"}
							justifyContent='center'
							alignItems='center'>
							<Flex flex={{ base: "auto", md: "0 0 60%" }}>
								<ul>
									<li>
										<s.Titleartist>Designed for the future</s.Titleartist>
									</li>
									<SpacerLarge />
									<li>
										<TextDescription1>
											Our vision is to build a tool for the future. We want to
											develop our platform in collaboration with the artists and
											the community. We believe that the future of NFTs lies in
											their quality and not in their quantity. Moreover, our
											contracts are going to be audited, to ensure a safe
											future.
										</TextDescription1>
									</li>
								</ul>
							</Flex>
							<Image
								src={designedforthefuture}
								boxSize='300px'
								borderRadius='20px'
							/>
						</Flex>
					</s.ArtistsContainer>
				</s.RaritiesContainer>
			</Center>
		</div>
	);
}
export default Supportartists;
