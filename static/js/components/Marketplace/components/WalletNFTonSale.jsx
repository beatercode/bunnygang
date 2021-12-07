import React, { useState } from "react";
import * as g from "../../../styles/globalStyles";
import * as s from "./styles";
import { Center, Text } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import logo from "./image/eth_logo.png";
import { Button } from "@chakra-ui/button";

const WalletNFTonSale = ({ metadata, itemId, price = 0, onDelisted }) => {
	const marketplace = useSelector((state) => state.marketplace);
	const blockchain = useSelector((state) => state.blockchain);
	const collection = useSelector((state) => state.collection);

	const [delisting, setDelisting] = useState(false);

	const imageSrc =
		metadata.image?.split("ipfs://").length > 1
			? "https://ipfs.infura.io/ipfs/" + metadata?.image.split("ipfs://")[1]
			: metadata?.image;

	const delistNFT = async () => {
		try {
			// const collectionContract = blockchain.web3.eth.Contract();

			await marketplace.smartContract.methods
				.delistMarketItem(collection.collectionContract.options.address, itemId)
				.send({ from: blockchain.account });

			onDelisted();

			setDelisting(false);
		} catch (error) {
			console.error(error);
			setDelisting(false);
			// Give some error feedback
		}
	};

	return (
		<>
			<s.token>
				<s.tokenImage>
					<s.cadre>
						<img
							src={imageSrc}
							alt='NFT Display'
							style={{
								width: "auto",
								height: "auto",
								maxWidth: "100%",
								maxHeight: "100%",
								borderRadius: "5px",
								alignItems: "center",
								margin: "auto",
								overflow: "hidden",
							}}
						/>
					</s.cadre>
				</s.tokenImage>

				<s.token_details>
					<Center>
						<s.titlef>{metadata.name}</s.titlef>
					</Center>
					<g.SpacerXSmall />
					<Center>
						<Text align='center' color={"var(--white)"}>
							{metadata.description}
						</Text>
					</Center>
					<g.SpacerSmall />
					<s.price>
						<Center>
							<s.price_cont> {price / 1e18} </s.price_cont>
							<s.picture_cont>
								<img
									src={logo}
									alt='price'
									style={{
										width: "auto",
										height: "auto",
										maxWidth: "70%",
										maxHeight: "100%",
										borderRadius: "5px",
										alignItems: "center",
										margin: "auto",
										overflow: "hidden",
									}}
								/>
							</s.picture_cont>
						</Center>
					</s.price>
				</s.token_details>
				<Button
					disabled={delisting}
					float='right'
					borderRadius='full'
					transform='translateY(-45px)'
					onClick={async (e) => {
						e.preventDefault();
						setDelisting(true);
						await delistNFT();
					}}>
					Delist
				</Button>
			</s.token>
		</>
	);
};

export default WalletNFTonSale;
