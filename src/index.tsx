import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import './services/firebase';
import App from './App';
import ContextProvider from './contexts/index';
import GlobalStyle from './styles/global';
import DefaultTheme from './styles/themes/DefaultTheme';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeProvider theme={DefaultTheme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
