// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "bloggers-d40de.firebaseapp.com",
  projectId: "bloggers-d40de",
  storageBucket: "bloggers-d40de.appspot.com",
  messagingSenderId: "1013303951368",
  appId: "1:1013303951368:web:eb897f040afc02e49451bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);