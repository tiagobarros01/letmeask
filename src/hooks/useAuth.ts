import { useContext } from 'react';

import { AuthContextData } from '../@types/AuthContextData';
import { AuthContext } from '../contexts/AuthContext';

export function useAuth(): AuthContextData {
  const ctx = useContext(AuthContext);

  return ctx;
}
