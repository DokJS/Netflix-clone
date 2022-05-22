// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaDxEQtzDW_T5VYg4kfrNzChblHZc-0-U",
    authDomain: "netflix-clone-193fe.firebaseapp.com",
    projectId: "netflix-clone-193fe",
    storageBucket: "netflix-clone-193fe.appspot.com",
    messagingSenderId: "627493646418",
    appId: "1:627493646418:web:7a8d818aef34836298ef8b"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
