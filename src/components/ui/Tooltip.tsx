"use client";

import React from "react";
import {
  Tooltip as TooltipComponent,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from "@ark-ui/react";
import { PropsWithChildren } from "react";

type TooltipProps = {
  label: string;
} & PropsWithChildren;

export function Tooltip({ children, label }: TooltipProps) {
  return (
    <TooltipComponent>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipPositioner className="z-40">
        <TooltipContent className="rounded-md bg-slate-300 px-2 py-1 text-black dark:bg-slate-700 dark:text-white">
          {label}
        </TooltipContent>
      </TooltipPositioner>
    </TooltipComponent>
  );
}
