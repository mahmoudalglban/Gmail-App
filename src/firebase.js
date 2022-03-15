
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCOfXzl4c4NXucI9agwRJk0SToGTzfDfZg",
  authDomain: "amsm-ed150.firebaseapp.com",
  projectId: "amsm-ed150",
  storageBucket: "amsm-ed150.appspot.com",
  messagingSenderId: "512952875864",
  appId: "1:512952875864:web:02fb95bcaba02f0492832d",
  measurementId: "G-8Q1PH81BBN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics();
const db = getFirestore(app)
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {db ,auth ,provider};