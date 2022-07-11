import { Container, Grid, GridItem } from '@chakra-ui/react';
import Header from './components/Header';
import Editor from './Editor';
import Preview from './Preview';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const App = () => {
  return (
    <Container maxW="5xl" minWidth="3xl" px={4} height="100vh">
      <Header />
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
