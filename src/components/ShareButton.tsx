"use client";

import { CheckIcon, ShareIcon } from "@heroicons/react/24/solid";
import {
  bannerIconAtom,
  bannerNameAtom,
  bannerStyleAtom,
  displayIconAtom,
} from "./Provider";
import { useAtomValueManually } from "@/hooks/useAtomValueManually";
import { useCallback } from "react";
import { useClipboard } from "@/hooks/useClipboard";
import { Presence } from "@ark-ui/react";

function ShareButton() {
  const getBannerStyle = useAtomValueManually(bannerStyleAtom);
  const getBannerName = useAtomValueManually(bannerNameAtom);
  const getBannerIcon = useAtomValueManually(bannerIconAtom);
  const getDisplayIcon = useAtomValueManually(displayIconAtom);

  const { hasCopied, copy } = useClipboard("");

  const handleClick = useCallback(() => {
    const bannerStyle = getBannerStyle();
    const bannerName = getBannerName();
    const bannerIcon = getBannerIcon();
    const displayIcon = getDisplayIcon();

    const bannerConfig = {
      bannerStyle: bannerStyle,
      bannerName: bannerName,
      bannerIcon: bannerIcon,
      displayIcon: displayIcon,
    };

    const json = JSON.stringify(bannerConfig);
    const encoded = btoa(json);

    const url = `${window.location.origin}/${encoded}`;

    copy(url);
  }, [copy, getBannerIcon, getBannerName, getBannerStyle, getDisplayIcon]);

  return (
    <div>
      <button
        onClick={handleClick}
        aria-label="copy the banner url"
        className="inline-flex aspect-square h-10 w-10 items-center justify-center rounded-md bg-rose-600 text-white hover:bg-rose-700 dark:bg-rose-400 dark:text-black dark:hover:bg-rose-500"
      >
        {hasCopied ? (
          <CheckIcon height={24} width={24} />
        ) : (
          <ShareIcon height={18} width={18} />
        )}
      </button>
      <Presence present={hasCopied}>
        <div className="absolute z-40 -mt-20 rounded-md bg-rose-600 px-2 py-1 text-white dark:bg-rose-400 dark:text-black md:mt-2">
          Copied!
        </div>
      </Presence>
    </div>
  );
}

export default ShareButton;
