import { IconButton } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import html2canvas from 'html2canvas';
import { useBannerName, useBannerIcon, useDisplayIcon } from '../Provider';

const DownloadButton = () => {
  const [bannerName] = useBannerName();
  const [bannerIcon] = useBannerIcon();
  const [displayIcon] = useDisplayIcon();

  const handleClick = () => {
    const captureObject = document.getElementById('banner-capture')!;
    const textObject = captureObject.children[0] as HTMLElement;

    // should find better solution !!
    // add offset to text so canvas text is centered
    if (!displayIcon) textObject.style.paddingBottom = '4rem';

    html2canvas(captureObject, {
      width: 400,
      height: 400,
      x: 1,
      y: 1,
    }).then((canvas) => {
      // create download link
      const a = document.createElement('a');
      a.href = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      if (displayIcon) {
        a.download = `${bannerIcon}.png`;
      } else {
        a.download = `${bannerName.replace(' ', '')}.png`;
      }
      a.click();
    });

    // reset the offset
    textObject.style.paddingBottom = '';
  };

  return (
    <IconButton
      aria-label="download"
      icon={<DownloadIcon />}
      colorScheme={'green'}
      onClick={handleClick}
    />
  );
};

export default DownloadButton;
