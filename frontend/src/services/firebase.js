import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtXxrffcuHvvk8x4gjzab8tza6poiTB-E",
  authDomain: "soolemn-cc5b9.firebaseapp.com",
  projectId: "soolemn-cc5b9",
  storageBucket: "soolemn-cc5b9.appspot.com",
  messagingSenderId: "850007019627",
  appId: "1:850007019627:web:5467f731a4fbb14ef2212e",
  measurementId: "G-4GCX6LE8FK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();

// const ui = new firebaseui.auth.AuthUI(firebase.auth());
