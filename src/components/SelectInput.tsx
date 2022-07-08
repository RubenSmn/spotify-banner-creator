import React from 'react';
import { StylePropSelect } from '../interfaces';
import { useStyleUtils } from '../Provider';
import InputHeader from './InputHeader';
import CustomRadioGroup from './CustomRadioGroup';

interface Props {
  prop: StylePropSelect;
  path: string;
}

const SelectInput: React.FC<Props> = (props) => {
  const { prop, path } = props;
  const { setPropByPath, getPropByPath } = useStyleUtils();
  const inputValue = getPropByPath(path);
  const isChanged =
    String(inputValue) !== String(prop.options[prop.defaultValue]);

  const handleChange = (userInput: string) => {
    setPropByPath(path, userInput);
  };

  const handleReset = () => {
    const value = prop.options[prop.defaultValue];
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
