import { User } from './User';

export type AuthContextData = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}
