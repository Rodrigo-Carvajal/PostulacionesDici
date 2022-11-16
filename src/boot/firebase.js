import { initializeApp } from 'firebase/app';
import {} from 'firebase/auth';
import {} from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUMXa4Cgl5_nZI4PJEMoVmZDXxipwPGSU",
    authDomain: "ayudantias-dici-3f95a.firebaseapp.com",
    databaseURL: "https://ayudantias-dici-3f95a-default-rtdb.firebaseio.com",
    projectId: "ayudantias-dici-3f95a",
    storageBucket: "ayudantias-dici-3f95a.appspot.com",
    messagingSenderId: "13153027539",
    appId: "1:13153027539:web:d1c38ab1e8d42d2e045b26"};

const app = initializeApp(firebaseConfig);