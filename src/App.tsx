import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home/Index';
import DefaultTheme from './styles/themes/DefaultTheme';

const App = (): JSX.Element => (
  <ThemeProvider theme={DefaultTheme}>
    <Home />
  </ThemeProvider>
);

export default App;
