// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCYvPnVgqTO1RrUuWEjdKQbFZDjjTBOYhc",

  authDomain: "oddam-w-dobre-rece-db158.firebaseapp.com",

  projectId: "oddam-w-dobre-rece-db158",

  storageBucket: "oddam-w-dobre-rece-db158.appspot.com",

  messagingSenderId: "1009813309349",

  appId: "1:1009813309349:web:2cbdc4de792b12b0638a4c",

  measurementId: "G-EW8CVDW17E"

};


// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();

export default db;