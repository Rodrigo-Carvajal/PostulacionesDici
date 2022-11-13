import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBUMXa4Cgl5_nZI4PJEMoVmZDXxipwPGSU",
  authDomain: "ayudantias-dici-3f95a.firebaseapp.com",
  databaseURL: "https://ayudantias-dici-3f95a-default-rtdb.firebaseio.com",
  projectId: "ayudantias-dici-3f95a",
  storageBucket: "ayudantias-dici-3f95a.appspot.com",
  messagingSenderId: "13153027539",
  appId: "1:13153027539:web:d1c38ab1e8d42d2e045b26"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export { db, firestore};