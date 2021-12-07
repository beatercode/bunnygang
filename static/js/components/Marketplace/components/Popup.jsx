import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, Grid } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { SpacerMedium } from "../../../styles/globalStyles";
import Attribute from "./Attribute";
import * as s from "./styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { connect } from "../../../redux/blockchain/blockchainActions";
import { fetchMarketplaceData } from "../../../redux/marketplace/marketplaceActions";
import logo from "./image/eth_logo.png";

// import "reactjs-popup/dist/index.css";
//

const Modal = styled.div`
	background-color: #da0037;
	color: white;
	max-width: 90vh;
	max-height: 90vh;
	border-radius: 4px;
	box-shadow: 0 30px 80px 10px rgba(0, 0, 0, 0.2);
	padding: 20px;
	overflow: auto;
`;

const StyledPopup = styled(Popup)`
	/* animation */

	@keyframes anvil {
		0% {
			transform: scale(1) translateY(0px);
			opacity: 0;
			box-shadow: 0 0 0 rgba(241, 241, 241, 0);
		}
		1% {
			transform: scale(0.96) translateY(10px);
			opacity: 0;
			box-shadow: 0 0 0 rgba(241, 241, 241, 0);
		}
		100% {
			transform: scale(1) translateY(0px);
			opacity: 1;
			box-shadow: 0 0 500px rgba(241, 241, 241, 0);
		}
	}
	&-content {
		-webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
	}

	&-overlay {
		background: rgba(0, 0, 0, 0.5);
	}
`;

const BuyPopup = ({ metadata, isOpen, onClose, itemId, price, onBuy }) => {
	const dispatch = useDispatch();

	const marketplace = useSelector((state) => state.marketplace);
	const collection = useSelector((state) => state.collection);
	const blockchain = useSelector((state) => state.blockchain);

	const [buying, setBuying] = useState(false);

	const buyNFT = async () => {
		try {
			// const contract = blockchain.web3.eth.Contract()
			await marketplace.smartContract.methods
				.createMarketSale(collection.collectionContract.options.address, itemId)
				.send({
					from: blockchain.account,
					value: price,
				});

			onBuy();

			setBuying(false);
		} catch (error) {
			console.error(error);
			setBuying(false);
			// Give some error feedback
		}
	};

	const imageSrc =
		metadata.image?.split("ipfs://").length > 1
			? "https://ipfs.infura.io/ipfs/" + metadata?.image.split("ipfs://")[1]
			: metadata?.image;

	return (
		<div>
			<StyledPopup
				open={isOpen}
				closeOnDocumentClick
				onClose={onClose}
				position='center center'>
				<Flex>
					<Modal>
						<Center>
							<s.Titlepopup>{metadata?.name}</s.Titlepopup>
						</Center>
						<SpacerMedium />
						<Center>
							{imageSrc ? (
								<Image
									src={imageSrc}
									boxSize='300px'
									alt='Item'
									objectFit='cover'
									margin='auto'
									rounded={"lg"}
									mb={5}
									boxShadow=' 0 30px 80px 10px rgba(255, 255, 255, 0.2)'
								/>
							) : (
								<Spinner
									size='xl'
									margin='auto'
									thickness='4px'
									speed='0.65s'
									color='white'
								/>
							)}
						</Center>
						<Center>
							<s.Titlepopup>Attributes</s.Titlepopup>
						</Center>
						<s.Attcont>
							{metadata.attributes.map((att, index) => (
								<Attribute
									key={index}
									meta={att.trait_type}
									percent={att.value
										.match(/([^_]+)/g)
										.map(
											(word) =>
												word.charAt(0).toUpperCase() +
												word.toLowerCase().slice(1)
										)
										.join(" ")}
								/>
							))}
						</s.Attcont>
						<Box position='sticky' bottom=' 0'>
							{blockchain.account === "" ||
							blockchain.smartContract === null ||
							!blockchain.account ||
							!blockchain.smartContract ? (
								<Button
									onClick={(e) => {
										e.preventDefault();
										dispatch(connect()).then(() =>
											dispatch(fetchMarketplaceData())
										);
									}}
									w={"full"}
									mt={8}
									bg={"var(--black)"}
									color={"white"}
									rounded={"md"}
									_hover={{
										transform: "translateY(-2px)",
										boxShadow: "lg",
									}}>
									Connect your wallet
								</Button>
							) : (
								<Grid templateColumns='3fr 1fr' gridGap='15px' mt={8}>
									<Button
										disabled={buying}
										onClick={async (e) => {
											e.preventDefault();
											setBuying(true);
											await buyNFT();
										}}
										bg={"var(--black)"}
										width={"full"}
										color={"white"}
										rounded={"md"}
										_hover={{
											transform: "translateY(-2px)",
											boxShadow: "lg",
										}}>
										{buying ? "Buying..." : "Buy Now"}
									</Button>
									<Flex
										bg={"var(--white)"}
										color={"var(--black)"}
										rounded={"md"}
										_hover={{
											transform: "translateY(-2px)",
											boxShadow: "lg",
										}}
										alignItems='center'
										justifyContent='center'
										fontWeight='bold'
										gridGap='25px'>
										Price : {price / 1e18}{" "}
										<Image src={logo} width='15px' height='25px' />
									</Flex>
								</Grid>
							)}
						</Box>
					</Modal>
				</Flex>
			</StyledPopup>
		</div>
	);
};

export default BuyPopup;
