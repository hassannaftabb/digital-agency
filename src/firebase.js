// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyARTR2uKx9WA2_rUDgxhyBChh0feILrcR0',
  authDomain: 'digital-agency-d54cb.firebaseapp.com',
  projectId: 'digital-agency-d54cb',
  storageBucket: 'digital-agency-d54cb.appspot.com',
  messagingSenderId: '320462594723',
  appId: '1:320462594723:web:f19f81d30ec73ccc685516',
  measurementId: 'G-4VS7JWXEMY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
