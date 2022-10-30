
import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = initializeApp(
  {
    apiKey: "AIzaSyATGpA3WvNOAuK_AyaYGil_ttus_-yjjCI",
    authDomain: "clone-f3573.firebaseapp.com",
    projectId: "clone-f3573",
    storageBucket: "clone-f3573.appspot.com",
    messagingSenderId: "65093648121",
    appId: "1:65093648121:web:476838039fef391a906c28",
    measurementId: "G-MPCRXGB3GY"
  }
);


const db = getFirestore(firebaseConfig)
const FBAuth = getAuth(firebaseConfig)

export { db, FBAuth };

