"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Portal,
} from "@ark-ui/react";
import iconList from "../constants/icon-options";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Tooltip } from "./ui/Tooltip";
import { useAtom } from "jotai";
import { bannerIconAtom } from "./Provider";

function useDisclosure(defaultValue = false) {
  const [isOpen, setIsOpen] = useState(defaultValue);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  return { isOpen, onOpen, onClose };
}

const IconModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [filterList, setFilterList] = useState(iconList);
  const [value, setValue] = useState("tesing");
  const [bannerIcon, setBannerIcon] = useAtom(bannerIconAtom);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = event.target.value;
    setValue(userInput);
    // setFilterList(() => {
    //   return iconList.filter((iconName) => iconName.indexOf(userInput) > -1);
    // });
  };

  const handleClick = (icon: string) => {
    setBannerIcon(icon);
    onClose();
  };

  return (
    <>
      <Dialog
        // open={isOpen}
        // onOpen={onOpen}
        // onClose={onClose}
        initialFocusEl={initialRef.current}
      >
        <DialogTrigger className="w-full">
          <input
            defaultValue={bannerIcon}
            // onClick={onOpen}
            readOnly
            className="h-10 w-full rounded-md border bg-transparent px-4 text-black dark:border-gray-600 dark:text-white"
          />
        </DialogTrigger>
        <Portal>
          <DialogBackdrop className="fixed bg-gray-700/70" />
          <DialogContainer className="z-200 fixed left-0 top-0 flex w-full items-center justify-center">
            <DialogContent className="min-w-[24rem]">
              <DialogTitle>Search an Icon for your Banner</DialogTitle>
              <input
                ref={initialRef}
                value={value}
                onChange={handleChange}
                placeholder="Search"
                className="mb-4"
              />
              <div className="grid h-4/5 grid-cols-5 gap-4 overflow-y-scroll">
                {filterList.map((icon) => (
                  <Tooltip key={`igi-${icon}`} label={icon.replace(/-/g, " ")}>
                    <button
                      className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-md dark:bg-cyan-600"
                      aria-label={icon}
                      onClick={() => handleClick(icon)}
                    >
                      <FontAwesomeIcon icon={`fa fa-${icon}` as IconProp} />
                    </button>
                  </Tooltip>
                ))}
              </div>
              <DialogDescription>Dialog Description</DialogDescription>
              <DialogCloseTrigger className="flex h-10 w-10 items-center justify-center rounded-md">
                Cancel
              </DialogCloseTrigger>
            </DialogContent>
          </DialogContainer>
        </Portal>
      </Dialog>
    </>
  );
};

export default IconModal;
