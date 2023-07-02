"use client";

import React from "react";
import { StylePropFont } from "@/interfaces";
import { useStyleUtils } from "../Provider";
import InputHeader from "./InputHeader";

interface Props {
  prop: StylePropFont;
  path: string;
}

const FontInput: React.FC<Props> = (props) => {
  const { prop, path } = props;
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
            className={`rounded-md px-2 py-1 hover:bg-green-400 hover:text-black ${
              font !== currentValue
                ? "bg-white/10 text-white"
                : "bg-green-400 text-black"
            }`}
          >
            {font}
          </button>
        ))}
      </div>
    </>
  );
};

export default FontInput;
