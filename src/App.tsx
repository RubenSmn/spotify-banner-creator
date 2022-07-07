import { Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import Editor from './Editor';
import Preview from './Preview';

const App = () => {
  return (
    <Container maxW="5xl" minWidth="3xl" p={4}>
      <Heading my={4}>Spotify Banner Creator</Heading>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem colSpan={3}>
          <Preview />
        </GridItem>
        <GridItem colSpan={2}>
          <Editor />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default App;
