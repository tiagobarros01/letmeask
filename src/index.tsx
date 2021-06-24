import React from 'react';
import ReactDOM from 'react-dom';

import './services/firebase';
import App from './App';
import ContextProvider from './contexts/index';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
      <GlobalStyle />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
