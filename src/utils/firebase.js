// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlsvwPdZoULEcjCIO17YYRXQv0Hr5EW5E",
  authDomain: "stylerus-24.firebaseapp.com",
  projectId: "stylerus-24",
  storageBucket: "stylerus-24.appspot.com",
  messagingSenderId: "974591640158",
  appId: "1:974591640158:web:a3767f2fd7734d76cdaacf",
  measurementId: "G-ZW6J0RE6F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export { appp, analytics };