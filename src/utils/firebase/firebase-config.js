import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyV47o5duOpRjkMIgbD-Uz0WAXG0AyJPk",
  authDomain: "uniwear-6f426.firebaseapp.com",
  projectId: "uniwear-6f426",
  storageBucket: "uniwear-6f426.firebasestorage.app",
  messagingSenderId: "335901592661",
  appId: "1:335901592661:web:754a71b6d22e7a4eb298dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)