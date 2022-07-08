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
  const { getPropByPath, setPropByPath } = useStyleUtils();
  const inputValue = getPropByPath(path).match(/-?\d+(?:\.\d+)?/)[0];
  const isChanged = String(inputValue) !== String(prop.defaultValue);

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
      <Slider
        value={inputValue}
        min={prop.min}
        max={prop.max}
        step={prop.step}
        onChange={handleChange}
      >
        <SliderTrack>
          <Box position="relative" right={10} />
          <SliderFilledTrack />
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
