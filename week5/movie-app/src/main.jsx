

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
