/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import * as s from "../../styles/globalStyles";
import * as m from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/data/dataActions";
import Timer from "./Timer";

import { Connect, MintButton } from "../index";
import MintAmountSelector from "./MintAmountSelector";

import heroBunny from "../../images/gif-v1.gif";
import { ChevronDownIcon } from "@chakra-ui/icons";

const MintPanel = () => {
	const dispatch = useDispatch();
	const blockchain = useSelector((state) => state.blockchain);
	const data = useSelector((state) => state.data);

	const [mintAmount, setMintAmount] = useState(1);

	const MAX_SUPPLY = 1332;

	const handleChange = (value) => setMintAmount(value);

	useEffect(() => {
		if (blockchain.account !== "" && blockchain.smartContract !== null) {
			dispatch(fetchData(blockchain.account));
		}
	}, [blockchain.account, blockchain.smartContract, dispatch]);
	return (
		<s.Container jc={"center"} ai={"center"}>
			<m.MintingContainer>
				<m.MintingHero>
					<img
						src={heroBunny}
						alt='Bunny Hero'
						style={{ width: "100%", display: "block" }}
					/>
				</m.MintingHero>
				<m.MintingContent>
					{/* <Timer expiryTimestamp={new Date(1631815200000)} /> */}
					{blockchain.account === "" ||
					blockchain.smartContract === null ||
					!blockchain.account ||
					!blockchain.smartContract ? (
						<>
							<m.Title style={{ margin: "auto", paddingTop: "50px" }}>
								Mint your Bunny
							</m.Title>
							<m.Title style={{ margin: "auto" }}>
								<ChevronDownIcon />
							</m.Title>
							<Connect />
						</>
					) : (
						<>
							<s.SpacerSmall />
							<m.Description>
								Already Members : {data.totalSupply}/{MAX_SUPPLY}
							</m.Description>
							<s.SpacerMedium />
							<m.Description>
								Only {data.price / 1e18}ETH + Gas Fee
							</m.Description>
							<s.SpacerXSmall />
							<m.Description>
								Only 20 bunnies can join the gang at once
							</m.Description>
							<s.SpacerLarge />
							<MintAmountSelector
								handleChange={handleChange}
								mintAmount={mintAmount}
							/>
							<s.SpacerSmall />
							<MintButton amountToMint={mintAmount} />

							<s.SpacerMedium />
						</>
					)}
				</m.MintingContent>
			</m.MintingContainer>
		</s.Container>
	);
};

export default MintPanel;
