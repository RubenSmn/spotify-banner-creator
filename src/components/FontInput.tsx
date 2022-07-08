import React from 'react';
import { Tag, Wrap, WrapItem } from '@chakra-ui/react';
import { StylePropFont } from '../interfaces';
import { useStyleUtils } from '../Provider';
import InputHeader from './InputHeader';

interface Props {
  prop: StylePropFont;
  path: string;
}

const FontInput: React.FC<Props> = (props) => {
  const { prop, path } = props;
  const { getPropByPath, setPropByPath } = useStyleUtils();
  const currentValue = getPropByPath(path);
  const isChanged = String(currentValue) !== String(prop.defaultValue);

  const activeColor = (font: string) => {
    if (font !== currentValue) return 'gray';
  };

  const handleChange = (newFont: string) => {
    setPropByPath(path, newFont);
  };

  const handleReset = () => {
    setPropByPath(path, prop.defaultValue);
  };

  return (
    <>
      <InputHeader
        title={prop.displayText}
        info={prop.info}
        isChanged={isChanged}
        onReset={handleReset}
      />
      <Wrap>
        {prop.options.map((font) => (
          <WrapItem key={`tif-${font}`}>
            <Tag
              onClick={() => handleChange(font)}
              fontFamily={font}
              cursor="pointer"
              size="lg"
              colorScheme={activeColor(font)}
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
