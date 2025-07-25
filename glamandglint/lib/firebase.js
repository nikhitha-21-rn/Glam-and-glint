// lib/firebase.js or firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Optional analytics (can be removed for server-side apps)
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCLwsknbfz17M_WgfUX-Fu_JHMMZuOFga0",
  authDomain: "glamandglint-b710d.firebaseapp.com",
  projectId: "glamandglint-b710d",
  storageBucket: "glamandglint-b710d.appspot.com", // 🔧 FIXED ".app" to ".app**spot**.com"
  messagingSenderId: "1060871918540",
  appId: "1:1060871918540:web:b6aa34d6b2b22a94bfc369",
  measurementId: "G-6MSFSPQGJG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
