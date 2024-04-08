import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWI8_yFpceIVAh19niOQX8hMrzhoYCwQ8",
  authDomain: "soolemn-17733.firebaseapp.com",
  projectId: "soolemn-17733",
  storageBucket: "soolemn-17733.appspot.com",
  messagingSenderId: "1080052234730",
  appId: "1:1080052234730:web:33055762915066da041a93",
  measurementId: "G-X0S23XZ86F",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
