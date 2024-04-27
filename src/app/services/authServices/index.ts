import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { redirect } from "react-router-dom";

export const register = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => redirect("/"))
        .catch(err => console.log(err));
  };
  
  export const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((result) => console.log(result))
        .catch(err => console.log(err));
  };
  
  export const logout = () => {
    auth.signOut();
  
    return redirect("/login");
  };