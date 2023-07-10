"use client";

import { type PropsWithChildren } from "react";
import { defaultBannerStyle } from "@/constants";
import type { BannerStyle } from "@/interfaces";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Provider, atom, useAtom, useAtomValue } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { defaultBannerName } from "@/constants/default-style";
library.add(fas);

export const bannerStyleAtom = atom<BannerStyle>(defaultBannerStyle);
export const bannerNameAtom = atom(defaultBannerName);
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

function SetupBannerStyleFromSlug({ slug }: { slug: string }) {
  let style = {
    bannerStyle: defaultBannerStyle,
    bannerName: defaultBannerName,
  };
  try {
    const decodedURI = decodeURIComponent(slug);
    const decodedString = atob(decodedURI);
    style = JSON.parse(decodedString);
  } catch {}
  const { bannerStyle, bannerName } = style;

  useHydrateAtoms([[bannerStyleAtom, bannerStyle]]);
  useHydrateAtoms([[bannerNameAtom, bannerName]]);

  return null;
}

type BannerProviderProps = {
  slug: string;
} & PropsWithChildren;

function BannerProvider({ slug, children }: BannerProviderProps) {
  return (
    <Provider>
      <SetupBannerStyleFromSlug slug={slug} />
      {children}
    </Provider>
  );
}

export default BannerProvider;
