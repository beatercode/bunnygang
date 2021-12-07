import React from "react";
import { Text } from "@chakra-ui/layout";
import ethlogo from "./image/eth_logo.png";
import { Image, Divider, Flex } from "@chakra-ui/react";

const Info = ({ numberItems, numberOwners, floorPrice, volume }) => {
	return (
		<div>
			<Flex color='white' border='2px solid white' borderRadius='15px'>
				<Flex direction='column' align='center' padding='20px'>
					<Text fontSize='2xl' color='white' as='b'>
						{/* {element.item} */}
						{numberItems}
					</Text>
					<Text fontSize='1xl' color='white'>
						Items
					</Text>
				</Flex>
				<Divider orientation='vertical' height='100px' />
				<Flex direction='column' align='center' padding='20px'>
					<Text fontSize='2xl' color='white' as='b'>
						{/* {element.owners} */}
						{numberOwners}
					</Text>
					<Text fontSize='1xl' color='white'>
						Owners
					</Text>
				</Flex>
				<Divider orientation='vertical' height='100px' />
				<Flex direction='lign' align='center' padding='20px'>
					<Flex direction='column' align='center' marginRight='10px'>
						<Text fontSize='2xl' color='white' as='b'>
							{/* {element.floorprice} */}
							{floorPrice}
						</Text>
						<Text fontSize='1xl' color='white'>
							Floor Price
						</Text>
					</Flex>
					<Image src={ethlogo} height='40px' margin='5px' />
				</Flex>
				<Divider orientation='vertical' height='100px' />
				<Flex direction='lign' align='center' padding='20px'>
					<Flex direction='column' align='center' marginRight='10px'>
						<Text fontSize='2xl' color='white' as='b'>
							{/* {element.volume} */}
							{volume / 1e18}
						</Text>
						<Text fontSize='1xl' color='white'>
							Volume traded
						</Text>
					</Flex>
					<Image src={ethlogo} height='40px' margin='5px' />
				</Flex>
			</Flex>
		</div>
	);
};

export default Info;
