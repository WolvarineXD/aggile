// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCPB-5eISvaq-vXD8Z0q0fD-ArfZP5jngY',
  authDomain: 'counter-bdee5.firebaseapp.com',
  projectId: 'counter-bdee5',
  storageBucket: 'counter-bdee5.firebasestorage.app',
  messagingSenderId: '430657298975',
  appId: '1:430657298975:web:31e06d131bd2c9e5056b2a',
  measurementId: 'G-ZYE81CCWKH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional, can remove if not needed)
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore instance
export { db };