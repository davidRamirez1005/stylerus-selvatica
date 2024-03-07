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
  appId: "1:974591640158:web:8f626c7629f16967cdaacf",
  measurementId: "G-LLR4NXS232"
};

// Initialize Firebase
const appp = initializeApp(firebaseConfig);
const analytics = getAnalytics(appp);



export { appp, analytics };