// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf1-e0mVNMPKzpymLm1eEN7idUd5Clz9I",
  authDomain: "vehicles-checklist.firebaseapp.com",
  databaseURL: "https://vehicles-checklist-default-rtdb.firebaseio.com",
  projectId: "vehicles-checklist",
  storageBucket: "vehicles-checklist.appspot.com",
  messagingSenderId: "85938130212",
  appId: "1:85938130212:web:700293cc7a5a259cd077b1",
  measurementId: "G-WC1E2ZGG5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app)
export const auth = getAuth(app)