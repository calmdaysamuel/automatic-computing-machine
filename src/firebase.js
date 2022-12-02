// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuynBusuojQXQiQBKA4tuQByjxTIl-45U",
  authDomain: "quizly-8a925.firebaseapp.com",
  projectId: "quizly-8a925",
  storageBucket: "quizly-8a925.appspot.com",
  messagingSenderId: "436002989629",
  appId: "1:436002989629:web:eb3213c6f095c2ca31ac54",
  measurementId: "G-XMPBGLZ2P0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
