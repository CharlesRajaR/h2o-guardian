// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgMBNrgbE49tJcgnDEKDdVP3Ks7V9KyBQ",
  authDomain: "water-monitoring-system-f0f2f.firebaseapp.com",
  databaseURL: "https://water-monitoring-system-f0f2f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "water-monitoring-system-f0f2f",
  storageBucket: "water-monitoring-system-f0f2f.firebasestorage.app",
  messagingSenderId: "135808359386",
  appId: "1:135808359386:web:7e9672b6c9e29c257e7ee3",
  measurementId: "G-8NK1V561JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database }