import {
  RadioGroup,
  Stack,
  Radio,
  Input,
  FormControl,
  FormLabel,
  Box,
} from '@chakra-ui/react';

const PropInput = (props: any) => {
  const { prop, path } = props;
  const options = Object.entries(prop.options);
  const hasOptions = options.length > 0;

  const input = hasOptions ? (
    <RadioGroup defaultValue={prop.defaultValue}>
      <Stack spacing={5} direction="row">
        {options.map(([label, value]: any) => (
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
  ) : (
    <Input placeholder={prop.defaultValue} />
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
