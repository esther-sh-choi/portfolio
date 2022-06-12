// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBCWkp1bqbX1wvx9_CGgJhnOQw81e_WZHU",
  authDomain: "esther-portfolio.firebaseapp.com",
  projectId: "esther-portfolio",
  storageBucket: "esther-portfolio.appspot.com",
  messagingSenderId: "252325701968",
  appId: "1:252325701968:web:2f31c7e2e65e2db5806455",
  measurementId: "G-LEP8VCWSJV",
});

const db = firebaseApp.firestore();

export { db };
