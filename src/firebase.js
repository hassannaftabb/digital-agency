// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD9B_nw48jE9OxnpP5oaWoocrc-EwtbjgM',
  authDomain: 'digital-agency-6dff1.firebaseapp.com',
  projectId: 'digital-agency-6dff1',
  storageBucket: 'digital-agency-6dff1.appspot.com',
  messagingSenderId: '649295484926',
  appId: '1:649295484926:web:15eca4e8f94d1ce18ad2af',
  measurementId: 'G-9HN3SQH50G',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
