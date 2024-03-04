import { Box, Text } from "@chakra-ui/react";
import BannerImage from "../../assets/banner.png";

const Banner = () => {
  return (
    <Box
      bgImage={`url(${BannerImage})`}
      bgSize="cover"
      bgPosition="center"
      h="70vh"
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Box w='70vw' display={{base: 'none', md: 'flex'}} flexDirection='column' alignItems='center' gap='50px' paddingTop='130px'>
        <Text textAlign='center' color="white" fontFamily='Koulen' fontSize='64px'>MEET THE LEGENDS</Text>
        <Text textAlign='center' color="white" fontFamily='Poppins' fontWeight='400' fontSize='24px'>
          It takes grit, talent, and a lot of luck to become a Legend. Pick your
          favorite and see what their unique set of skills can do for your
          squad.
        </Text>
      </Box>
    </Box>
  );
};

export default Banner;
