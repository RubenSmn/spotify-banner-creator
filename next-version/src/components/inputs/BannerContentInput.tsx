"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadButton from "../DownloadButton";
import { useBannerName, useDisplayIcon } from "@/components/Provider";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Tooltip } from "@/components/ui/Tooltip";

const BannerContentInput = () => {
  const [bannerName, setBannerName] = useBannerName();
  const [displayIcon, setDisplayIcon] = useDisplayIcon();

  const handleTextChange = (e: any) => {
    const userInput = e.target.value;
    setBannerName(userInput);
  };

  return (
    <div className="space-between mb-4 flex gap-2">
      <Tooltip label="Change between Icon and Text">
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-cyan-600 text-white hover:bg-cyan-700 dark:bg-cyan-400 dark:text-black dark:hover:bg-cyan-500"
          aria-label="change content type"
          onClick={() => setDisplayIcon((prev: boolean) => !prev)}
        >
          <FontAwesomeIcon
            icon={(displayIcon ? "fa-icons" : "fa-font") as IconProp}
          />
        </button>
      </Tooltip>
      <input
        value={bannerName}
        onChange={handleTextChange}
        className="h-10 flex-1 rounded-md border border-gray-300 bg-transparent px-4 text-black dark:border-gray-600 dark:text-white"
      />
      <DownloadButton />
    </div>
  );
};

export default BannerContentInput;
