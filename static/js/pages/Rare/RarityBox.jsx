import { Box } from "@chakra-ui/layout";

const Raritybox = ({ rarity, chance }) => {
  return (
    <div>
      <Box
        w="250px"
        h="50px"
        boxShadow="dark-lg"
        borderRadius="10px"
        bg={rarity.color}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="240px"
          h="47px"
          boxShadow="dark-lg"
          borderRadius="10px"
          bg="var(--black)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            w="230px"
            h="40px"
            borderRadius="10px"
            bg={rarity.color}
            m="0.5"
            position=" absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="var(--black)"
          >
            {rarity.rare} : {chance} %
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default Raritybox;
