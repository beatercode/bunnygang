import React from "react";
import { Text } from "@chakra-ui/layout";
import ethlogo from "./image/eth_logo.png";
import { Image, Divider, Flex } from "@chakra-ui/react";

const Infolist = ({ floorPrice, volume, lastprice }) => {
	return (
		<div>
			<Flex
				color='white'
				border='2px solid white'
				borderRadius='15px'
				textAlign='center'
				maxHeight='75px'>
				<Flex direction='lign' align='center' padding='20px'>
					<Flex direction='column' align='center' marginRight='10px'>
						<Text fontSize='2xl' color='white' as='b'>
							{floorPrice}
						</Text>
						<Text fontSize='1xl' color='white'>
							Floor Price
						</Text>
					</Flex>
					<Image src={ethlogo} height='40px' margin='5px' />
				</Flex>
				<Divider orientation='vertical' height='70px' />
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
				<Divider orientation='vertical' height='70px' />
				<Flex direction='lign' align='center' padding='20px'>
					<Flex direction='column' align='center' marginRight='10px'>
						<Text fontSize='2xl' color='white' as='b'>
							{/* {element.floorprice} */}
							{lastprice}
						</Text>
						<Text fontSize='1xl' color='white'>
							Last Price
						</Text>
					</Flex>
					<Image src={ethlogo} height='40px' margin='5px' />
				</Flex>
			</Flex>
		</div>
	);
};

export default Infolist;
