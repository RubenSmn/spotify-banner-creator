"use client";

import { StylePropFont } from "@/interfaces";
import { useGetPropByPath, useSetPropByPath } from "../Provider";
import InputHeader from "./InputHeader";
import { cn } from "@/utils/classnames";
import { useRevisionManager } from "@/hooks/useRevisionManager";

type FontInputProps = {
  prop: StylePropFont;
  path: string;
};

function FontInput({ prop, path }: FontInputProps) {
  const getPropByPath = useGetPropByPath();
  const setPropByPath = useSetPropByPath();
  const currentValue = getPropByPath(path);
  const isChanged = String(currentValue) !== String(prop.defaultValue);

  const revisionManager = useRevisionManager({
    onUndo: (action) => {
      if (action === null) return;
      const { path, previousValue } = action;
      setPropByPath(path, previousValue as string);
    },
    onRedo: (action) => {
      if (action === null) return;
      const { path, value } = action;
      setPropByPath(path, value as string);
    },
  });

  const handleChange = (newFont: string) => {
    if (newFont === currentValue) return;

    revisionManager.update(path, newFont, currentValue);
    setPropByPath(path, newFont);
  };

  const handleReset = () => {
    revisionManager.update(path, prop.defaultValue, currentValue);
    setPropByPath(path, prop.defaultValue);
  };

  return (
    <>
      <InputHeader
        title={prop.displayText}
        info={prop.info}
        isChanged={isChanged}
        onReset={handleReset}
      />
      <div className="flex flex-wrap gap-1">
        {prop.options.map((font) => (
          <button
            key={`tif-${font}`}
            onClick={() => handleChange(font)}
            style={{
              fontFamily: `var(--font-${font.replace(" ", "-").toLowerCase()})`,
            }}
            className={cn("rounded-md px-2 py-1", {
              "bg-slate-200 text-black hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600":
                font !== currentValue,
              "bg-green-600 text-white hover:bg-green-700 dark:bg-green-400 dark:text-black hover:dark:bg-green-500":
                font === currentValue,
            })}
          >
            {font}
          </button>
        ))}
      </div>
    </>
  );
}

export default FontInput;
