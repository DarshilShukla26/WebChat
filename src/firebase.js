import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB-vXayGoNEdG-WsESb7htVVsbJ0YghYik",
  authDomain: "web-chat-b8c0b.firebaseapp.com",
  projectId: "web-chat-b8c0b",
  storageBucket: "web-chat-b8c0b.appspot.com",
  messagingSenderId: "459470495207",
  appId: "1:459470495207:web:df5f1bfa12848b68f3f142",
  measurementId: "G-S8P9MLBR3V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
