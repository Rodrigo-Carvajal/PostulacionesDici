import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB6CMHo7qJz5ZMXwOfQlnCUr8uJVcwEx0w",
  authDomain: "ayudantiadici.firebaseapp.com",
  projectId: "ayudantiadici",
  storageBucket: "ayudantiadici.appspot.com",
  messagingSenderId: "13757407344",
  appId: "1:13757407344:web:eccdfcb073c7f3dff194b5"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export { db, firebase };