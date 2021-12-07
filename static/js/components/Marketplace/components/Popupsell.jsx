import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Center, Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { SpacerMedium, SpacerSmall } from "../../../styles/globalStyles";
import * as s from "./styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { connect } from "../../../redux/blockchain/blockchainActions";
import Infolist from "./Infolist";
import ethlogo from "./image/eth_logo.png";
import {
	Stack,
	InputRightElement,
	NumberInputField,
	NumberInput,
	InputGroup,
} from "@chakra-ui/react";
import Inforoyalties from "./Inforoyalties";

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

const Popupsell = ({ metadata, isOpen, onClose, tokenId, onListed }) => {
	const dispatch = useDispatch();

	const marketplace = useSelector((state) => state.marketplace);
	const collection = useSelector((state) => state.collection);
	const blockchain = useSelector((state) => state.blockchain);

	const [listingPrice, setListingPrice] = useState(0);

	const [listing, setListing] = useState(false);

	const listNFT = async () => {
		try {
			await collection.collectionContract.methods
				.approve(marketplace.smartContract.options.address, tokenId)
				.send({ from: blockchain.account });

			// eslint-disable-next-line no-unused-vars
			const receipt = await marketplace.smartContract.methods
				.createMarketItem(
					collection.collectionContract.options.address,
					tokenId,
					blockchain.web3.utils.toWei(listingPrice.toString(), "ether")
				)
				.send({
					from: blockchain.account,
				});

			onListed();

			setListing(false);
		} catch (error) {
			console.error(error);
			setListing(false);
			// Give some error feedback
		}
	};

	const imageSrc =
		metadata?.image?.split("ipfs://").length > 1
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
							<s.Titlepopup>Collection and Item Info</s.Titlepopup>
						</Center>
						<SpacerMedium />
						<Infolist
							volume={collection.volume}
							floorPrice={collection.floorPrice / 1e18}
							lastprice='?'
						/>
						<SpacerSmall />
						<Center>
							<s.Titlepopup>Listing Price</s.Titlepopup>
						</Center>
						<SpacerSmall />

						<Stack>
							<InputGroup>
								<InputRightElement
									pointerEvents='none'
									children={<Image src={ethlogo} height='30px' margin='5px' />}
								/>
								<NumberInput
									min='0'
									width='100%'
									value={listingPrice}
									onChange={(value) => setListingPrice(value)}>
									<NumberInputField />
								</NumberInput>
							</InputGroup>
						</Stack>
						<SpacerMedium />
						<Inforoyalties
							agoraroyalties={`${marketplace.saleFee / 100} %`}
							artistroyalties={`${collection.creatorFee / 100} %`}
						/>

						<Center position='sticky' bottom=' 0'>
							{blockchain.account === "" ||
							blockchain.smartContract === null ||
							!blockchain.account ||
							!blockchain.smartContract ? (
								<Button
									onClick={(e) => {
										e.preventDefault();
										dispatch(connect());
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
								<Button
									disabled={listing}
									onClick={async (e) => {
										e.preventDefault();
										setListing(true);
										await listNFT();
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
									{listing ? "Listing..." : "List Item"}
								</Button>
							)}
						</Center>
					</Modal>
				</Flex>
			</StyledPopup>
		</div>
	);
};

export default Popupsell;
