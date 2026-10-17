import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBmIBpf9M8QcCdABLYjNPUKyMuNIHL9aA4",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "blog-app-ebdd0.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "blog-app-ebdd0",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "blog-app-ebdd0.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "671367288215",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:671367288215:web:78a6d3c3421ff8572c60d2",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-N6Z5N2XQRG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);