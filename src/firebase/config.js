// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-hIkYhchFjQnZnrGeccMzrs8w1pK-U4E",
  authDomain: "esteticmakeup-3dd8a.firebaseapp.com",
  projectId: "esteticmakeup-3dd8a",
  storageBucket: "esteticmakeup-3dd8a.appspot.com",
  messagingSenderId: "807015838199",
  appId: "1:807015838199:web:0b07ca2306202189577ef2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
