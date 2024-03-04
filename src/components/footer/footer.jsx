import { Flex, Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      width="100%"
      py="8"
      bg="black"
      color="white"
      padding='24px'
    >
      <Box>
        <Text fontSize="sm">
          Copyright &copy; Andri Anggoro {new Date().getFullYear()}
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
