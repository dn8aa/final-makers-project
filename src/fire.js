import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

import firebase from "firebase/compat/app";

import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCp42GKekDsMAXemApviCCQg8JiNYVnmFw",
  authDomain: "finalproject-9c570.firebaseapp.com",
  projectId: "finalproject-9c570",
  storageBucket: "finalproject-9c570.appspot.com",
  messagingSenderId: "530850420030",
  appId: "1:530850420030:web:ffa8121fbc39935958886f",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();

export default fire;
