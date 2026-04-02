import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJSryh0nM43OlDeBbKdeI6BXZ17eW3LPM",
  authDomain: "stembwebsite.firebaseapp.com",
  projectId: "stembwebsite",
  storageBucket: "stembwebsite.firebasestorage.app",
  messagingSenderId: "264515320331",
  appId: "1:264515320331:web:d519b57150bde87c6e650e",
  measurementId: "G-E4X77KW50G"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
