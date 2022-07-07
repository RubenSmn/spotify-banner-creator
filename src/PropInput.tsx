import { FormControl, FormLabel, Box } from '@chakra-ui/react';
import { PROPTYPES } from './constants';
import SliderInput from './components/slider-input';
import ColorInput from './components/color-input';
import SelectInput from './components/select-input';

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
  }

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
