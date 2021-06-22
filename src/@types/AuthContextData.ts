import { User } from './User';

export interface AuthContextData {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}
