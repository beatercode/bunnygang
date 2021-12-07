import {
	Heading,
	Avatar,
	Box,
	Center,
	Image,
	Flex,
	Stack,
	Button,
	useColorModeValue,
	Link,
} from "@chakra-ui/react";
import { SpacerSmall } from "../../../styles/globalStyles";
import * as s from "./styles";
import { Link as ReactRouterLink } from "react-router-dom";
import { fetchCollectionData } from "../../../redux/marketplace/collectionActions";
import { useDispatch } from "react-redux";

const Sellerprofile = ({ collection }) => {
	const dispatch = useDispatch();

	return (
		<Box
			maxW={"270px"}
			height={"450px"}
			w={"full"}
			bg={useColorModeValue("var(--red)", "var(--black")}
			boxShadow={"2xl"}
			rounded={"md"}
			overflow={"hidden"}
			margin='auto'>
			<Image
				h={"120px"}
				w={"full"}
				src={collection.banniere}
				objectFit={"cover"}
			/>
			<Flex justify={"center"} mt={-12}>
				<Avatar
					size={"xl"}
					src={collection.logo}
					alt={"collection"}
					css={{
						border: "2px solid white",
					}}
				/>
			</Flex>

			<Box p={6}>
				<Stack spacing={0} align={"center"} mb={5}>
					<Heading
						fontSize={"2xl"}
						fontWeight={500}
						fontFamily={"body"}
						color='white'>
						{collection.creator}
					</Heading>
					<SpacerSmall />
					<Center>
						<s.Descriptionprofile>
							{collection.description}{" "}
						</s.Descriptionprofile>
					</Center>
				</Stack>

				{collection.url ? (
					<Link
						as={ReactRouterLink}
						to={collection.url}
						onClick={() => dispatch(fetchCollectionData(collection.contract))}>
						<Button
							w={"full"}
							mt={8}
							bg={"var(--black)"}
							color={"white"}
							rounded={"md"}
							_hover={{
								transform: "translateY(-2px)",
								boxShadow: "lg",
							}}>
							Explore
						</Button>
					</Link>
				) : (
					<Link href='https://twitter.com/TheBunnyGangNFT' target='_blank'>
						<Button
							w={"full"}
							mt={8}
							bg={"var(--black)"}
							color={"white"}
							rounded={"md"}
							_hover={{
								transform: "translateY(-2px)",
								boxShadow: "lg",
							}}>
							Contact us
						</Button>
					</Link>
				)}
			</Box>
		</Box>
	);
};
export default Sellerprofile;
