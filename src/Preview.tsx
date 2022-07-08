import { Box, Flex, Text } from '@chakra-ui/react';
import { useBannerName, useBannerStyle } from './Provider';

const Preview = () => {
  const [style, _] = useBannerStyle();
  const [bannerName] = useBannerName();

  return (
    <Flex justifyContent="center">
      <Box
        id="banner-capture"
        my={8}
        minHeight="400px"
        minWidth="400px"
        maxHeight="400px"
        maxWidth="400px"
        overflow="hidden"
        display="flex"
        sx={style.banner}
      >
        <Box maxWidth="min-content">
          <Text fontSize="4rem" fontFamily="Roboto" sx={style.typography}>
            {bannerName}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Preview;
