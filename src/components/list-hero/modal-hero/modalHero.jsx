import { Box, Text, Image } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const ModalHero = ({ isOpen, onClose, selectedItem }) => {
  const convertToEmbedUrl = (directUrl) => {
    const videoId = directUrl.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="#191919" paddingBottom="14px">
          {selectedItem && (
            <>
              <Box display="flex" alignItems="center" gap="12px">
                <ModalHeader
                  color="white"
                  fontFamily="Poppins"
                  fontWeight="600"
                  fontSize="20px"
                  paddingRight="0"
                >
                  {selectedItem?.displayName}
                </ModalHeader>
                <Text
                  color="white"
                  fontFamily="Poppins"
                  fontWeight="400"
                  fontSize="16px"
                  paddingTop="4px"
                >
                  ({selectedItem?.role})
                </Text>
              </Box>
              <ModalCloseButton color="white" border="none" />
              <ModalBody
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                gap="14px"
              >
                {selectedItem?.video ? (
                  <iframe
                    src={convertToEmbedUrl(selectedItem?.video)}
                    title={selectedItem?.displayName}
                    width="100%"
                    height="315"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <Image
                    src={selectedItem?.displayIcon}
                    alt={selectedItem?.displayName}
                  />
                )}

                <Text
                  color="white"
                  fontFamily="Poppins"
                  fontWeight="400"
                  fontSize="14px"
                >
                  {selectedItem?.description}
                </Text>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ModalHero;
