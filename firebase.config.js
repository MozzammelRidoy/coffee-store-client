import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBhFfku-OIsinhH-PlL5fDSqFOxwDtfOk",
  authDomain: "coffee-store-2-df872.firebaseapp.com",
  projectId: "coffee-store-2-df872",
  storageBucket: "coffee-store-2-df872.appspot.com",
  messagingSenderId: "399552380084",
  appId: "1:399552380084:web:da75241b0a4f358478ebe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export default auth ; 
