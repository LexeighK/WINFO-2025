import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXVhHPgygKERUe8QUWbbjw6_dq7LmXjJY",
  authDomain: "winfoprojectdb.firebaseapp.com",
  databaseURL: "https://winfoprojectdb-default-rtdb.firebaseio.com",
  projectId: "winfoprojectdb",
  storageBucket: "winfoprojectdb.firebasestorage.app",
  messagingSenderId: "821143130847",
  appId: "1:821143130847:web:24e9c435a273efc8580f6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('Firebase initialized successfully');

// Export the database reference
export const db = getDatabase(app);
export const auth = getAuth(app);

