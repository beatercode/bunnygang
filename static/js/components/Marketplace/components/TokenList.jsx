import React from "react";
import * as s from "./styles";
import TokenDisplay from "./TokenDisplay";

const TokenList = ({ items = [], onBuy }) => {
	return (
		<s.tokenList>
			{items?.length > 0 &&
				items.map(({ metadata, price, itemId }, index) => (
					<div data-aos='zoom-in-up' key={index}>
						<TokenDisplay
							metadata={metadata}
							price={price}
							lastPrice={0}
							itemId={itemId}
							onBuy={onBuy}
						/>
					</div>
				))}
		</s.tokenList>
	);
};

export default TokenList;
