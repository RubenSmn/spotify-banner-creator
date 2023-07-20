"use client";

import React from "react";
import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@ark-ui/react";
import type { StylePropSlider } from "@/interfaces";
import { useGetPropByPath, useSetPropByPath } from "../Provider";
import InputHeader from "./InputHeader";
import { useRevisionManager } from "@/hooks/useRevisionManager";
import { useDebounceValue } from "@/hooks/useDebounceValue";

type SliderInputProps = {
  prop: StylePropSlider;
  path: string;
};

const SliderInput = ({ prop, path }: SliderInputProps) => {
  const getPropByPath = useGetPropByPath();
  const setPropByPath = useSetPropByPath();
  const inputValue = Number(getPropByPath(path).replace(prop.unit, ""));
  const isChanged = String(inputValue) !== String(prop.defaultValue);

  const { setDebounceValue } = useDebounceValue(inputValue, 500);
  const revisionManager = useRevisionManager({
    onUndo: (action) => {
      if (action === null) return;
      const { path, previousValue } = action;
      setPropByPath(path, previousValue + prop.unit);
    },
    onRedo: (action) => {
      if (action === null) return;
      const { path, value } = action;
      setPropByPath(path, value + prop.unit);
    },
  });

  const handleChange = ({ value }: { value: number }) => {
    if (value === inputValue) return;

    const newValue = value + prop.unit;
    setDebounceValue(inputValue, (debounceValue) => {
      revisionManager.update(path, value, debounceValue);
    });

    setPropByPath(path, newValue);
  };

  const handleReset = () => {
    const value = prop.defaultValue + prop.unit;
    revisionManager.update(path, prop.defaultValue, inputValue);
    setPropByPath(path, value);
  };

  return (
    <>
      <InputHeader
        title={prop.displayText}
        info={prop.info}
        isChanged={isChanged}
        onReset={handleReset}
      />
      <Slider
        value={inputValue}
        min={prop.min}
        max={prop.max}
        step={prop.step}
        onChange={handleChange}
      >
        <SliderLabel className="sr-only">{prop.displayText}</SliderLabel>
        <SliderControl>
          <SliderTrack className="h-1 rounded-lg bg-gray-300 dark:bg-gray-600">
            <SliderRange
              className="h-1 rounded-lg bg-green-600 active:scale-110 dark:bg-green-400"
              style={{
                width: `${
                  ((inputValue - prop.min) / (prop.max - prop.min)) * 100
                }%`,
              }}
            />
          </SliderTrack>
          <SliderThumb className="-top-3/4 h-3 w-3 rounded-full bg-white shadow dark:bg-green-100" />
        </SliderControl>
      </Slider>
      <div className="flex justify-between">
        {prop.helpers.map((helper) => {
          const key = Object.keys(helper)[0];
          return (
            <div key={`slm-${prop}-${key}`} className="text-sm capitalize">
              {key}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SliderInput;
