import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHkLTYA80rXRO1zG4waXYzRHOAn-_A13s",
  authDomain: "nwitter-402f0.firebaseapp.com",
  projectId: "nwitter-402f0",
  storageBucket: "nwitter-402f0.appspot.com",
  messagingSenderId: "545372079390",
  appId: "1:545372079390:web:5f6f25d7ff532cefe6f50f",
  measurementId: "G-8RXJ00K4YN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();