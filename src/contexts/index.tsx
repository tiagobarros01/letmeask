import React from 'react';

import { AuthContextProvider } from './AuthContext';

interface Props {
  children: React.ReactNode;
}

export default function ContextProvider({ children }: Props): JSX.Element {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  );
}
