// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5K6yr5eQHqHvcOzS8pUeaE4EHAFySzc4",
  authDomain: "expense-tracker-7eb89.firebaseapp.com",
  projectId: "expense-tracker-7eb89",
  storageBucket: "expense-tracker-7eb89.appspot.com",
  messagingSenderId: "597443856192",
  appId: "1:597443856192:web:c6b44ca0a630923d321ca5",
  measurementId: "G-G423BWX8D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app);