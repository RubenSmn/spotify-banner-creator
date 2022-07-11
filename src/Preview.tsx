import { Box, Flex, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  useBannerName,
  useBannerIcon,
  useBannerStyle,
  useDisplayIcon,
} from './Provider';

const Preview = () => {
  const [style, _] = useBannerStyle();
  const [bannerName] = useBannerName();
  const [bannerIcon] = useBannerIcon();
  const [displayIcon] = useDisplayIcon();

  const bannerContent = displayIcon ? (
    <Text sx={style.icon}>
      <FontAwesomeIcon icon={`fa-solid fa-${bannerIcon}`} />
    </Text>
  ) : (
    <Text sx={style.typography}>{bannerName}</Text>
  );

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
        <Box maxWidth="min-content">{bannerContent}</Box>
      </Box>
    </Flex>
  );
};

export default Preview;
