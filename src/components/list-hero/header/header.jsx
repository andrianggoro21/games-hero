import { Box, Text, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const HeaderListHero = ({ setSearchName }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection={{base: 'column', md: 'row'}}>
      <Box display="flex" alignItems="center" gap="20px">
        <Text color="white" fontFamily="Koulen" fontSize="32px">
          THE LEGENDS
        </Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        border="1px solid white"
        borderRadius="10px"
        padding="2px 8px"
        
      >
        <Search2Icon color="white" />
        <Input
          w="15vw"
          color="white"
          placeholder="Search your legends here... "
          borderColor="transparent"
          _hover="none"
          _focus={{ borderColor: "transparent", boxShadow: "none" }}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default HeaderListHero;
