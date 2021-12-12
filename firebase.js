import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBtMFkWPFT7jOyS_cpXZ8_OT-lpDCenAgE",
  authDomain: "whatsapp-7dfdc.firebaseapp.com",
  projectId: "whatsapp-7dfdc",
  storageBucket: "whatsapp-7dfdc.appspot.com",
  messagingSenderId: "986021599015",
  appId: "1:986021599015:web:345f009454c37f0ddebb02"
});

const db = getFirestore(firebaseConfig);
const auth = getAuth(firebaseConfig);
const provider = new GoogleAuthProvider();


export {db, auth, provider};