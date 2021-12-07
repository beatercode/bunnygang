import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Box, Link, Text, Center } from "@chakra-ui/layout";
import { SpacerXSmall } from "../../styles/globalStyles";
import { SpacerLarge } from "../../styles/globalStyles";

import * as s from "../../styles/globalStyles";
import * as f from "./styles";

const Faq = () => {
  // const animateFromTo = (elem, direction) => {
  //   const offset = 1000;
  //   let x = 0;
  //   let y = direction * offset;

  //   direction = direction | 1;

  //   if (elem.classList.contains("slide_from_left")) {
  //     x = -offset;
  //     y = 0;
  //   } else if (elem.classList.contains("slide_from_right")) {
  //     x = offset;
  //     y = 0;
  //   }

  //   gsap.fromTo(
  //     elem,
  //     { x: x, y: y, autoAlpha: 0 },
  //     {
  //       duration: 1.25,
  //       x: 0,
  //       y: 0,
  //       autoAlpha: 1,
  //       ease: "expo",
  //       overwrite: "auto",
  //     }
  //   );
  // };

  // const hide = (elem) => {
  //   gsap.set(elem, { autoAlpha: 0 });
  // };

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.utils.toArray(".animate").forEach(function (elem) {
  //     hide(elem);

  //     ScrollTrigger.create({
  //       trigger: elem,
  //       onEnter: function () {
  //         animateFromTo(elem);
  //       },
  //       onEnterBack: function () {
  //         animateFromTo(elem, -1);
  //       },
  //       onLeave: function () {
  //         hide(elem);
  //       },
  //     });
  //   });
  // }, []);

  return (
    <div id="FAQ">
      <SpacerLarge />
      <Center>
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
          FAQ
        </Text>
      </Center>
      <SpacerLarge />
      <SpacerLarge />
      <s.Container jc={"center"} ai={"center"}>
        <Accordion allowToggle>
          <div data-aos="flip-left">
            <f.FaqContainer>
              <AccordionItem bg={"var(--red)"} borderRadius="4px">
                <h1>
                  <AccordionButton _expanded={{ bg: "var(--black)" }}>
                    <Box flex="1" textAlign="left" p={3}>
                      <f.Title>How can I get my bunny?</f.Title>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h1>
                <AccordionPanel pb={4} bg={"var(--black)"}>
                  <f.Description>
                    We'll announce on our official social networks the launch
                    date of the mint. As soon as it's announced, all you have to
                    do is connect your wallet to the website, and press the mint
                    button.
                  </f.Description>
                </AccordionPanel>
              </AccordionItem>
            </f.FaqContainer>
          </div>
          <SpacerXSmall />

          <div data-aos="flip-left">
            <f.FaqContainer>
              <AccordionItem bg={"var(--red)"} borderRadius="4px">
                <h1>
                  <AccordionButton _expanded={{ bg: "var(--black)" }}>
                    <Box flex="1" textAlign="left" p={3}>
                      <f.Title>Can I mint on my mobile?</f.Title>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h1>
                <AccordionPanel pb={4} bg={"var(--black)"}>
                  <f.Description>
                    Yes you'll be able to mint through Metamask on your mobile,
                    you just have to get the app on your smartphone.
                  </f.Description>
                </AccordionPanel>
              </AccordionItem>
            </f.FaqContainer>
          </div>
          <SpacerXSmall />

          <div data-aos="flip-left">
            <f.FaqContainer>
              <AccordionItem bg={"var(--red)"} borderRadius="4px">
                <h1>
                  <AccordionButton _expanded={{ bg: "var(--black)" }}>
                    <Box flex="1" textAlign="left" p={3}>
                      <f.Title>Is there a mint limit?</f.Title>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h1>
                <AccordionPanel pb={4} bg={"var(--black)"}>
                  <f.Description>
                    You'll be able to mint from 1 to 20 Bunnies at a time, but
                    you can refresh the page as much as you want and buy more
                    bunnies.{" "}
                  </f.Description>
                </AccordionPanel>
              </AccordionItem>
            </f.FaqContainer>
          </div>
          <SpacerXSmall />

          <div data-aos="flip-left">
            <f.FaqContainer>
              <AccordionItem bg={"var(--red)"} borderRadius="4px">
                <h1>
                  <AccordionButton _expanded={{ bg: "var(--black)" }}>
                    <Box flex="1" textAlign="left" p={3}>
                      <f.Title>
                        Is there a rarity system to differentiate the bunnies?
                      </f.Title>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h1>
                <AccordionPanel pb={4} bg={"var(--black)"}>
                  <f.Description>
                    There are over 200 attributes in total, making your bunny
                    totally unique. Not all attributes occur with the same
                    frequency on bunnies, so some are rarer than others. You
                    will be able to check the rarity of attributes very soon in
                    the rarity section.
                  </f.Description>
                </AccordionPanel>
              </AccordionItem>
            </f.FaqContainer>
          </div>
          <SpacerXSmall />

          <div data-aos="flip-left">
            <f.FaqContainer>
              <AccordionItem bg={"var(--red)"} borderRadius="4px">
                <h1>
                  <AccordionButton _expanded={{ bg: "var(--black)" }}>
                    <Box flex="1" textAlign="left" p={3}>
                      <f.Title>Will there be a secondary market?</f.Title>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h1>
                <AccordionPanel pb={4} bg={"var(--black)"}>
                  <f.Description>
                    Yes, you'll be able to trade your bunnies We apologise in
                    advance if there are any issues around this as the NFT space
                    on Arbitrum is still very fresh, we will do all we can to
                    make this a seamless experience though.
                  </f.Description>
                </AccordionPanel>
              </AccordionItem>
            </f.FaqContainer>
          </div>
          <SpacerXSmall />

          <div data-aos="flip-left">
            <f.FaqContainer>
              <AccordionItem bg={"var(--red)"} borderRadius="4px">
                <h1>
                  <AccordionButton _expanded={{ bg: "var(--black)" }}>
                    <Box flex="1" textAlign="left" p={3}>
                      <f.Title>Do I own the bunnies I bought?</f.Title>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h1>
                <AccordionPanel pb={4} bg={"var(--black)"}>
                  <f.Description>
                    YES! Full intellectuel rights are transferred to the owner
                    of the Bunny. You can check your rights as a bunny holder in
                    our terms section.
                  </f.Description>
                </AccordionPanel>
              </AccordionItem>
            </f.FaqContainer>
          </div>
          <SpacerXSmall />
          <div data-aos="flip-left">
            <f.FaqContainer>
              <AccordionItem bg={"var(--red)"} borderRadius="4px">
                <h1>
                  <AccordionButton _expanded={{ bg: "var(--black)" }}>
                    <Box flex="1" textAlign="left" p={3}>
                      <f.Title>Are there secondary sales royalties?</f.Title>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h1>
                <AccordionPanel pb={4} bg={"var(--black)"}>
                  <f.Description>
                    Yes, royalties are set at 5%. The royalties will be
                    redistributed in a decentralized way to all holders, up to
                    50%.
                  </f.Description>
                </AccordionPanel>
              </AccordionItem>
            </f.FaqContainer>
          </div>
          <SpacerXSmall />

          <div data-aos="flip-left">
            <f.FaqContainer>
              <AccordionItem bg={"var(--red)"} borderRadius="4px">
                <h1>
                  <AccordionButton _expanded={{ bg: "var(--black)" }}>
                    <Box flex="1" textAlign="left" p={3}>
                      <f.Title>How do I transfer funds to Arbitrum?</f.Title>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h1>
                <AccordionPanel pb={4} bg={"var(--black)"}>
                  <f.Description>
                    The easiest and safest solution is to bridge your assets
                    with the official Arbitrum bridge. You'll find a full
                    tutorial here:{" "}
                    <Link
                      href="https://arbitrum.io/bridge-tutorial/"
                      rel="noreferrer"
                      target="_blank"
                      color={"var(--red)"}
                    >
                      {" "}
                      https://arbitrum.io/bridge-tutorial/{" "}
                    </Link>
                  </f.Description>
                </AccordionPanel>
              </AccordionItem>
            </f.FaqContainer>
          </div>
          <SpacerXSmall />

          <div data-aos="flip-left">
            <f.FaqContainer>
              <AccordionItem bg={"var(--red)"} borderRadius="4px">
                <h1>
                  <AccordionButton _expanded={{ bg: "var(--black)" }}>
                    <Box flex="1" textAlign="left" p={3}>
                      <f.Title>Why did you choose Arbitrum?</f.Title>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h1>
                <AccordionPanel pb={4} bg={"var(--black)"}>
                  <f.Description>
                    The first reason is because of the transaction fees on
                    Ethereum. A handful of dollars is enough to mine a Bunny on
                    Arbirum. Moreover, Arbitrum is in our eyes the most
                    promising layer-2 of Ethereum. Many major players of the
                    crypto world are planning to deploy their applications on it
                    (Aave, Uniswap, Sushiswap) , it will draw attention to
                    Arbitrum.
                  </f.Description>
                </AccordionPanel>
              </AccordionItem>
            </f.FaqContainer>
          </div>
          <SpacerXSmall />
        </Accordion>
      </s.Container>
    </div>
  );
};

export default Faq;
