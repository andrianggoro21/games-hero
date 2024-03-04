import { Box, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getData } from "./service/getData";
import HeaderListHero from "./header/header";
import CardHero from "./card-hero/cardHero";
import ModalHero from "./modal-hero/modalHero";

const ListHero = ({ selectedRole }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const refreshData = async () => {
    try {
      const data = await getData();
      setData(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  const filteredData =
    selectedRole === "All"
      ? data.filter((item) =>
          item.displayName.toLowerCase().includes(searchName.toLowerCase())
        )
      : data.filter(
          (item) =>
            item.role === selectedRole &&
            item.displayName.toLowerCase().includes(searchName.toLowerCase())
        );

  return (
    <Box padding={{base: "50px 50px", md:"50px 120px"}}>
      <HeaderListHero setSearchName={setSearchName} />
      <CardHero data={filteredData} onItemClick={handleItemClick} />
      <ModalHero
        isOpen={isOpen}
        onClose={onClose}
        selectedItem={selectedItem}
      />
    </Box>
  );
};

export default ListHero;
