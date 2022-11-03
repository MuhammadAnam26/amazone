import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATGpA3WvNOAuK_AyaYGil_ttus_-yjjCI",
  authDomain: "clone-f3573.firebaseapp.com",
  projectId: "clone-f3573",
  storageBucket: "clone-f3573.appspot.com",
  messagingSenderId: "65093648121",
  appId: "1:65093648121:web:476838039fef391a906c28",
  measurementId: "G-MPCRXGB3GY"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};