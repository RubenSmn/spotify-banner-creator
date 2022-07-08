import React from 'react';
import {
  Slider,
  SliderTrack,
  Box,
  SliderFilledTrack,
  SliderThumb,
  Flex,
} from '@chakra-ui/react';
import { StylePropSlider } from '../interfaces';
import { useStyleUtils } from '../Provider';
import InputHeader from './InputHeader';

interface Props {
  prop: StylePropSlider;
  path: string;
}

const labelStyles = {
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
      <InputHeader
        title={prop.displayText}
        isChanged={isChanged}
        onReset={handleReset}
      />
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
      </Slider>
      <Flex justify="space-between">
        {prop.helpers.map((helper) => {
          const [key, _] = Object.entries(helper)[0];
          return (
            <Box key={`slm-${prop}-${key}`} sx={{ ...labelStyles }}>
              {key}
            </Box>
          );
        })}
      </Flex>
    </>
  );
};

export default SliderInput;
