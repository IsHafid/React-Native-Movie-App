// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQbR9Nt0i3-_GmBR6S04zC7m5PMsD3nnQ",
  authDomain: "movie-9d523.firebaseapp.com",
  projectId: "movie-9d523",
  storageBucket: "movie-9d523.appspot.com",
  messagingSenderId: "506687515933",
  appId: "1:506687515933:web:c01daa9bceca91f95545f4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);