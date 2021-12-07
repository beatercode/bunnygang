import React from "react";
import * as s from "../styles/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { Button } from "@chakra-ui/button";

const Connect = ({ size }) => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);

  return (
    <>
      <s.Container flex={1} ai={"center"} jc={"center"}>
        {blockchain.account === "" ||
        blockchain.smartContract === null ||
        !blockchain.account ||
        !blockchain.smartContract ? (
          <>
            {/* <s.PrimaryButton
							onClick={(e) => {
								e.preventDefault();
								dispatch(connect());
							}}>
							CONNECT YOUR WALLET
						</s.PrimaryButton> */}
            <Button
              rounded={"full"}
              size={size ? size : "lg"}
              fontWeight={"normal"}
              px={6}
              onClick={(e) => {
                e.preventDefault();
                dispatch(connect());
              }}
            >
              Connect Wallet
            </Button>
            {/* <s.SpacerSmall /> */}
          </>
        ) : (
          <>
            <Button
              rounded={"full"}
              size={"sm"}
              fontWeight={"normal"}
              px={6}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {blockchain.account.substr(0, 7) +
                "..." +
                blockchain.account.slice(-7, -1)}
            </Button>
            {/* <s.SpacerSmall /> */}
          </>
        )}
        {blockchain.errorMsg !== "" ? (
          <s.TextDescription>{blockchain.errorMsg}</s.TextDescription>
        ) : null}
      </s.Container>
    </>
  );
};

export default Connect;
