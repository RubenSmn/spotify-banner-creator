import React from 'react';
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

  const handleChange = (userInput: string) => {
    const value = prop.options[userInput];
    setPropByPath(path, value);
  };

  return (
    <RadioGroup value={getPropByPath(path)} onChange={handleChange}>
      <Stack spacing={5} direction="row" textTransform="capitalize">
        {Object.entries(prop.options).map(([label, _]: any) => (
          <Radio
            key={`prop-radio-${path}-${label}`}
            colorScheme="yellow"
            value={label}
          >
            {label}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default SelectInput;
