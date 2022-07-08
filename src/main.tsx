import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import BannerProvider from './Provider';
import theme from './theme';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <BannerProvider>
      <ChakraProvider theme={theme} resetCSS>
        <App />
      </ChakraProvider>
    </BannerProvider>
  </React.StrictMode>,
);
