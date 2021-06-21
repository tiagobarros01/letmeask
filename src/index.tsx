import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './pages/Homepage';

import './services/firebase';

ReactDOM.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
  document.getElementById('root')
);
