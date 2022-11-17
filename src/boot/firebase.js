/* import * as firebase from "firebase/app";
import "firebase/firestore";
import { Firestore } from "firebase/firestore"; */
import { initializeApp} from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Agregar configuración firebase:
var firebaseConfig = {
  apiKey: "AIzaSyDuxGMPEqX87LSMIO8kx42PCBssE7nQq_U",
  authDomain: "postulaciones-a1b18.firebaseapp.com",
  projectId: "postulaciones-a1b18",
  storageBucket: "postulaciones-a1b18.appspot.com",
  messagingSenderId: "329231054287",
  appId: "1:329231054287:web:6568a7dd6b343d0c880eba",
  measurementId: "G-QS9JKYV4VV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };


