// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b0bb4.firebaseapp.com",
  projectId: "mern-estate-b0bb4",
  storageBucket: "mern-estate-b0bb4.appspot.com",
  messagingSenderId: "550447435905",
  appId: "1:550447435905:web:89d6c3960a145e328efd80"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);