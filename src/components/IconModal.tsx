import React, { useState } from 'react';
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Input,
  Grid,
  GridItem,
  useDisclosure,
  Tooltip,
} from '@chakra-ui/react';
import iconList from '../constants/icon-options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useBannerIcon } from '../Provider';

const IconModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [filterList, setFilterList] = useState(iconList);
  const [value, setValue] = useState('');
  const [bannerIcon, setBannerIcon] = useBannerIcon();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = event.target.value;
    setValue(userInput);
    setFilterList(() => {
      return iconList.filter((iconName) => iconName.indexOf(userInput) > -1);
    });
  };

  const handleClick = (icon: string) => {
    setBannerIcon(icon);
    onClose();
  };

  return (
    <>
      <Input onFocus={onOpen} value={bannerIcon} readOnly />
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search an Icon for your Banner</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box mb={4}>
              <Input
                ref={initialRef}
                value={value}
                onChange={handleChange}
                placeholder="Search"
              />
            </Box>
            <Grid
              templateColumns="repeat(5, 1fr)"
              gap={4}
              overflowY="scroll"
              height="lg"
            >
              {filterList.map((icon) => (
                <Tooltip
                  key={`igi-${icon}`}
                  label={icon.replace(/-/g, ' ')}
                  textTransform="capitalize"
                >
                  <GridItem
                    height="72px"
                    width="72px"
                    bg="cyan.600"
                    borderRadius={12}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    cursor="pointer"
                    onClick={() => handleClick(icon)}
                  >
                    <FontAwesomeIcon icon={`fa fa-${icon}`} />
                  </GridItem>
                </Tooltip>
              ))}
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme="gray">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default IconModal;
