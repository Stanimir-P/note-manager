// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK-2CQXBrm_y_e9V4HHBbvSCCAbYMD8S4",
  authDomain: "note-manager-1a90b.firebaseapp.com",
  projectId: "note-manager-1a90b",
  storageBucket: "note-manager-1a90b.appspot.com",
  messagingSenderId: "935535221702",
  appId: "1:935535221702:web:844ef29925bc9fa403f0c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();