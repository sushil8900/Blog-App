import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSZoLiF8z3b2XTYes7S0J1S7KxfVGjh_M",
  authDomain: "blogproject-8ad62.firebaseapp.com",
  projectId: "blogproject-8ad62",
  storageBucket: "blogproject-8ad62.appspot.com",
  messagingSenderId: "823095877647",
  appId: "1:823095877647:web:aed7a5afd9412d8fcd437a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
