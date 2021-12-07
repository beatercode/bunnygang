import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/data/dataActions";
import * as s from "../styles/globalStyles";
import {
	Box,
	Center,
	Heading,
	Text,
	Stack,
	Image,
	Button,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { ViewIcon } from "@chakra-ui/icons";
import metadata from "../metadata/_metadata.json";
import axios from "axios";

const NftList = () => {
	const dispatch = useDispatch();
	const blockchain = useSelector((state) => state.blockchain);
	const data = useSelector((state) => state.data);

	const [NFTS, setNFTS] = useState([]);

	const [fetching, setFetching] = useState(false);

	const API_BASE_URL = "https://api.bunnygang.art/api/bunnies";

	const username = "admin";
	const password = "bunnyganggang";

	const token = Buffer.from(`${username}:${password}`, "utf8").toString(
		"base64"
	);

	const uploadMetadataOneNft = (_id) => {
		// const bunny_metadata = metadata.bunnies.find((bunny) => {
		// 	return bunny.id === _id;
		// });

		const bunny_metadata = metadata.bunnies[_id - 4]
			? metadata.bunnies[_id - 4]
			: null;

		if (!bunny_metadata) return;

		setFetching(true);

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
				fetchMetatDataForNFTS();
				setFetching(false);
			});
	};

	const fetchMetatDataForNFTS = async () => {
		setNFTS([]);
		// console.log("fetching");
		await data.walletOfAccount.forEach(async (id) => {
			const uri = await blockchain.smartContract.methods.tokenURI(id).call();
			// console.log(uri);
			// Get the token uri by it's id
			fetch(uri)
				.then((response) => {
					return response.json();
				})
				.then((metaData) => {
					setNFTS((prevState) => [
						...prevState,
						{ id: id, metaData: metaData[0] },
					]);
				})
				.catch((err) => {
					console.error("Fetching NFTS error : ", err);
				});
		});
	};

	useEffect(() => {
		if (blockchain.account !== "" && blockchain.smartContract !== null) {
			dispatch(fetchData(blockchain.account));
		}
	}, [blockchain.account, blockchain.smartContract, dispatch]);

	useLayoutEffect(() => {
		fetchMetatDataForNFTS();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data.walletOfAccount]);

	const NFTsDisplay = () => {
		return NFTS.length > 0 ? (
			NFTS.map((nft, index) => {
				return (
					// <s.Container key={index} style={{ padding: 16 }}>
					// 	<s.TextTitle>{nft.metaData?.name}</s.TextTitle>
					// 	<img
					// 		alt={nft.metaData?.name}
					// 		src={nft.metaData?.image}
					// 		width={150}
					// 	/>
					// </s.Container>

					<Center py={12} key={index}>
						<Box
							role={"group"}
							p={6}
							maxW={"330px"}
							w={"full"}
							bg={"white"}
							boxShadow={"2xl"}
							rounded={"lg"}
							pos={"relative"}
							zIndex={1}>
							{nft.metaData?.image ? (
								<Box
									rounded={"lg"}
									mt={-12}
									pos={"relative"}
									height={"230px"}
									_after={{
										transition: "all .3s ease",
										content: '""',
										w: "full",
										h: "full",
										pos: "absolute",
										top: 5,
										left: 0,
										backgroundImage: nft.metaData?.image,
										filter: "blur(15px)",
										zIndex: -1,
									}}
									_groupHover={{
										_after: {
											filter: "blur(20px)",
										},
									}}>
									{nft.metaData?.image ? (
										<Image
											rounded={"lg"}
											height={230}
											width={230}
											objectFit={"contain"}
											src={nft.metaData?.image}
											alt={nft.metaData?.name}
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
								</Box>
							) : (
								<Flex justifyContent='center' alignItems='center'>
									<Button
										rounded={"full"}
										disabled={fetching}
										size={"lg"}
										fontWeight={"normal"}
										px={6}
										colorScheme={"red"}
										bg={"var(--red)"}
										_hover={{ bg: "red.500" }}
										leftIcon={<ViewIcon h={4} w={4} color={"var(--white)"} />}
										jc={"center"}
										ai={"center"}
										gridGap={"5px"}
										onClick={(e) => {
											e.preventDefault();
											uploadMetadataOneNft(nft.id);
										}}>
										{fetching ? "loading..." : "Fetch NFT"}
									</Button>
								</Flex>
							)}
							<Stack pt={10} align={"center"}>
								<Text
									color={"gray.500"}
									fontSize={"sm"}
									textTransform={"uppercase"}>
									GEN 1
								</Text>
								<Heading
									fontSize={"2xl"}
									fontFamily={"body"}
									fontWeight={500}
									color={"var(--red)"}>
									{nft.metaData?.name || "Unknown Gangster"}
								</Heading>
								{/* <Stack direction={"row"} align={"center"}>
								<Text fontWeight={800} fontSize={"xl"}>
									$57
								</Text>
								<Text textDecoration={"line-through"} color={"gray.600"}>
									$199
								</Text>
							</Stack> */}
							</Stack>
						</Box>
					</Center>
				);
			})
		) : (
			<>
				<s.SpacerLarge />
				<Center>
					<s.TextDescription style={{ textAlign: "center", fontSize: "2rem" }}>
						You don't have any Bunny Gangster ?! Get one and join a gang{" "}
						<Link to='/' style={{ color: "var(--red)" }}>
							now
						</Link>{" "}
						!
					</s.TextDescription>
				</Center>
			</>
		);
	};

	return (
		<>
			{data.loading ? (
				<>
					<s.SpacerSmall />
					<s.TextDescription style={{ textAlign: "center" }}>
						loading...
					</s.TextDescription>
				</>
			) : (
				<>
					<s.SpacerMedium />
					<Flex
						justifyContent='center'
						alignItems='center'
						gridGap={10}
						flexWrap='wrap'>
						<NFTsDisplay />
					</Flex>
				</>
			)}
		</>
	);
};

export default NftList;
