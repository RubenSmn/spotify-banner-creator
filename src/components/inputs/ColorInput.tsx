"use client";

import React, { useCallback } from "react";
import ColorPicker from "react-best-gradient-color-picker";
import type { StylePropColor } from "@/interfaces";
import { useGetPropByPath, useSetPropByPath } from "@/components/Provider";
import InputHeader from "./InputHeader";
import { useDebounceValue } from "@/hooks/useDebounceValue";
import { useRevisionManager } from "@/hooks/useRevisionManager";

type ColorInputProps = {
  prop: StylePropColor;
  path: string;
};

const ColorInput = ({ prop, path }: ColorInputProps) => {
  const getPropByPath = useGetPropByPath();
  const setPropByPath = useSetPropByPath();
  const inputValue = getPropByPath(path);
  const isChanged = String(inputValue) !== String(prop.defaultValue);

  const isTypography = /typography|icon/i.test(path);

  const { setDebounceValue } = useDebounceValue(inputValue, 500);
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

  const handleChange = (value: string) => {
    if (value === inputValue) return;

    setDebounceValue(inputValue, (debounceValue) => {
      revisionManager.update(path, value, debounceValue);
    });
    setPropByPath(path, value);
  };

  const handleReset = useCallback(() => {
    setPropByPath(path, prop.defaultValue);
  }, [setPropByPath, path, prop.defaultValue]);

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
