import React from 'react';
import { Text, IconButton } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { RadioGroup, Radio, Stack } from '@chakra-ui/react';
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
      <Stack direction="row" justify="space-between" alignItems="center">
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
      </Stack>
      <RadioGroup value={inputValue} onChange={handleChange}>
        <Stack spacing={5} direction="row" textTransform="capitalize">
          {Object.entries(prop.options).map(([label, value]: any) => (
            <Radio
              key={`prop-radio-${path}-${label}`}
              colorScheme="yellow"
              value={value}
            >
              {label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </>
  );
};

export default SelectInput;
