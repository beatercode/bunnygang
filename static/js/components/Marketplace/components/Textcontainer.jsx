import React from "react";
import * as s from "./styles";
import { SpacerSmall } from "../../../styles/globalStyles";
import { Center } from "@chakra-ui/layout";
import { Wallet, Buy, Sell } from "./Icons";

function Textcontainer() {
  return (
    <div>
      <Center>
        <s.RaritiesContainer1>
          <s.TextContainer>
            <div>
              <Wallet />
              <s.Titlemarket>Connect your wallet</s.Titlemarket>
            </div>
            <s.Descriptionmarket>
              Connect your wallet by clicking the wallet icon in the top right
              corner.
            </s.Descriptionmarket>
          </s.TextContainer>
          <SpacerSmall />
          <s.TextContainer>
            <div>
              <Buy />
              <s.Titlemarket>Buy NFTs</s.Titlemarket>
            </div>
            <s.Descriptionmarket>
              Browse the collections and buy the NFT you want in a few clicks
            </s.Descriptionmarket>
          </s.TextContainer>
          <SpacerSmall />
          <s.TextContainer>
            <div>
              <Sell />
              <s.Titlemarket>Sell NFTs</s.Titlemarket>
            </div>
            <s.Descriptionmarket>
              Easily sell the NFTs of the collections listed on Agora.
            </s.Descriptionmarket>
          </s.TextContainer>
        </s.RaritiesContainer1>
      </Center>
    </div>
  );
}
export default Textcontainer;
