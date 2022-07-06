import { Box, Flex, Text } from '@chakra-ui/react';
import { defaultBannerStyle } from './constants';

const Preview = () => {
  const style = defaultBannerStyle;

  return (
    <Flex justifyContent="center">
      <Box
        my={8}
        minHeight="400px"
        minWidth="400px"
        display="flex"
        sx={style.banner}
      >
        <Box maxWidth="200px">
          <Text fontWeight="bold" fontSize="4rem" sx={style.typography}>
            Blue Blues
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Preview;
