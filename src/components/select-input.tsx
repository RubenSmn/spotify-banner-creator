import React from 'react';
import { Text, IconButton, RadioGroup, Radio, HStack } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { StylePropSelect } from '../interfaces';
import { useStyleUtils } from '../Provider';

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
      <HStack justify="space-between" alignItems="center">
        <Text my={1}>{prop.displayText}</Text>
        {isChanged && (
          <IconButton
            aria-label="reset value"
            icon={<RepeatIcon />}
            size="sm"
            variant="ghost"
            onClick={handleReset}
          />
        )}
      </HStack>
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
