"use client";

import { StylePropFont } from "@/interfaces";
import { useStyleUtils } from "../Provider";
import InputHeader from "./InputHeader";

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
            className={`rounded-md px-2 py-1 ${
              font !== currentValue
                ? "bg-slate-200 text-black hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                : "bg-green-600 text-white dark:bg-green-400 dark:text-black hover:dark:bg-green-500"
            }`}
          >
            {font}
          </button>
        ))}
      </div>
    </>
  );
}

export default FontInput;
