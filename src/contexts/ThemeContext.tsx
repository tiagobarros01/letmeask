import React, {
  useMemo, createContext, useState, useCallback,
} from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { ThemeContextData } from '../@types/ThemeContextData';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

type Props = {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({
  theme: dark,
  toggleTheme: () => {
    console.log("ThemeProvider isn't rendered 😞");
  },
});

function ThemeContextProvider({ children }: Props): JSX.Element {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title]);

  const memoizedValue = useMemo(() => {
    const value: ThemeContextData = {
      theme,
      toggleTheme,
    };
    return value;
  }, [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={memoizedValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };