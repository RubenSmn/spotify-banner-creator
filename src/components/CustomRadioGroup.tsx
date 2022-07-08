import React from 'react';
import { ButtonGroup, Button } from '@chakra-ui/react';

interface Props {
  value: string;
  onChange: (value: string) => void;
  options: { [key: string]: string };
}

const CustomRadioGroup: React.FC<Props> = (props) => {
  const { value, onChange, options } = props;
  const activeColor = (label: string) => {
    if (label !== value) return 'gray';
  };

  const handleClick = (userInput: string) => {
    onChange(userInput);
  };

  return (
    <ButtonGroup isAttached>
      {Object.entries(options).map(([label, option]: any) => {
        return (
          <Button
            key={`prop-radio-${option}`}
            colorScheme={activeColor(label)}
            textTransform="capitalize"
            size="sm"
            onClick={() => handleClick(label)}
          >
            {label}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default CustomRadioGroup;
