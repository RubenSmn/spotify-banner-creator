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
import { StylePropSlider } from "@/interfaces";
import { useStyleUtils } from "../Provider";
import InputHeader from "./InputHeader";

interface Props {
  prop: StylePropSlider;
  path: string;
}

const SliderInput: React.FC<Props> = (props) => {
  const { prop, path } = props;
  const { getPropByPath, setPropByPath } = useStyleUtils();
  const inputValue = getPropByPath(path).replace(prop.unit, "");
  const isChanged = String(inputValue) !== String(prop.defaultValue);

  const handleChange = ({ value }: { value: number }) => {
    const newValue = value + prop.unit;
    setPropByPath(path, newValue);
  };

  const handleReset = () => {
    const value = prop.defaultValue + prop.unit;
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
        value={Number(inputValue)}
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
                  ((Number(inputValue) - prop.min) / (prop.max - prop.min)) *
                  100
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
