import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import BannerProvider from './Provider';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <BannerProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BannerProvider>
  </React.StrictMode>,
);
