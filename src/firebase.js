
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrbT3iTN-bkxl5OMf6o0EDuTu1YNc_P30",
  authDomain: "portforlio-react-pawan.firebaseapp.com",
  projectId: "portforlio-react-pawan",
  storageBucket: "portforlio-react-pawan.appspot.com",
  messagingSenderId: "170565740649",
  appId: "1:170565740649:web:bd6a96049fcf0191839af8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();