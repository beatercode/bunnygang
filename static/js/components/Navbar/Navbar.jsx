import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../../images/logo_transparent.png";
import { Connect } from "../index";
import { Link as RouterLink } from "react-router-dom";
// import * as s from "../../styles/globalStyles";

const Links = ["Story", "Specs", "Roadmap", "FAQ", "Team"];

const NavLink = ({ children }) => (
  <div>
    <Link
      color={"white"}
      px={2}
      py={1}
      rounded={"md"}
      href={`#${children}`}
      _focus={{ outline: "none !important" }}
    >
      {children}
    </Link>
  </div>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={"rgba(0,0,0,0)"}
        px={4}
        width={"7xl"}
        marginLeft={"auto"}
        marginRight={"auto"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={{ base: "95vw", md: "auto" }}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex
            spacing={8}
            alignItems={"center"}
            justifyContent={{ base: "flex-end", md: "space-between" }}
            width={"100%"}
          >
            <Box boxSize="70px" as={RouterLink} to="/">
              <Image src={logo} alt="logo" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Link
                color={"white"}
                px={2}
                py={1}
                rounded={"md"}
                to="/attributes"
                as={RouterLink}
                _focus={{ outline: "none !important" }}
              >
                Attributes
              </Link>
              <Box>
                {/* <s.SpacerXSmall /> */}
                <Connect size="sm" />
              </Box>
            </HStack>
          </Flex>
          {/* <Flex alignItems={"center"}>
						<Button variant={"solid"} colorScheme={"gray"} size={"sm"} mr={4}>
							Join a Gang
						</Button>
					</Flex> */}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            {/* <Connect /> */}
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Link
                color={"white"}
                px={2}
                py={1}
                rounded={"md"}
                to="/Rare"
                as={RouterLink}
                _focus={{ outline: "none !important" }}
              >
                Attributes
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
