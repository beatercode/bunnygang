import React, { useEffect, useState } from "react";
import { SpacerLarge } from "../../styles/globalStyles";
import { Heading, Text, Center, Box, Link, Grid } from "@chakra-ui/layout";
import TokenList from "./components/TokenList";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollectionData } from "../../redux/marketplace/collectionActions";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "@chakra-ui/spinner";
import { Image, Divider, Button, HStack } from "@chakra-ui/react";
import { FaTwitter, FaDiscord, FaEdge } from "react-icons/fa";
import Info from "./components/Info";
import { FaWallet } from "react-icons/fa";
import { Link as ReactRouterLink } from "react-router-dom";

// import { RepeatIcon } from "@chakra-ui/icons";

// const SocialButton = ({ children, label, href }) => {
// 	return (
// 		<chakra.button
// 			bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
// 			rounded={"full"}
// 			w={8}
// 			h={8}
// 			cursor={"pointer"}
// 			as={"a"}
// 			href={href}
// 			display={"inline-flex"}
// 			alignItems={"center"}
// 			justifyContent={"center"}
// 			transition={"background 0.3s ease"}
// 			_hover={{
// 				bg: useColorModeValue("black", "white"),
// 			}}>
// 			<VisuallyHidden>{label}</VisuallyHidden>
// 			{children}
// 		</chakra.button>
// 	);
// };

const Collectionpage = ({ currentCollection }) => {
	const dispatch = useDispatch();
	const collection = useSelector((state) => state.collection);
	const marketplace = useSelector((state) => state.marketplace);

	const [items, setItems] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const [fetching, setFetching] = useState(false);

	const fetchMetatDataForNFTS = async (_amount) => {
		setFetching(true);
		const currentIndex = items.length;
		for (let index = currentIndex; index < currentIndex + _amount; index++) {
			// Get the market item
			const item = collection.collectionItems[index];

			const _uri = await collection.collectionContract.methods
				.tokenURI(item["tokenId"])
				.call();

			const uri =
				_uri.split("ipfs://").length > 1
					? "https://ipfs.infura.io/ipfs/" + _uri.split("ipfs://")[1]
					: _uri;

			// Get the token uri by it's id
			fetch(uri)
				.then((response) => {
					return response.json();
				})
				.then((metaData) => {
					setItems((prevState) => {
						if (prevState.find((_item) => _item.itemId === item["itemId"])) {
							return prevState;
						} else {
							return [
								...prevState,
								{
									itemId: item["itemId"],
									metadata: Array.isArray(metaData) ? metaData[0] : metaData,
									price: item["price"],
								},
							];
						}
					});
				})
				.catch((err) => {
					console.error("Fetching NFTS error : ", err);
				});
		}
		setFetching(false);
	};

	const fetchMoreMetadata = () => {
		const rest = collection.collectionItems.length - items.length;

		if (rest >= 10) {
			fetchMetatDataForNFTS(10);
		} else {
			fetchMetatDataForNFTS(rest);
			setHasMore(false);
		}
	};

	const resetMetadata = () => {
		if (fetching) return;
		setFetching(true);
		setItems([]);
		fetchMoreMetadata();
	};

	useEffect(() => {
		if (marketplace.smartContract !== null && currentCollection.contract) {
			dispatch(fetchCollectionData(currentCollection.contract));
		}
	}, [marketplace.smartContract, dispatch, currentCollection.contract]);

	useEffect(() => {
		resetMetadata();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [collection.collectionItems, currentCollection.contract]);
	return (
		<Box marginTop='40px'>
			<Box
				margin='auto'
				borderRadius='50px'
				width='90vw'
				height='58vh'
				backgroundPosition='center'
				backgroundSize='contain'
				backgroundImage={`url(${currentCollection.imageURL})`}></Box>
			<Center>
				<Image
					src={currentCollection.logoURL}
					borderRadius='full'
					boxSize='150px'
					align='center'
					display='inline-block'
					transform='translateY(-50%)'
					border='4px solid white'
				/>
			</Center>
			<Center>
				<Heading
					lineHeight={1.1}
					fontWeight={600}
					fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
					textAlign='center'
					margin='20px'
					transform='translateY(-90%)'>
					<Text
						as={"span"}
						position={"relative"}
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
						{currentCollection.title}
					</Text>
				</Heading>
			</Center>
			<Center>
				<Text
					fontSize='2xl'
					width='90vw'
					color='white'
					marginBottom='25px'
					paddingBottom='30px'
					textAlign='center'>
					{currentCollection.description}
				</Text>
			</Center>
			<Center>
				<HStack>
					<Link href={currentCollection.discord} target='_blank'>
						<Button colorScheme='purple' leftIcon={<FaDiscord />}>
							Discord
						</Button>
					</Link>
					<Link href={currentCollection.twitter} target='_blank'>
						<Button colorScheme='twitter' leftIcon={<FaTwitter />}>
							Twitter
						</Button>
					</Link>
					<Link href={currentCollection.website} target='_blank'>
						<Button colorScheme='orange' leftIcon={<FaEdge />}>
							Website
						</Button>
					</Link>
				</HStack>
			</Center>
			<SpacerLarge />
			<Grid
				justifyItems='center'
				alignItems='center'
				templateColumns='1fr 3fr 1fr'>
				<Link as={ReactRouterLink} to='/marketplace/wallet'>
					<Button colorScheme='red' leftIcon={<FaWallet />}>
						Wallet
					</Button>
				</Link>
				<Info
					numberItems={collection.collectionItems.length}
					numberOwners={
						collection.collectionItems
							.map((item) => item["seller"])
							.reduce(
								function (values, v) {
									if (!values.set[v]) {
										values.set[v] = 1;
										values.count++;
									}
									return values;
								},
								{ set: {}, count: 0 }
							).count
					}
					volume={collection.volume}
					floorPrice={collection.floorPrice / 1e18}
				/>
				<div></div>
				{/* <Button
					leftIcon={<RepeatIcon />}
					colorScheme='red'
					variant='solid'
					onClick={() => resetMetadata()}>
					Refresh
				</Button> */}
			</Grid>

			<SpacerLarge />
			<Divider />
			<SpacerLarge />

			{/* <Flex>
				<Input
					variant='flushed'
					placeholder='Search NFT using Token Id'
					marginLeft='20px'
					marginRight='20px'
					textColor='white'
				/>
				<SpacerXSmall />
				<Select
					placeholder='Sort by'
					variant='flushed'
					marginLeft='20px'
					marginRight='20px'>
					<option value='option1'>Low to High</option>
					<option value='option2'>High to Low</option>
					<option value='option3'>Recently Listed</option>
				</Select>
			</Flex> */}
			<SpacerLarge />
			<Center>
				{!fetching ? (
					<InfiniteScroll
						dataLength={items.length}
						next={fetchMoreMetadata}
						hasMore={hasMore}
						loader={
							<Spinner
								size='xl'
								margin='auto'
								thickness='4px'
								speed='0.65s'
								color='white'
							/>
						}
						endMessage={
							<p
								style={{
									textAlign: "center",
									color: "white",
									marginTop: "50px",
								}}>
								<b>No more to see there 👀</b>
							</p>
						}>
						<TokenList
							items={items}
							onBuy={() => {
								setItems([]);
								dispatch(fetchCollectionData(currentCollection.contract));
							}}
						/>
					</InfiniteScroll>
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
		</Box>
	);
};

export default Collectionpage;
