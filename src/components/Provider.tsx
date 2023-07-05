"use client";

import { useEffect, type PropsWithChildren } from "react";
import { defaultBannerStyle } from "@/constants";
import type { BannerStyle } from "@/interfaces";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Provider, atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { useSearchParams } from "next/navigation";
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

function searchParamsToBannerStyle(
  queryParams: ReturnType<typeof useSearchParams>,
) {
  const obj = Object.fromEntries(queryParams);

  return Object.entries(obj).reduce((acc, curr) => {
    const [section, property] = curr[0].split("-");

    if (!(section in acc)) acc[section] = {};
    acc[section] = { ...acc[section], [property]: curr[1] };

    return acc;
    // Todo: add proper type
  }, {} as any);
}

function SetupBannerStyleFromURL() {
  const searchParams = useSearchParams();
  const setBannerStyle = useSetAtom(bannerStyleAtom);

  useEffect(() => {
    if (searchParams.keys.length === 0) return;
    const bannerStyleFromURL = searchParamsToBannerStyle(searchParams);
    setBannerStyle(bannerStyleFromURL);
  }, []);

  return null;
}

function BannerProvider({ children }: PropsWithChildren) {
  return (
    <Provider>
      <SetupBannerStyleFromURL />
      {children}
    </Provider>
  );
}

export default BannerProvider;
