"use client";

import React, { useCallback } from "react";
import ColorPicker from "react-best-gradient-color-picker";
import type { StylePropColor } from "@/interfaces";
import { useGetPropByPath, useSetPropByPath } from "@/components/Provider";
import InputHeader from "./InputHeader";

type ColorInputProps = {
  prop: StylePropColor;
  path: string;
};

const ColorInput: React.FC<Props> = (props) => {
  const { prop, path } = props;
  const getPropByPath = useGetPropByPath();
  const setPropByPath = useSetPropByPath();
  const inputValue = getPropByPath(path);
  const isChanged = String(inputValue) !== String(prop.defaultValue);

  const isTypography = /typography|icon/i.test(path);

  const handleChange = (userInput: string) => {
    const value = userInput;
    setPropByPath(path, value);
  };

  const handleReset = useCallback(() => {
    setPropByPath(path, prop.defaultValue);
  }, [setPropByPath]);

  return (
    <>
      <InputHeader
        title={prop.displayText}
        info={prop.info}
        isChanged={isChanged}
        onReset={handleReset}
      />
      <ColorPicker
        value={inputValue}
        onChange={handleChange}
        hideControls={isTypography}
        hideInputs
        hidePresets
      />
    </>
  );
};

export default ColorInput;
