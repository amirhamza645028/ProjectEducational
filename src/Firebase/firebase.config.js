import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4dncfSjcKoXN3o8q6r92rPHNZ1JecAaU",
  authDomain: "educational-project-6c227.firebaseapp.com",
  projectId: "educational-project-6c227",
  storageBucket: "educational-project-6c227.firebasestorage.app",
  messagingSenderId: "630207394872",
  appId: "1:630207394872:web:584d027962d9badb19e2cd",
  measurementId: "G-L6MWWSR5V0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
