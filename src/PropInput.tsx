import { Box } from '@chakra-ui/react';
import { PROPTYPES } from './interfaces';
import SliderInput from './components/SliderInput';
import ColorInput from './components/ColorInput';
import SelectInput from './components/SelectInput';
import FontInput from './components/FontInput';

const PropInput = (props: any) => {
  const { prop, path } = props;
  let input: React.ReactNode = null;

  switch (prop.input) {
    case PROPTYPES.COLOR:
      input = <ColorInput prop={prop} path={path} />;
      break;
    case PROPTYPES.SELECT:
      input = <SelectInput prop={prop} path={path} />;
      break;
    case PROPTYPES.SLIDER:
      input = <SliderInput prop={prop} path={path} />;
      break;
    case PROPTYPES.FONT:
      input = <FontInput prop={prop} path={path} />;
      break;
  }

  return <Box mb={4}>{input}</Box>;
};

export default PropInput;
