import React from 'react';
import {
  Slider,
  SliderTrack,
  Box,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Text,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { StylePropSlider } from '../interfaces';
import { useStyleUtils } from '../Provider';

interface Props {
  prop: StylePropSlider;
  path: string;
}

const labelStyles = {
  pt: '7',
  fontSize: 'sm',
  textTransform: 'capitalize',
};

const SliderInput: React.FC<Props> = (props) => {
  const { prop, path } = props;
  const { setPropByPath } = useStyleUtils();

  const handleChange = (userInput: number) => {
    const value = userInput + prop.unit;
    setPropByPath(path, value);
  };

  const handleReset = () => {
    const value = prop.defaultValue + prop.unit;
    setPropByPath(path, value);
  };

  return (
    <>
      <Stack direction="row" justify="space-between" alignItems="center">
        <Text>{prop.displayText}</Text>
        <IconButton
          aria-label="reset value"
          icon={<RepeatIcon />}
          size="sm"
          variant="ghost"
          onClick={handleReset}
        />
      </Stack>
      <Slider
        defaultValue={Number(prop.defaultValue)}
        min={prop.min}
        max={prop.max}
        step={prop.step}
        onChange={handleChange}
      >
        <SliderTrack bg="red.100">
          <Box position="relative" right={10} />
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={3} />
        <Flex justify="space-between" width="inherit">
          {prop.helpers.map((helper) => {
            const [key, _] = Object.entries(helper)[0];
            return (
              <Box key={`slm-${prop}-${key}`} sx={{ ...labelStyles }}>
                {key}
              </Box>
            );
          })}
        </Flex>
      </Slider>
    </>
  );
};

export default SliderInput;
