import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { configProps } from './constants';
import PropInput from './PropInput';

const Editor = () => {
  const options = Object.entries(configProps);

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {options.map(([categoryName, values]) => {
        const { displayText, props } = values;
        return (
          <AccordionItem key={`aic-${categoryName}`}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {displayText}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {Object.entries(props).map(([propName, prop]) => (
                <PropInput
                  key={`pii-${propName}`}
                  path={`${categoryName}.${propName}`}
                  prop={prop}
                />
              ))}
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default Editor;
