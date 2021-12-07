import {
  Box,
  chakra,
  Container,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import logo from "../../images/logo_transparent.png";
import { Link as RouterLink } from "react-router-dom";

const Logo = (props) => {
  return <Image src={logo} alt="logo" boxSize="100px" />;
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box color={"white"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack direction={"row"} spacing={9}>
          <Link to="/terms" as={RouterLink}>
            Terms and conditions
          </Link>
          <Link
            href={
              "https://arbiscan.io/address/0x091db4502cbd66492d3e509403bb7ac721ac9f84"
            }
            target="_blank"
          >
            Contract
          </Link>
          <Link href={"https://agoranft.io"} target="_blank">
            Marketplace
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2021 BGLabs. All rights reserved.</Text>

          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/TheBunnyGangNFT"}
              target="_blank"
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton
              label={"Discord"}
              href={"discord.gg/6Wc8qKVyBu"}
              target="_blank"
            >
              <FaDiscord />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
