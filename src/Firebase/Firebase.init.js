// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrhagPFbpEPa9dU6mrNTPsSbNwSHVD5gg",
  authDomain: "phone-site-bd.firebaseapp.com",
  projectId: "phone-site-bd",
  storageBucket: "phone-site-bd.appspot.com",
  messagingSenderId: "527645626869",
  appId: "1:527645626869:web:de6a1daf74b4d01ba9d0bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth=getAuth(app);
 export default auth;
