import React from "react";
import "./Team.css";
import image1 from "../../images/grey_mafioso.png";
import image2 from "../../images/black_rusian.png";
import image3 from "../../images/golden_yakuza.png";
import image4 from "../../images/browny_cartel.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "@chakra-ui/react";
import * as s from "../../styles/globalStyles";
import { Flex } from "@chakra-ui/react";
import { SpacerLarge } from "../../styles/globalStyles";
import { Text, Center } from "@chakra-ui/layout";

AOS.init();

const TeamA = () => {
  return (
    <div className="teamA" style={{ padding: "100px" }} id="Team">
      <Center>
        <Text
          as={"span"}
          position={"relative"}
          fontSize="7xl"
          color={"var(--white)"}
          _after={{
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "var(--red)",
            zIndex: -1,
          }}
        >
          Team
        </Text>
      </Center>
      <SpacerLarge />
      <SpacerLarge />
      <Flex
        justifyContent="center"
        alignItems="center"
        gridGap="50px"
        flexWrap={{ base: "wrap", sm: "unset" }}
      >
        <div data-aos="zoom-in-right">
          <div className="column">
            <div className="minting">
              <div className="card">
                <img src={image1} alt="Jane" style={{ width: "100%" }} />
              </div>
            </div>
            <div className="gras">
              <s.TextTitleteam>
                <Link
                  href="https://twitter.com/0xSacha"
                  _focus={{ outline: "none !important" }}
                  target="_blank"
                >
                  @0xsacha
                </Link>
              </s.TextTitleteam>
            </div>
            <s.TextDescriptionteam>
              Fellow degen for years now. Loves solidity & bunnies. Nothing else
              matters to him except maybe la pasta carbonara multo bene mamamia.
            </s.TextDescriptionteam>
          </div>
        </div>

        <div data-aos="zoom-in-right">
          <div className="column">
            <div className="minting">
              <div className="card">
                <img src={image2} alt="Jane" style={{ width: "100%" }} />
              </div>
            </div>
            <div className="gras">
              <s.TextTitleteam>
                <Link
                  href="https://twitter.com/Sexlanaa
				"
                  _focus={{ outline: "none !important" }}
                  target="_blank"
                >
                  @sexlanaa
                </Link>
              </s.TextTitleteam>
            </div>
            <s.TextDescriptionteam>
              Started as a degen ape. Ended as a gangsta bunny. Times to market,
              market to time. Ex-trader now focusing on Web3 because leverage
              was too high to handle.
            </s.TextDescriptionteam>
          </div>
        </div>

        <div data-aos="zoom-in-left">
          <div className="column">
            <div className="minting">
              <div className="card">
                <img src={image3} alt="Jane" style={{ width: "100%" }} />
              </div>
            </div>
            <div className="gras">
              <s.TextTitleteam>@stephanus</s.TextTitleteam>
            </div>
            <s.TextDescriptionteam>
              True respected decentralized artist somewhere in the world (even
              we don't know where he lives). He loves to say drawing paintings
              is artistic
            </s.TextDescriptionteam>
          </div>
        </div>

        <div data-aos="zoom-in-left">
          <div className="column">
            <div className="minting">
              <div className="card">
                <img src={image4} alt="Jane" style={{ width: "100%" }} />
              </div>
            </div>
            <div className="gras">
              <s.TextTitleteam>
                <Link
                  href="https://twitter.com/0xevolve"
                  _focus={{ outline: "none !important" }}
                  target="_blank"
                >
                  @0xevolve
                </Link>
              </s.TextTitleteam>
            </div>
            <s.TextDescriptionteam>
              CS Student. Solidity Dev. I ape, I code, I ape, I code, I ape, I
              code... AI Enthusiast, I'm in for the ASS stack. Any idea in web3?
              Reach me out and we'll handle this.
            </s.TextDescriptionteam>
          </div>
        </div>
      </Flex>

      {/* <div className="column">
  <div data-aos="zoom-in-down">
    <div className="card">
      <img src={image2} alt="Jane" style={{width:"100%"}}/>
        <p className="title">LAMA JUIF</p>
        <p>WANTED</p>
      </div>
    </div>
  </div>


<div className="column">
  <div data-aos="zoom-in-left">
    <div className="card">
      <img src={image3} alt="Jane" style={{width:"100%"}}/>
        <p className="title">DEMONYS</p>
        <p>WANTED</p>
      </div>
    </div>
  </div>

<div className="row">
  
<div className="column">

  <div data-aos="zoom-in-right">
    <div className="card">
      <img src={image4} alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <p className="title">FUKKKKBItch</p>
        <p>WANTED</p>
      </div>
    </div>
  </div>
  </div>

<div className="column">
  <div data-aos="zoom-out">
    <div className="card">
      <img src={image5} alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <p className="title">COOKI DOUGH</p>
        <p>WANTED</p>
      </div>
    </div>
  </div>
</div>

<div className="column">
  <div data-aos="zoom-in-left">
    <div className="card">
      <img src={image6} alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <p className="title">MARI JEN</p>
        <p>WANTED</p>
      </div>
    </div>
  </div>
</div>

</div> */}
    </div>
  );
};

export default TeamA;
