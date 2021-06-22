import React, {
  createContext, useMemo, useState, useEffect,
} from 'react';

import { AuthContextData } from '../@types/AuthContextData';
import { User } from '../@types/User';
import { firebase, auth } from '../services/firebase';

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

function AuthContextProvider({ children }: Props): JSX.Element {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((oldUser) => {
      if (oldUser) {
        const { displayName, photoURL, uid } = oldUser;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  async function signInWithGoogle() {
    const AuthProvider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(AuthProvider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  const memoizedValue = useMemo(() => ({ user, signInWithGoogle }
  ), [user]);

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
