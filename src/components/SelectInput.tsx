import React from 'react';
import { RadioGroup, Radio, HStack } from '@chakra-ui/react';
import { StylePropSelect } from '../interfaces';
import { useStyleUtils } from '../Provider';
import InputHeader from './InputHeader';

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
        isChanged={isChanged}
        onReset={handleReset}
      />
      <RadioGroup value={inputValue} onChange={handleChange}>
        <HStack spacing={5} textTransform="capitalize">
          {Object.entries(prop.options).map(([label, value]: any) => (
            <Radio key={`prop-radio-${path}-${label}`} value={value}>
              {label}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
    </>
  );
};

export default SelectInput;
