import React from 'react';
import {
  Tag,
  HStack,
  IconButton,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { StylePropFont } from '../interfaces';
import { RepeatIcon } from '@chakra-ui/icons';
import { useStyleUtils } from '../Provider';

interface Props {
  prop: StylePropFont;
  path: string;
}

const FontInput: React.FC<Props> = (props) => {
  const { prop, path } = props;
  const { getPropByPath, setPropByPath } = useStyleUtils();
  const currentValue = getPropByPath(path);

  const isChanged = String(currentValue) !== String(prop.defaultValue);

  const handleChange = (newFont: string) => {
    setPropByPath(path, newFont);
  };

  const handleReset = () => {
    setPropByPath(path, prop.defaultValue);
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
      <Wrap>
        {prop.options.map((font) => (
          <WrapItem key={`tif-${font}`}>
            <Tag
              onClick={() => handleChange(font)}
              colorScheme={font === currentValue ? 'yellow' : 'gray'}
              fontFamily={font}
              cursor="pointer"
              size="lg"
            >
              {font}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

export default FontInput;
