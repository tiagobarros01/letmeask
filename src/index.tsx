import React from 'react';
import ReactDOM from 'react-dom';

import './services/firebase';
import App from './App';
import { Switch } from './components/Switch';
import ContextProvider from './contexts/index';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
      <Switch />
      <GlobalStyle />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
