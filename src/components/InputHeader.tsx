import React from 'react';
import { HStack, Text, IconButton, Tooltip } from '@chakra-ui/react';
import { InfoOutlineIcon, RepeatIcon } from '@chakra-ui/icons';

interface Props {
  title: string;
  info: string;
  isChanged: boolean;
  onReset: () => void;
}

const InputHeader: React.FC<Props> = (props) => {
  const { title, info, isChanged, onReset } = props;

  return (
    <HStack justify="space-between" alignItems="center">
      <HStack>
        <Text my={1}>{title}</Text>
        {info && (
          <Tooltip label={info}>
            <InfoOutlineIcon />
          </Tooltip>
        )}
      </HStack>
      {isChanged && (
        <IconButton
          aria-label="reset value"
          icon={<RepeatIcon />}
          size="sm"
          colorScheme={'gray'}
          variant="ghost"
          onClick={onReset}
        />
      )}
    </HStack>
  );
};

export default InputHeader;
