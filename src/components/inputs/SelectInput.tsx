import React from "react";
import { StylePropSelect } from "@/interfaces";
import { useGetPropByPath, useSetPropByPath } from "../Provider";
import InputHeader from "./InputHeader";
import CustomRadioGroup from "./CustomRadioGroup";
import { useDebounceValue } from "@/hooks/useDebounceValue";
import { useRevisionManager } from "@/hooks/useRevisionManager";

interface Props {
  prop: StylePropSelect;
  path: string;
}

const SelectInput: React.FC<Props> = (props) => {
  const { prop, path } = props;
  const getPropByPath = useGetPropByPath();
  const setPropByPath = useSetPropByPath();
  const inputValue = getPropByPath(path);
  const isChanged =
    String(inputValue) !== String(prop.options[prop.defaultValue]);

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

  const handleChange = (optionName: string) => {
    const value = prop.options[optionName];
    if (value === inputValue) return;

    setDebounceValue(inputValue, (debounceValue) => {
      revisionManager.update(path, value, debounceValue);
    });

    setPropByPath(path, value);
  };

  const handleReset = () => {
    const value = prop.options[prop.defaultValue];
    revisionManager.update(path, prop.defaultValue, value);
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
      <CustomRadioGroup
        value={inputValue}
        onChange={handleChange}
        options={prop.options}
      />
    </>
  );
};

export default SelectInput;
