import React from "react";
import { Text } from "@chakra-ui/layout";
import { Divider, Flex } from "@chakra-ui/react";

const Inforoyalties = ({ agoraroyalties, artistroyalties }) => {
	return (
		<div>
			<Flex
				color='white'
				border='2px solid white'
				borderRadius='15px'
				display='flex'
				justifyContent='center'
				maxHeight='75px'>
				<Flex
					direction='lign'
					align='center'
					padding='20px'
					justifyContent='center'>
					<Flex
						direction='column'
						align='center'
						marginRight='10px'
						justifyContent='center'>
						<Text fontSize='2xl' color='white' as='b'>
							{agoraroyalties}
						</Text>
						<Text fontSize='1xl' color='white'>
							Agora Royalties
						</Text>
					</Flex>
				</Flex>
				<Divider orientation='vertical' height='70px' />
				<Flex
					direction='lign'
					align='center'
					padding='20px'
					justifyContent='center'>
					<Flex
						direction='column'
						align='center'
						marginRight='10px'
						justifyContent='center'>
						<Text fontSize='2xl' color='white' as='b'>
							{artistroyalties}
						</Text>
						<Text fontSize='1xl' color='white'>
							Creator Royalties
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</div>
	);
};

export default Inforoyalties;
