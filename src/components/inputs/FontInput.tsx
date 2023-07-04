"use client";

import { StylePropFont } from "@/interfaces";
import { useStyleUtils } from "../Provider";
import InputHeader from "./InputHeader";
import { cn } from "@/utils/classnames";

type FontInputProps = {
  prop: StylePropFont;
  path: string;
};

function FontInput({ prop, path }: FontInputProps) {
  const { getPropByPath, setPropByPath } = useStyleUtils();
  const currentValue = getPropByPath(path);
  const isChanged = String(currentValue) !== String(prop.defaultValue);

  const handleChange = (newFont: string) => {
    setPropByPath(path, newFont);
  };

  const handleReset = () => {
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
