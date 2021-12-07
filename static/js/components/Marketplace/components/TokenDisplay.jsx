import React, { useState } from "react";
import * as s from "./styles";
import logo from "./image/eth_logo.png";
import { Center, Text } from "@chakra-ui/layout";
import { SpacerSmall, SpacerXSmall } from "../../../styles/globalStyles";
import BuyPopup from "./Popup";

const TokenDisplay = ({ metadata, price, lastPrice, itemId, onBuy }) => {
	const [dialogOpen, setDialogOpen] = useState(false);

	const imageSrc =
		metadata.image?.split("ipfs://").length > 1
			? "https://ipfs.infura.io/ipfs/" + metadata?.image.split("ipfs://")[1]
			: metadata?.image;

	return (
		<div>
			<BuyPopup
				isOpen={dialogOpen}
				onClose={() => setDialogOpen(false)}
				metadata={metadata}
				itemId={itemId}
				price={price}
				onBuy={() => {
					setDialogOpen(false);
					onBuy();
				}}
			/>{" "}
			<s.token onClick={() => setDialogOpen(true)}>
				<s.tokenImage>
					<s.cadre>
						<img
							src={imageSrc}
							alt='Bunny Hero'
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
						<s.titlef>{metadata?.name}</s.titlef>
					</Center>
					<SpacerXSmall />
					<Center>
						<Text align='center' color={"var(--white)"}>
							{metadata?.description}
						</Text>
					</Center>
					<SpacerSmall />
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
				{lastPrice > 0 && (
					<s.last_price>
						<s.last_price_writing>Last</s.last_price_writing>
						<SpacerXSmall />
						<s.last_price_writing>{lastPrice}</s.last_price_writing>
						<s.picture_cont>
							<img
								src={logo}
								alt='price'
								style={{
									width: "auto",
									height: "auto",
									maxWidth: "80%",
									maxHeight: "100%",
									borderRadius: "5px",
									alignItems: "center",
									margin: "auto",
									overflow: "hidden",
								}}
							/>
						</s.picture_cont>
						{/* {element.lasttrans} */}
					</s.last_price>
				)}
			</s.token>
		</div>
	);
};

export default TokenDisplay;
