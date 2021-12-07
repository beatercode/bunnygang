import React, { useState } from "react";
import Popupsell from "./Popupsell";
import * as g from "../../../styles/globalStyles";
import * as s from "./styles";
import { Center, Text } from "@chakra-ui/layout";
import { fetchCollectionData } from "../../../redux/marketplace/collectionActions";
import { useDispatch } from "react-redux";

const WalletNFT = ({ metadata, onListed, collection, tokenId }) => {
	const [dialogOpen, setDialogOpen] = useState(false);

	const dispatch = useDispatch();

	const imageSrc =
		metadata?.image?.split("ipfs://").length > 1
			? "https://ipfs.infura.io/ipfs/" + metadata?.image.split("ipfs://")[1]
			: metadata?.image;

	return (
		<>
			<s.token
				onClick={() => {
					setDialogOpen(true);
					dispatch(fetchCollectionData(collection));
				}}>
				<Popupsell
					isOpen={dialogOpen}
					onClose={() => setDialogOpen(false)}
					tokenId={tokenId}
					metadata={metadata}
					onListed={() => {
						setDialogOpen(false);
						onListed();
					}}
				/>
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
						<s.titlef>{metadata?.name}</s.titlef>
					</Center>
					<g.SpacerXSmall />
					<Center>
						<Text align='center' color={"var(--white)"}>
							{metadata?.description}
						</Text>
					</Center>
					<g.SpacerSmall />
					{/* <s.price>
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
      </s.price> */}
				</s.token_details>
			</s.token>
		</>
	);
};

export default WalletNFT;
