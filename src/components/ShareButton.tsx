"use client";

import { CheckIcon, ShareIcon } from "@heroicons/react/24/solid";
import { bannerStyleAtom } from "./Provider";
import { useAtomValueManually } from "@/hooks/useAtomValueManually";
import { useCallback } from "react";
import { useClipboard } from "@/hooks/useClipboard";

function ShareButton() {
  const getBannerStyle = useAtomValueManually(bannerStyleAtom);
  const { hasCopied, copy } = useClipboard("");

  const handleClick = useCallback(() => {
    const bannerStyle = getBannerStyle();

    const json = JSON.stringify(bannerStyle);
    const encoded = btoa(json);

    const url = `${window.location.origin}/${encoded}`;

    copy(url);
  }, [getBannerStyle]);

  return (
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
  );
}

export default ShareButton;
