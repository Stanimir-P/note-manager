import { UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const register = (email: string, password: string): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
export const login = (email: string, password: string): Promise<UserCredential>  => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = (): void => {
  auth.signOut();
};