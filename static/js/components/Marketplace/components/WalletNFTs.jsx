import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Center, Flex, Link, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import {
	fetchMarketplaceData,
	fetchUserData,
} from "../../../redux/marketplace/marketplaceActions";
import { useDispatch } from "react-redux";
import { Button } from "@chakra-ui/button";
import WalletNFT from "./WalletNFT";
import { COLLECTIONS } from "../Collections";
// import { fetchCollectionData } from "../../../redux/marketplace/collectionActions";
import { RepeatIcon } from "@chakra-ui/icons";
import { Switch } from "@chakra-ui/switch";
import WalletNFTonSale from "./WalletNFTonSale";
import { FaSearchDollar } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { Link as ReactRouterLink } from "react-router-dom";

const WalletNFTs = () => {
	const blockchain = useSelector((state) => state.blockchain);
	const marketplace = useSelector((state) => state.marketplace);
	const dispatch = useDispatch();

	const [nfts, setNFTS] = useState([]);
	const [nftsOnSale, setNFTSonSale] = useState([]);

	const [loading, setLoading] = useState(false);
	const [withdrawing, setWithdrawing] = useState(false);

	const [showOnSale, setShowOnSale] = useState(false);

	const withdrawRoyalties = async () => {
		setWithdrawing(true);
		try {
			const contract = COLLECTIONS.filter(
				(c) => c.creatorAddress.toLowerCase() === blockchain.account
			)[0].contract;

			await marketplace.smartContract.methods
				.withdrawRoyalties(contract)
				.send({ from: blockchain.account });
		} catch (e) {
			console.error(e);
			// Toast error
		} finally {
			setWithdrawing(false);
		}
	};

	const fetchUserWallet = () => {
		setLoading(true);
		Promise.all(marketplace.userWallet.map(({ uri }) => fetch(uri)))
			.then((data) => Promise.all(data.map((d) => d.json())))
			.then((metadatas) => {
				setNFTS(metadatas);
				setLoading(false);
			})
			.catch((err) => setLoading(false));
	};

	const fetchUserWalletOnSale = () => {
		setLoading(true);
		Promise.all(marketplace.userItemsOnSale.map(({ uri }) => fetch(uri)))
			.then((data) => Promise.all(data.map((d) => d.json())))
			.then((metadatas) => {
				setNFTSonSale(metadatas);
				setLoading(false);
			})
			.catch((err) => setLoading(false));
	};

	useEffect(() => {
		dispatch(fetchMarketplaceData())
			.then(() => {
				dispatch(fetchUserData());
			})
			.then(() => fetchUserWallet());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, blockchain.account]);

	// useEffect(() => {
	// 	dispatch(fetchUserData());
	// }, [dispatch, blockchain.account]);

	// useEffect(() => {
	// 	fetchUserWallet();
	// }, [marketplace.userWallet, blockchain.account]);

	// useEffect(() => {
	// 	if (marketplace.smartContract !== null) {
	// 		COLLECTIONS.forEach((collection) => {
	// 			dispatch(fetchCollectionData(collection.contract));
	// 		});
	// 	}
	// }, [marketplace.smartContract, dispatch, marketplace.userWallet]);

	return (
		<>
			<Center
				display='flex'
				justifyContent='center'
				gridGap='35px'
				flexWrap='wrap'
				alignItems='center'
				mt={8}>
				{COLLECTIONS.find(
					(item) => item.creatorAddress.toLowerCase() === blockchain.account
				) && (
					<Button
						leftIcon={<GiReceiveMoney />}
						disabled={withdrawing}
						colorScheme='gray'
						variant='solid'
						onClick={(e) => {
							e.preventDefault();
							withdrawRoyalties();
						}}>
						{withdrawing ? (
							<p>
								Withdrawing... <Spinner size='sm' />
							</p>
						) : (
							"Royalties"
						)}
					</Button>
				)}

				<Link as={ReactRouterLink} to='/marketplace'>
					<Button colorScheme='gray' leftIcon={<FaSearchDollar />}>
						Marketplace
					</Button>
				</Link>
				<Button
					leftIcon={<RepeatIcon />}
					colorScheme='red'
					variant='solid'
					onClick={() =>
						showOnSale ? fetchUserWalletOnSale() : fetchUserWallet()
					}>
					Refresh
				</Button>
				<Flex gridGap='15px' alignItems='center'>
					<Text color='white'>
						{showOnSale ? "Show unlisted NFTs" : "Show listed NFTs"}
					</Text>
					<Switch
						colorScheme='red'
						size='lg'
						onChange={(e) => {
							setShowOnSale(e.target.checked);
						}}
						value={showOnSale}
					/>
				</Flex>
			</Center>
			<Flex
				flexWrap='wrap'
				justifyContent='space-evenly'
				gridGap='50px'
				padding='50px 10vw'>
				{showOnSale ? (
					loading || !nftsOnSale ? (
						<Spinner
							size='xl'
							margin='auto'
							thickness='4px'
							speed='0.65s'
							color='white'
						/>
					) : nftsOnSale.length > 0 ? (
						nftsOnSale.map((nft, index) => {
							return (
								<WalletNFTonSale
									key={index}
									metadata={Array.isArray(nft) ? nft[0] : nft}
									price={marketplace.userItemsOnSale[index]?.price}
									itemId={marketplace.userItemsOnSale[index]?.itemId}
									onDelisted={() =>
										dispatch(fetchUserData()).then(() =>
											fetchUserWalletOnSale()
										)
									}
								/>
							);
						})
					) : (
						<Text mt={10}>You're not selling any of your NFT yet 👀</Text>
					)
				) : loading || !nfts ? (
					<Spinner
						size='xl'
						margin='auto'
						thickness='4px'
						speed='0.65s'
						color='white'
					/>
				) : nfts.length > 0 ? (
					nfts.map((nft, index) => {
						return (
							<WalletNFT
								tokenId={marketplace.userWallet[index]?.tokenId}
								collection={marketplace.userWallet[index]?.contract}
								metadata={Array.isArray(nft) ? nft[0] : nft}
								onListed={() =>
									dispatch(fetchUserData()).then(() => fetchUserWallet())
								}
								key={index}
							/>
						);
					})
				) : (
					<Text>Looks like you got no NFTs to sale here 😮</Text>
				)}
			</Flex>
		</>
	);
};

export default WalletNFTs;
