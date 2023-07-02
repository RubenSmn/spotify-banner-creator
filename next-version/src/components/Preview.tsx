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
  const [style, _] = useBannerStyle();
  const [bannerName] = useBannerName();
  const [bannerIcon] = useBannerIcon();
  const [displayIcon] = useDisplayIcon();

  const bannerContent = displayIcon ? (
    <p style={style.icon}>
      <FontAwesomeIcon icon={`fa-solid fa-${bannerIcon}` as IconProp} />
    </p>
  ) : (
    <p style={style.typography}>{bannerName}</p>
  );

  return (
    <div className="flex justify-center">
      <div
        id="banner-capture"
        style={style.banner}
        className="my-8 flex h-[402px] w-[402px] overflow-hidden"
      >
        <div className="max-w-min">{bannerContent}</div>
      </div>
    </div>
  );
};

export default Preview;
