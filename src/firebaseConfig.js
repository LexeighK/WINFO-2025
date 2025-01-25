import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-app.firebaseapp.com',
  databaseURL: 'https://winfoprojectdb-default-rtdb.firebaseio.com/',
  projectId: 'your-project-id',
  storageBucket: 'your-app.appspot.com',
  messagingSenderId: 'your-sender-id',
  appId: 'your-app-id',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('Firebase initialized successfully');

// Export the database reference
export const db = getDatabase(app);
export const auth = getAuth(app);
