<template>
    <q-page padding>
           <h4>Solicitudes</h4>
           <div class="row text-left">
            <div class="col-4 ">
               <span class="text-weight-bolder">Asignatura</span>
                <div>
                    <div class="q-pa-md q-gutter-sm">
                        Base de datos (A)
                    </div>
                </div>
            </div>
            <div class="col-4">
                <span class="text-weight-bolder">Información</span>
                <div class="q-pa-md q-gutter-sm">
                    <q-btn dense square color="primary" @click="informacion = true" icon="info"/>
                    <q-dialog v-model="informacion">
                        <q-card>
                          <q-card-section>
                            <div class="text-h6">Nombre</div>
                          </q-card-section>

                            <q-card-section class="q-pt-none">
                                Disponer información de la postulación
                            </q-card-section>

                          <q-card-actions align="right">
                            <q-btn flat label="OK" color="primary" v-close-popup />
                          </q-card-actions>
                        </q-card>
                      </q-dialog>
                </div>
            </div>
            <div class="col-4">
                <span class="text-weight-bolder">Postular</span>
                <div>
                    <div class="q-pa-md q-gutter-sm">
                        <q-btn dense square color="green" @click="postular = true" icon="check" />
                        <q-dialog v-model="postular" persistent>
                            <q-card>
                              <q-card-section class="row items-center">
                                <q-avatar icon="check" rounded color="primary" text-color="white" />
                                <span class="q-ml-sm">Usted ha postulado exitosamente</span>
                              </q-card-section>

                              <q-card-actions align="right">
                                <q-btn flat label="Confirmar" color="primary" v-close-popup />
                              </q-card-actions>
                            </q-card>
                          </q-dialog>
                    </div>
                </div>
            </div>
        </div>
    </q-page>


</template>

<script>
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBUMXa4Cgl5_nZI4PJEMoVmZDXxipwPGSU",
    authDomain: "ayudantias-dici-3f95a.firebaseapp.com",
    databaseURL: "https://ayudantias-dici-3f95a-default-rtdb.firebaseio.com",
    projectId: "ayudantias-dici-3f95a",
    storageBucket: "ayudantias-dici-3f95a.appspot.com",
    messagingSenderId: "13153027539",
    appId: "1:13153027539:web:d1c38ab1e8d42d2e045b26"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

import { ref } from 'vue'
import { db } from 'src/boot/firebase'
/* import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "asignatura"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});


const docRef = doc(db, "usuarios", "asignatura")
const docSnap = getDoc(docRef);

console.log(db.collection.usuarios) */


export default {


  /* methods:{
    async obtenerAsignatura(){
      try {
        const resDB = await db.collection('estudiante').get()

        resDB.forEach(res=>{
          console.log(res.asignatura)
          const estudiante = {
            asignatura: res.asignatura
          }
        })
      } catch (error) {
        console.log(erre)
      }
    }
  }, */


  setup () {
    return {
      informacion: ref(false),
      postular: ref(false),
      address: ref(''),
    }
  }

}


</script>
