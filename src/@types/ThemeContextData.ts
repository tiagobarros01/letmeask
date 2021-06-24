import { DefaultTheme } from 'styled-components';

export type ThemeContextData = {
  theme: DefaultTheme
  toggleTheme: () => void;
}
