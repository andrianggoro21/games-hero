import {
  Box,
  Text,
  Card,
  CardBody,
  CardFooter,
  Image,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";

const CardHero = ({ data, onItemClick }) => {
  const columnCount = useBreakpointValue({ base: 1, md: 3, xl: 5 });
  return (
    <Box
      padding="30px 0 30px 0"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Grid templateColumns={`repeat(${columnCount}, 1fr)`} gap={6}>
        {data?.map((item) => (
          <GridItem key={item?.id}>
            <Card
              maxW="sm"
              borderRadius="14px"
              bgColor="#000000"
              cursor="pointer"
              onClick={() => onItemClick(item)}
            >
              <CardBody bgColor="black" borderRadius="14px" p="0">
                <Image
                  src={item?.fullPortrait}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
              </CardBody>
              <CardFooter bgColor="black" borderBottomRadius="14px">
                <Text
                  color="white"
                  fontFamily="Poppins"
                  fontWeight="600"
                  fontSize="18px"
                >
                  {item?.displayName}
                </Text>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default CardHero;
