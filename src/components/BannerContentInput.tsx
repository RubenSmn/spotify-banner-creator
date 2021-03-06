import { Stack, Input, IconButton, Tooltip } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DownloadButton from './DownloadButton';
import IconModal from './IconModal';
import { useBannerName, useDisplayIcon } from '../Provider';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const BannerContentInput = () => {
  const [bannerName, setBannerName] = useBannerName();
  const [displayIcon, setDisplayIcon] = useDisplayIcon();

  const handleTextChange = (e: any) => {
    const userInput = e.target.value;
    setBannerName(userInput);
  };

  return (
    <Stack direction="row" justify="space-between">
      <Tooltip label="Change between Icon and Text" defaultIsOpen hasArrow>
        <IconButton
          aria-label="change content type"
          icon={
            <FontAwesomeIcon
              icon={(displayIcon ? 'fa-icons' : 'fa-font') as IconProp}
            />
          }
          colorScheme="cyan"
          onClick={() => setDisplayIcon((prev: boolean) => !prev)}
        />
      </Tooltip>
      {!displayIcon ? (
        <Input value={bannerName} onChange={handleTextChange} />
      ) : (
        <IconModal />
      )}
      <DownloadButton />
    </Stack>
  );
};

export default BannerContentInput;
