import { useState } from "react";
import { Box, Text, IconButton, VStack, background } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon  } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    navigate(`/${role}`);
    setIsOpen(false);
  };
  return (
    <>
      <Box
        w="full"
        h="70px"
        bgColor="black"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          justifyContent="center"
          gap="32px"
        >
          <Text
            color="white"
            fontFamily="Koulen"
            fontSize="28px"
            cursor="pointer"
            onClick={() => handleRoleClick("All")}
          >
            All
          </Text>
          <Text
            color="white"
            fontFamily="Koulen"
            fontSize="28px"
            cursor="pointer"
            onClick={() => handleRoleClick("Initiator")}
          >
            INITIATOR
          </Text>
          <Text
            color="white"
            fontFamily="Koulen"
            fontSize="28px"
            cursor="pointer"
            onClick={() => handleRoleClick("Duelist")}
          >
            DUELIST
          </Text>
          <Text
            color="white"
            fontFamily="Koulen"
            fontSize="28px"
            cursor="pointer"
            onClick={() => handleRoleClick("Sentinel")}
          >
            SENTINEL
          </Text>
          <Text
            color="white"
            fontFamily="Koulen"
            fontSize="28px"
            cursor="pointer"
            onClick={() => handleRoleClick("Controller")}
          >
            CONTROLLER
          </Text>
        </Box>
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          color="white"
          fontSize="24px"
          _focus={{background: 'none'}}
          onClick={() => setIsOpen(!isOpen)}
          display={{ base: "block", md: "none" }}
        />
      </Box>
      {isOpen && (
        <Box
          bgColor="black"
          position="absolute"
          w='full'
          p={4}
          zIndex="1"
        >
          <VStack spacing={4}>
            <Text
              color="white"
              fontFamily="Koulen"
              fontSize="20px"
              cursor="pointer"
              onClick={() => handleRoleClick("All")}
            >
              All
            </Text>
            <Text
              color="white"
              fontFamily="Koulen"
              fontSize="20px"
              cursor="pointer"
              onClick={() => handleRoleClick("Initiator")}
            >
              INITIATOR
            </Text>
            <Text
              color="white"
              fontFamily="Koulen"
              fontSize="20px"
              cursor="pointer"
              onClick={() => handleRoleClick("Duelist")}
            >
              DUELIST
            </Text>
            <Text
              color="white"
              fontFamily="Koulen"
              fontSize="20px"
              cursor="pointer"
              onClick={() => handleRoleClick("Sentinel")}
            >
              SENTINEL
            </Text>
            <Text
              color="white"
              fontFamily="Koulen"
              fontSize="20px"
              cursor="pointer"
              onClick={() => handleRoleClick("Controller")}
            >
              CONTROLLER
            </Text>
          </VStack>
        </Box>
      )}
    </>
  );
};

export default Navbar;
