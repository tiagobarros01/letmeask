import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/SignIn/Index';

import './services/firebase';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
