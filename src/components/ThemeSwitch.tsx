import {
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === 'light';

  return (
    <IconButton
      aria-label='theme switch'
      icon={isLight ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      colorScheme={isLight ? 'purple' : 'yellow'}
    />
  );
};

export default ThemeSwitch;
