import React from 'react';

import { AuthContextProvider } from './AuthContext';
import { ThemeContextProvider } from './ThemeContext';

type Props = {
  children: React.ReactNode;
}

export default function ContextProvider({ children }: Props): JSX.Element {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        {children}
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}
