import { Flex } from "@chakra-ui/layout";
import {
	NumberDecrementStepper,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
} from "@chakra-ui/number-input";
import {
	Slider,
	SliderFilledTrack,
	SliderTrack,
	SliderThumb,
} from "@chakra-ui/slider";
import React from "react";

const MintAmountSelector = ({ mintAmount, handleChange }) => {
	return (
		<Flex>
			<NumberInput
				maxW='100px'
				mr='2rem'
				value={mintAmount}
				onChange={handleChange}
				min={1}
				max={20}
				defaultValue={1}
				color='white'>
				<NumberInputField />
				<NumberInputStepper>
					<NumberIncrementStepper />
					<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
			<Slider
				flex='1'
				focusThumbOnChange={false}
				value={mintAmount}
				onChange={handleChange}
				min={1}
				max={20}
				defaultValue={1}>
				<SliderTrack bg='white'>
					<SliderFilledTrack bg='gray.800' />
				</SliderTrack>
				<SliderThumb fontSize='sm' boxSize='32px' children={mintAmount} />
			</Slider>
		</Flex>
	);
};

export default MintAmountSelector;
