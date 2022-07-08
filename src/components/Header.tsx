import { HStack, Text, Link, Heading } from '@chakra-ui/react';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
  return (
    <HStack py={4} justify="space-between">
      <Heading fontFamily={'Roboto'} color="#1DB954">
        Spotify Banner Creator
      </Heading>
      <HStack spacing={3}>
        <Text color={'gray.500'}>
          <Link
            isExternal
            href={'https://github.com/rubensmn/spotify-banner-creator'}
          >
            Github
          </Link>
        </Text>
        <Text color={'gray.500'}>
          <Link
            isExternal
            href={'https://github.com/RubenSmn'}
            whiteSpace="pre"
          >
            👋 {'  '}I made this
          </Link>
        </Text>
        <ThemeSwitch />
      </HStack>
    </HStack>
  );
};

export default Header;
