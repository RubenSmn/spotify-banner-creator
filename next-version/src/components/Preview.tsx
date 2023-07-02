"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useBannerName,
  useBannerIcon,
  useBannerStyle,
  useDisplayIcon,
} from "./Provider";

const Preview = () => {
  const [style] = useBannerStyle();
  const [bannerName] = useBannerName();
  const [bannerIcon] = useBannerIcon();
  const [displayIcon] = useDisplayIcon();

  const textStyle = {
    ...style.typography,
    fontFamily: `var(--font-${style.typography.fontFamily
      .replace(" ", "-")
      .toLowerCase()})`,
  };

  const bannerContent = displayIcon ? (
    <p style={style.icon}>
      <FontAwesomeIcon icon={`fa-solid fa-${bannerIcon}` as IconProp} />
    </p>
  ) : (
    <p style={textStyle}>{bannerName}</p>
  );

  return (
    <div className="flex justify-center">
      <div
        id="banner-capture"
        style={style.banner}
        className="my-8 flex aspect-square h-[402px] min-h-[402px] w-[402px] min-w-[402px] overflow-hidden"
      >
        <div className="max-w-min">{bannerContent}</div>
      </div>
    </div>
  );
};

export default Preview;
