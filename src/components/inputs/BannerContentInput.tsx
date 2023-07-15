"use client";

import DownloadButton from "../DownloadButton";
import {
  bannerIconAtom,
  bannerNameAtom,
  displayIconAtom,
} from "@/components/Provider";
import { Tooltip } from "@/components/ui/Tooltip";
import { useAtom } from "jotai";
import ShareButton from "../ShareButton";
import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxOption,
  ComboboxPositioner,
  ComboboxTrigger,
  Portal,
  type ComboboxOptionProps,
} from "@ark-ui/react";
import { useMemo, useState } from "react";
import iconList from "@/constants/icon-options";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { cn } from "@/utils/classnames";
import Icon from "../Icon";

const comboboxData: Pick<ComboboxOptionProps, "label" | "value">[] =
  iconList.map((icon) => ({
    value: icon,
    label: icon.replace(/-/g, " "),
  }));

const BannerContentInput = () => {
  const [bannerName, setBannerName] = useAtom(bannerNameAtom);
  const [bannerIcon, setBannerIcon] = useAtom(bannerIconAtom);
  const [displayIcon, setDisplayIcon] = useAtom(displayIconAtom);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setBannerName(userInput);
  };

  const [comboboxValue, setComboboxValue] = useState(
    bannerIcon.replace(/-/g, " "),
  );
  const [activeComboboxValue, setActiveComboboxValue] = useState(
    bannerIcon.replace(/-/g, " "),
  );

  const options = useMemo(() => {
    const filtered = comboboxData.filter((item) =>
      item.label.toLowerCase().includes(comboboxValue.toLowerCase()),
    );

    return filtered.length > 0 ? filtered : comboboxData;
  }, [comboboxValue]);

  return (
    <div className="space-between mb-4 flex gap-2">
      <Tooltip label="Change between Icon and Text">
        <button
          className="inline-flex aspect-square h-10 w-10 items-center justify-center rounded-md bg-cyan-600 text-white hover:bg-cyan-700 dark:bg-cyan-400 dark:text-black dark:hover:bg-cyan-500"
          aria-label="change content type"
          onClick={() => setDisplayIcon((prev: boolean) => !prev)}
        >
          <Icon icon={displayIcon ? "icons" : "font"} />
        </button>
      </Tooltip>
      {displayIcon ? (
        <Combobox
          inputValue={comboboxValue}
          onInputChange={({ value }: { value: string }) =>
            setComboboxValue(value)
          }
          onSelect={({ value }: { value: string }) => setBannerIcon(value)}
          inputBehavior={"autohighlight"}
          onHighlight={({ value }: { value: string }) =>
            setActiveComboboxValue(value)
          }
          className="w-full flex-1"
        >
          {({ isOpen }: { isOpen: boolean }) => (
            <>
              <ComboboxControl className="flex h-10 rounded-md border border-gray-300 dark:border-gray-600 ">
                <ComboboxInput className="w-full flex-1 bg-transparent px-4 text-black dark:text-white " />
                <ComboboxTrigger className="flex aspect-square items-center justify-center">
                  {!isOpen ? (
                    <ChevronDownIcon height={24} width={24} />
                  ) : (
                    <ChevronUpIcon height={24} width={24} />
                  )}
                </ComboboxTrigger>
              </ComboboxControl>
              <Portal>
                <ComboboxPositioner>
                  <ComboboxContent className="max-h-64 overflow-y-scroll rounded-md bg-slate-200 p-2 text-black dark:bg-slate-700 dark:text-white">
                    {options.map((item, index) => (
                      <ComboboxOption
                        key={`${item.value}:${index}`}
                        label={item.label}
                        value={item.value}
                        className={cn(
                          "flex items-center gap-2 rounded-md p-2",
                          activeComboboxValue === item.value &&
                            "bg-slate-300 dark:bg-slate-600",
                        )}
                      >
                        <Icon
                          icon={item.value}
                          className="aspect-square h-6 w-6"
                        />
                        {item.label}
                      </ComboboxOption>
                    ))}
                  </ComboboxContent>
                </ComboboxPositioner>
              </Portal>
            </>
          )}
        </Combobox>
      ) : (
        <input
          value={bannerName}
          onChange={handleTextChange}
          className="h-10 w-full flex-1 rounded-md border border-gray-300 bg-transparent px-4 text-black dark:border-gray-600 dark:text-white"
          aria-label="banner text"
        />
      )}
      <ShareButton />
      <DownloadButton />
    </div>
  );
};

export default BannerContentInput;
