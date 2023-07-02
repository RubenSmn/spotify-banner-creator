"use client";

import html2canvas from "html2canvas";
import {
  useBannerName,
  useBannerIcon,
  useDisplayIcon,
} from "@/components/Provider";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "./ui/Tooltip";

function DownloadButton() {
  const [bannerName] = useBannerName();
  const [bannerIcon] = useBannerIcon();
  const [displayIcon] = useDisplayIcon();

  const handleClick = () => {
    const captureObject = document.getElementById("banner-capture")!;
    const textObject = captureObject.children[0] as HTMLElement;

    // should find better solution !!
    // add offset to text so canvas text is centered
    if (!displayIcon) textObject.style.paddingBottom = "4rem";

    html2canvas(captureObject, {
      width: 400,
      height: 400,
      x: 1,
      y: 1,
    }).then((canvas) => {
      // create download link
      const a = document.createElement("a");
      a.href = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      if (displayIcon) {
        a.download = `${bannerIcon}.png`;
      } else {
        a.download = `${bannerName.replace(" ", "")}.png`;
      }
      a.click();
    });

    // reset the offset
    textObject.style.paddingBottom = "";
  };

  return (
    <Tooltip label="Download your Banner">
      <button
        aria-label="download"
        onClick={handleClick}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md dark:bg-emerald-400 dark:hover:bg-emerald-500"
      >
        <ArrowDownTrayIcon className="h-5 w-5 text-white dark:text-black" />
      </button>
    </Tooltip>
  );
}

export default DownloadButton;
