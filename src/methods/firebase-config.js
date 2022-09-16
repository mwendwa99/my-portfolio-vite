// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqPVJo6INQACsJLgRCTIz19bpJpv51xr0",
  authDomain: "portfolio-347811.firebaseapp.com",
  projectId: "portfolio-347811",
  storageBucket: "portfolio-347811.appspot.com",
  messagingSenderId: "950635807724",
  appId: "1:950635807724:web:116a3726263ee1b01e76c9",
  measurementId: "G-2F8NZHB1BJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
