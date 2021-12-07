import React from "react";
import { Center, Flex, HStack, Square, Text } from "@chakra-ui/layout";
import heroBunny from "../../images/1.gif";
import heroBunny2 from "../../images/2.gif";
import heroBunny3 from "../../images/3.gif";
import heroBunny4 from "../../images/4.gif";
import AOS from "aos";
import "aos/dist/aos.css";

import * as s from "../../styles/globalStyles";
import * as m from "../MintPanel/styles";
import * as f from "./styles";

AOS.init();

const Rarities = () => {
  return (
    <div>
      <Center id="Specs">
        <Text
          as={"span"}
          position={"relative"}
          fontSize="7xl"
          color={"var(--red)"}
          _after={{
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "var(--white)",
            zIndex: -1,
          }}
        >
          Specs
        </Text>
      </Center>
      <s.SpacerLarge />
      <s.SpacerLarge />
      <Center>
        <div>
          <f.RaritiesContainer>
            <f.RaritiesHero>
              <ul>
                <li>
                  <Flex color="white" justifyContent="center">
                    <HStack spacing="8px">
                      <Square size="162px">
                        <img
                          src={heroBunny}
                          alt="Bunny Hero"
                          style={{ width: "100%", display: "block" }}
                        />
                      </Square>
                      <Square size="162px">
                        <img
                          src={heroBunny2}
                          alt="Bunny Hero"
                          style={{ width: "100%", display: "block" }}
                        />
                      </Square>
                    </HStack>
                  </Flex>
                </li>
                <s.SpacerXSmall />
                <li>
                  <Flex color="white" justifyContent="center">
                    <HStack spacing="8px">
                      <Square size="162px">
                        <img
                          src={heroBunny3}
                          alt="Bunny Hero"
                          style={{ width: "100%", display: "block" }}
                        />
                      </Square>
                      <Square size="162px">
                        <img
                          src={heroBunny4}
                          alt="Bunny Hero"
                          style={{ width: "100%", display: "block" }}
                        />
                      </Square>
                    </HStack>
                  </Flex>
                </li>
              </ul>
            </f.RaritiesHero>

            <f.RaritiesContent
              style={{ padding: "20px", textAlign: "justify" }}
            >
              <s.SpacerXSmall />
              <s.SpacerXSmall />

              <m.Description>
                Each Bunny is unique and programmatically generated from over
                185 possible traits specific to each 4 gangs, including
                clothing, eyes, expression and more. The 1332 bunnies are
                equally distributed in the 4 gangs.
              </m.Description>

              <s.SpacerXSmall />

              <m.Description>
                Bunnies are stored as ERC-721 tokens on the Arbitrum blockchain
                and hosted on IPFS.
              </m.Description>

              <s.SpacerXSmall />

              <m.Description>
                Holding a bunny gives right to access private zones, available
                soon. It will give you access to other features on the
                marketplace too. Stay Tuned
              </m.Description>
              <s.SpacerMedium />
            </f.RaritiesContent>
          </f.RaritiesContainer>
        </div>
      </Center>
      <s.SpacerLarge />
      <s.SpacerLarge />
    </div>
  );
};
export default Rarities;
