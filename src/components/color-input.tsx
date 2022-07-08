import React from 'react';
import { Stack, Text, IconButton } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import ColorPicker from 'react-best-gradient-color-picker';
import { StyleProp } from '../interfaces';
import { useStyleUtils } from '../Provider';

interface Props {
  prop: StyleProp;
  path: string;
}

const ColorInput: React.FC<Props> = (props) => {
  const { prop, path } = props;
  const { getPropByPath, setPropByPath } = useStyleUtils();
  const inputValue = getPropByPath(path);
  const isChanged = String(inputValue) !== String(prop.defaultValue);

  const isTypography = /typography/i.test(path);

  const handleChange = (userInput: string) => {
    const value = userInput;
    setPropByPath(path, value);
  };

  const handleReset = () => {
    setPropByPath(path, prop.defaultValue);
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
      <ColorPicker
        value={inputValue}
        onChange={handleChange}
        hideControls={isTypography}
        hideInputs
        hidePresets
      />
    </>
  );
};

export default ColorInput;
