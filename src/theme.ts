import {
  extendTheme,
  withDefaultColorScheme,
  type ThemeConfig,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme(
  {
    config,
  },
  withDefaultColorScheme({
    colorScheme: 'green',
    components: ['Tabs', 'Slider', 'Radio', 'Tag', 'Button'],
  }),
);

export default theme;
