import React from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import { StyleProp } from '../interfaces';
import { useStyleUtils } from '../Provider';

interface Props {
  prop: StyleProp;
  path: string;
}

const ColorInput: React.FC<Props> = (props) => {
  const { path } = props;
  const { getPropByPath, setPropByPath } = useStyleUtils();

  const handleChange = (userInput: string) => {
    const value = userInput;
    setPropByPath(path, value);
  };

  return <ColorPicker value={getPropByPath(path)} onChange={handleChange} />;
};

export default ColorInput;
