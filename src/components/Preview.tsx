"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  displayIconAtom,
  bannerNameAtom,
  bannerIconAtom,
  bannerStyleAtom,
} from "./Provider";
import { useAtomValue } from "jotai";
import React from "react";

const Preview = () => {
  const style = useAtomValue(bannerStyleAtom);
  const bannerName = useAtomValue(bannerNameAtom);
  const bannerIcon = useAtomValue(bannerIconAtom);
  const displayIcon = useAtomValue(displayIconAtom);

  const textStyle = {
    ...style.typography,
    fontFamily: `var(--font-${style.typography.fontFamily
      .replace(" ", "-")
      .toLowerCase()})`,
  } as React.CSSProperties;

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
        className="flex aspect-square h-[402px] min-h-[402px] w-[402px] min-w-[402px] overflow-hidden"
      >
        <div className="max-w-min">{bannerContent}</div>
      </div>
    </div>
  );
};

export default Preview;
