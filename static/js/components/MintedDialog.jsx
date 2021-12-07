import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Heading, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import styled from "styled-components";
// import "reactjs-popup/dist/index.css";
//

const Modal = styled.div`
	background-color: #da0037;
	color: white;
	max-width: 800px;
	max-height: auto;
	border-radius: 4px;
	box-shadow: 0 30px 80px 10px rgba(0, 0, 0, 0.2);
	padding: 50px;
`;

const StyledPopup = styled(Popup)`
	/* animation */

	@keyframes anvil {
		0% {
			transform: scale(1) translateY(0px);
			opacity: 0;
			box-shadow: 0 0 0 rgba(241, 241, 241, 0);
		}
		1% {
			transform: scale(0.96) translateY(10px);
			opacity: 0;
			box-shadow: 0 0 0 rgba(241, 241, 241, 0);
		}
		100% {
			transform: scale(1) translateY(0px);
			opacity: 1;
			box-shadow: 0 0 500px rgba(241, 241, 241, 0);
		}
	}
	&-content {
		-webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
	}

	&-overlay {
		background: rgba(0, 0, 0, 0.5);
	}
`;

const MintedDialog = ({ mintedImage, isOpen, onClose, amountMinted = 0 }) => {
	return (
		<div>
			<StyledPopup
				open={isOpen}
				closeOnDocumentClick
				onClose={onClose}
				position='center center'>
				<Modal>
					{mintedImage ? (
						<Image
							src={mintedImage}
							boxSize='400px'
							alt='Minted Bunny Gangster'
							objectFit='cover'
							margin='auto'
							rounded={"lg"}
							mb={5}
							boxShadow=' 0 30px 80px 10px rgba(255, 255, 255, 0.2)'
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

					<Heading as='h1' size='xl' mb={3}>
						Congratulations 🎉 <br />
						You minted {amountMinted} Bunny Gangster(s)
					</Heading>
					<Text fontSize='xl'>
						Take a look at your Bunny Gang by clicking the button below
					</Text>
					<Link to='/my-bunnies'>
						<Button size='lg' bg='white' color='var(--red)' mt='24px'>
							My Bunny Gang
						</Button>
					</Link>
				</Modal>
			</StyledPopup>
		</div>
	);
};

export default MintedDialog;
