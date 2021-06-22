import React, { createContext, useMemo, useState } from 'react';

import { firebase, auth } from '../services/firebase';

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface AuthContextData {
  user: User;
  signInWithGoogle: () => void;
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

function AuthContextProvider({ children }: Props): JSX.Element {
  const [user, setUser] = useState<User>({} as User);

  function signInWithGoogle() {
    const AuthProvider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(AuthProvider).then((result) => {
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
    });
  }

  const memoizedValue = useMemo(() => {
    const values: AuthContextData = {
      user,
      signInWithGoogle,
    };
    return values;
  }, [user]);

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
