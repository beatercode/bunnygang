import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/data/dataActions";
import * as s from "../styles/globalStyles";
import metadata from "../metadata/_metadata.json";
import axios from "axios";
import MintedDialog from "./MintedDialog";

/**
 * Mint a certain amount of NFTs
 * Upload the metadata on the fly to IPFS
 * Uses a local ../metadata/_metadata.json file listing all the metadata
 * @param {number} amountToMint Amount of NFT to mint from the contract
 */
const MintButton = ({ amountToMint = 1 }) => {
	const dispatch = useDispatch();
	const blockchain = useSelector((state) => state.blockchain);
	// const data = useSelector((state) => state.data);

	const [minting, setMinting] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [feedback, setFeedback] = useState("");
	const [dialogOpen, setDialogOpen] = useState(false);
	const [lastMintedImage, setLastMintedImage] = useState(null);

	const API_BASE_URL = "https://api.bunnygang.art/api/bunnies";

	const username = "admin";
	const password = "bunnyganggang";

	const token = Buffer.from(`${username}:${password}`, "utf8").toString(
		"base64"
	);

	const postEvent = (_event) => {
		const minted_id = _event.returnValues.id;

		const bunny_metadata = metadata.bunnies[minted_id - 4]
			? metadata.bunnies[minted_id - 4]
			: null;

		if (!bunny_metadata) return;

		// POST request
		axios
			.post(API_BASE_URL, bunny_metadata, {
				headers: {
					// authorization: "Bearer ",
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: `Basic ${token}`,
				},
			})
			.then((res) => {
				setLastMintedImage(bunny_metadata.image);
			});
	};

	/**
	 * Minting Function : calls the smart contract mint method and update the state
	 * Post the minted metadatas to the API
	 */
	const mintAndPostMetadata = (_amount) => {
		blockchain.smartContract.methods
			.mint(blockchain.account, _amount)
			.send({
				from: blockchain.account,
				value: blockchain.web3.utils.toWei(
					(0.077 * _amount).toString(),
					"ether"
				),
			})
			.once("error", (err) => {
				console.error(err);
				setMinting(false);
				setFeedback("Error ❗");
			})
			.then((receipt) => {
				setMinting(false);
				// console.log(receipt);
				// POST the corresponding metadata to the API
				if (typeof receipt.events.BunnyCreated !== Array) {
					postEvent(receipt.events.BunnyCreated);
				} else {
					for (const event of receipt.events.BunnyCreated) {
						postEvent(event);
					}
				}

				dispatch(fetchData(blockchain.account));
				// setFeedback("Successfully minted your NFT ❤");
				setDialogOpen(true);
			});
	};

	useEffect(() => {
		if (blockchain.account !== "" && blockchain.smartContract !== null) {
			dispatch(fetchData(blockchain.account));
		}
	}, [blockchain.account, blockchain.smartContract, dispatch]);

	return (
		<>
			<s.PrimaryButton
				disabled={minting}
				style={{ borderRadius: "4px" }}
				onClick={(e) => {
					e.preventDefault();
					setMinting(true);
					mintAndPostMetadata(amountToMint);
				}}>
				{!minting ? "MINT YOUR BUNNY" : "MINTING..."}
			</s.PrimaryButton>
			{/* <s.SpacerXSmall />
			<s.TextDescription style={{ textAlign: "center" }}>
				{feedback}
			</s.TextDescription> */}

			<MintedDialog
				isOpen={dialogOpen}
				mintedImage={lastMintedImage}
				amountMinted={amountToMint}
				onClose={() => setDialogOpen(false)}
			/>
		</>
	);
};

export default MintButton;
