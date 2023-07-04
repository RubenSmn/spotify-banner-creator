"use client";

import React, { type PropsWithChildren } from "react";
import { defaultBannerStyle } from "@/constants";
import { BannerStyle } from "@/interfaces";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Provider, atom, useAtom, useAtomValue } from "jotai";
library.add(fas);

export const bannerStyleAtom = atom<BannerStyle>(defaultBannerStyle);
export const bannerNameAtom = atom("Funky Finesse");
export const bannerIconAtom = atom("code");
export const displayIconAtom = atom(false);

export const useGetPropByPath = () => {
  const bannerStyle = useAtomValue(bannerStyleAtom);
  return (propPath: string) => {
    if (!propPath) return null;
    return propPath
      .split(".")
      .reduce((acc: any, curr) => acc[curr], bannerStyle);
  };
};

export const useSetPropByPath = () => {
  const [bannerStyle, setBannerStyle] = useAtom(bannerStyleAtom);
  return (propPath: string, value: string) => {
    if (!propPath || !value) return null;
    const temp: BannerStyle = structuredClone(bannerStyle);
    propPath.split(".").reduce((acc: any, curr, i, src) => {
      if (i === src.length - 1) {
        acc[src[src.length - 1]] = value;
        return acc[src[src.length - 1]];
      }
      return acc[curr];
    }, temp);
    setBannerStyle(temp);
    return temp;
  };
};

function BannerProvider({ children }: PropsWithChildren) {
  return <Provider>{children}</Provider>;
}

export default BannerProvider;
