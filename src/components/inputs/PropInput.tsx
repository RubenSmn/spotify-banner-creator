import { PROPTYPES } from "@/interfaces";
import SliderInput from "./SliderInput";
import ColorInput from "./ColorInput";
import SelectInput from "./SelectInput";
import FontInput from "./FontInput";

const PropInput = ({ prop, path }: any) => {
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

  return <div className="mb-4 flex flex-col gap-2">{input}</div>;
};

export default PropInput;
