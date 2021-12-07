import React from "react";
import { Skeleton } from "@chakra-ui/react";
import { Center, Text, Flex } from "@chakra-ui/layout";
import { SpacerLarge } from "../../styles/globalStyles";
import Attributebackground from "./Background/Attributebackground";
import Attributeears from "./Ears/Attributeears";
import Attributeeyes from "./Eyes/Attributeeyes";
import Attributehand from "./Hand/Attributehand";
import Attributehair from "./Hair/Attributehair";
import Attributemouthbite from "./Mouth_bite/Attributemouthbite";
import Attributemouth from "./Mouth/Attributemouth";
import Attributeclothes from "./Clothes/Attributeclothes";

const Rare = () => {
  return (
    <div>
      <SpacerLarge />
      <Center>
        <Flex w="80%" justify="center" margin="20 px">
          <Text
            as={"span"}
            position={"relative"}
            fontSize={{ base: "5xl", sm: "6xl", lg: "7xl" }}
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
            Rarity Distribution
          </Text>
        </Flex>
      </Center>
      <SpacerLarge />
      <SpacerLarge />
      <SpacerLarge />
      <Center>
        <Text
          position={"relative"}
          fontSize="3xl"
          color={"var(--white)"}
          marginLeft="1vw"
        >
          Background rarity
        </Text>
      </Center>
      <SpacerLarge />
      <Attributebackground />
      <SpacerLarge />
      <Center>
        <Skeleton
          startColor="whiteAlpha.100"
          endColor="whiteAlpha.800"
          height="5px"
          width="50vw"
        />
      </Center>
      <SpacerLarge />
      <SpacerLarge />
      <Center>
        <Text
          position={"relative"}
          fontSize="3xl"
          color={"var(--white)"}
          marginLeft="1vw"
        >
          Ears rarity
        </Text>
      </Center>
      <SpacerLarge />
      <Attributeears />
      <SpacerLarge />
      <Center>
        <Skeleton
          startColor="whiteAlpha.100"
          endColor="whiteAlpha.800"
          height="5px"
          width="50vw"
        />
      </Center>
      <SpacerLarge />
      <SpacerLarge />
      <Center>
        <Text
          position={"relative"}
          fontSize="3xl"
          color={"var(--white)"}
          marginLeft="1vw"
        >
          Eyes rarity
        </Text>
      </Center>
      <SpacerLarge />
      <Attributeeyes />
      <SpacerLarge />
      <Center>
        <Skeleton
          startColor="whiteAlpha.100"
          endColor="whiteAlpha.800"
          height="5px"
          width="50vw"
        />
      </Center>
      <SpacerLarge />
      <SpacerLarge />
      <Center>
        <Text
          position={"relative"}
          fontSize="3xl"
          color={"var(--white)"}
          marginLeft="1vw"
        >
          Hands rarity
        </Text>
      </Center>
      <SpacerLarge />
      <Attributehand />
      <SpacerLarge />
      <Center>
        <Skeleton
          startColor="whiteAlpha.100"
          endColor="whiteAlpha.800"
          height="5px"
          width="50vw"
        />
      </Center>
      <SpacerLarge />
      <SpacerLarge />
      <Center>
        <Text
          position={"relative"}
          fontSize="3xl"
          color={"var(--white)"}
          marginLeft="1vw"
        >
          Head rarity
        </Text>
      </Center>
      <SpacerLarge />
      <Attributehair />
      <SpacerLarge />
      <Center>
        <Skeleton
          startColor="whiteAlpha.100"
          endColor="whiteAlpha.800"
          height="5px"
          width="50vw"
        />
      </Center>
      <SpacerLarge />
      <SpacerLarge />
      <Center>
        <Text
          position={"relative"}
          fontSize="3xl"
          color={"var(--white)"}
          marginLeft="1vw"
        >
          Mouth Attributes rarity
        </Text>
      </Center>
      <SpacerLarge />
      <Attributemouthbite />
      <SpacerLarge />
      <Center>
        <Skeleton
          startColor="whiteAlpha.100"
          endColor="whiteAlpha.800"
          height="5px"
          width="50vw"
        />
      </Center>
      <SpacerLarge />
      <SpacerLarge />
      <Center>
        <Text
          position={"relative"}
          fontSize="3xl"
          color={"var(--white)"}
          marginLeft="1vw"
        >
          Mouth rarity
        </Text>
      </Center>
      <SpacerLarge />
      <Attributemouth />
      <SpacerLarge />
      <Center>
        <Skeleton
          startColor="whiteAlpha.100"
          endColor="whiteAlpha.800"
          height="5px"
          width="50vw"
        />
      </Center>
      <SpacerLarge />
      <Center>
        <Text
          position={"relative"}
          fontSize="3xl"
          color={"var(--white)"}
          marginLeft="1vw"
        >
          Clothes rarity
        </Text>
      </Center>
      <SpacerLarge />
      <Attributeclothes />
      <SpacerLarge />
      <Center>
        <Skeleton
          startColor="whiteAlpha.100"
          endColor="whiteAlpha.800"
          height="5px"
          width="50vw"
        />
      </Center>
    </div>
  );
};
export default Rare;
