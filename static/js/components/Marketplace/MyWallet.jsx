import { Center, Text } from "@chakra-ui/layout";
import React from "react";
import { Connect } from "..";
import { useSelector } from "react-redux";
import * as s from "../../styles/globalStyles";
import WalletNFTs from "./components/WalletNFTs";

const MyWallet = () => {
	const blockchain = useSelector((state) => state.blockchain);

	return (
		<div>
			<Center>
				<Text
					as={"span"}
					position={"relative"}
					fontSize='7xl'
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
					My NFT Wallet
				</Text>
			</Center>
			{blockchain.account === "" ||
			blockchain.smartContract === null ||
			!blockchain.account ||
			!blockchain.smartContract ? (
				<>
					<s.SpacerSmall />
					<Center>
						<s.TextDescription>
							Connect your wallet to see your NFTs
						</s.TextDescription>
					</Center>
					<s.SpacerMedium />
					<Connect />
				</>
			) : (
				<WalletNFTs />
			)}
		</div>
	);
};

export default MyWallet;
