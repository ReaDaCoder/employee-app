
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

 const firebaseConfig = {
  apiKey: "AIzaSyASf_dbowtPLonBkM1YbkbsyP8kG5-qNOU",
  authDomain: "employee-app-cecef.firebaseapp.com",
  projectId: "employee-app-cecef",
  storageBucket: "employee-app-cecef.firebasestorage.app",
  messagingSenderId: "1093287668244",
  appId: "1:1093287668244:web:aacb67fd0ddb7b8e261501",
  measurementId: "G-NSZ6NTRKY7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

