import { useState } from 'react';
import {
  RadioGroup,
  Stack,
  Radio,
  Input,
  FormControl,
  FormLabel,
  Box,
} from '@chakra-ui/react';
import { useStyleUtils } from './Provider';

const PropInput = (props: any) => {
  const { prop, path } = props;
  const { setPropByPath } = useStyleUtils();
  const [value, setValue] = useState(prop.defaultValue);

  const options: any = Object.entries(prop.options);
  const hasOptions = options.length > 0;
  const validColor = /^#[a-f0-9]{3,6}$/i;

  const handleChange = (e: any) => {
    if (typeof e === 'string') {
      setValue(e);
      return setPropByPath(path, prop.options[e]);
    }

    const userInput = e.target.value;
    setValue(userInput);
    if (!validColor.test(userInput)) return;
    setPropByPath(path, userInput);
  };

  const input = hasOptions ? (
    <RadioGroup value={value} onChange={handleChange}>
      <Stack spacing={5} direction="row">
        {options.map(([label, _]: any) => (
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
  ) : (
    <Input value={value} onChange={handleChange} />
  );

  return (
    <Box mb={4}>
      <FormControl>
        <FormLabel>{prop.displayText}</FormLabel>
        {input}
      </FormControl>
    </Box>
  );
};

export default PropInput;
