import React from 'react';
import { HStack, Text, IconButton } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';

interface Props {
  title: string;
  isChanged: boolean;
  onReset: () => void;
}

const InputHeader: React.FC<Props> = (props) => {
  const { title, isChanged, onReset } = props;

  return (
    <HStack justify="space-between" alignItems="center">
      <Text my={1}>{title}</Text>
      {isChanged && (
        <IconButton
          aria-label="reset value"
          icon={<RepeatIcon />}
          size="sm"
          variant="ghost"
          onClick={onReset}
        />
      )}
    </HStack>
  );
};

export default InputHeader;
