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
  apiKey: process.env.next_public_firebase_api_key,
  authDomain: process.env.next_public_firebase_auth_domain,
  projectId: process.env.next_public_firebase_project_id,
  storageBucket: process.env.next_public_firebase_storage_bucket,
  messagingSenderId: process.env.next_public_firebase_messaging_sender_id,
  appId: process.env.next_public_firebase_app_id,
  measurementId: process.env.next_public_firebase_measurement_id,

};

// Initialize Firebase Analytics, but only in the browser
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      const analytics = getAnalytics(app);
    }
  });
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app);