<template>
  <q-page style="background-color: rgb(240,2100,240);" padding>
      <h4>Postulaciones</h4>
      <q-form @submit.prevent="procesarFormulario" @reset="reset"  ref="myForm">
        <q-card class="card-bg row q-col-gutter-md">
          <div class="col-12 col-sm-4">
              <q-input
                label="Profesor"
                v-model="profesor"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Falta Información']"
              />
          </div>

          <div class="col-12 col-sm-4">
              <q-select
                label="Asignatura"
                v-model="seleccion"
                transition-show="flip-up"
                transition-hide="flip-down"
                lazy-rules
                :options="opciones"
                :rules="[val => val && val.length > 0 || 'Falta Información']"
              />
          </div>

          <div class="col-12 col-sm-4">
              <q-select
                label="Grupo"
                v-model="grupos"
                transition-show="flip-up"
                transition-hide="flip-down"
                lazy-rules
                :options="grupo"
                :rules="[val => val && val.length > 0 || 'Falta Información']"
              />
          </div>

          <div class="col-12 col-sm-4">
              <q-select
                label="Sala de clases"
                v-model="salas"
                transition-show="flip-up"
                transition-hide="flip-down"
                lazy-rules
                :options="sala"
                :rules="[val => val && val.length > 0 || 'Falta Información']"
              />
          </div>

          <div class="col-12 col-sm-4">
              <q-input
                label="Requisitos"
                v-model="requisito"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Falta Información']"
              />
          </div>

          <div class="col-12 col-sm-4">
              <q-input
                v-model="hora"
                type="number"
                label="Horas de clases(En cantidad de clases a la semana)"
                color="cyan-9"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Falta Información']"
              />
          </div>
          <q-card-section>
              <q-btn
                label="Agregar"
                color="cyan-10"
                type="submit"
              />
          </q-card-section>

        </q-card>

    </q-form>

    <lista-ayudantias class="card-bg" :ayudantias="ayudantias"/>


  </q-page>
</template>

<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import ListaAyudantias from 'src/components/ListaAyudantias.vue'
import { db } from "boot/firebase"
import { collection } from 'firebase/firestore';
import { getDocs, addDoc } from 'firebase/firestore';

export default {
  components: { ListaAyudantias },


  setup() {
      const $q = useQuasar()
      const myForm = ref(null)
      const profesor = ref(null)
      const seleccion = ref(null)
      const grupos = ref(null)
      const hora = ref(null)
      const requisito = ref(null)
      const salas = ref(null)
      const opciones = [
        'Taller de programación I',
        'Taller de programación II',
        'Programación orientada a Objetos',
        'Fundamentos de Lenguajes de Programación',
        'Algoritmos y estructuras de datos',
        'Arquitectura de computadores',
        'Tecnología Web',
        'Sistemas Operativos',
        'Bases de datos'
      ]
      const sala = [
        'Licancabur',
        'Socompa',
        'Guallatire',
        'Azufre',
        'Parinacota',
        'Pomerape'
      ]
      const grupo = ['A','B','C','D']
      const eliminar = ref(null)

      const ayudantias = ref([])

      const procesarFormulario = () => {
        /*if(profesor.value === null){   NO ME FUNCA :c
              $q.notify('Falta Información')
          }*/
          myForm.value.resetValidation()

          //Procesar los datos del formulario
          /* ayudantias.value = [...ayudantias.value,{
              profesor: profesor.value,
              asignatura: seleccion.value,
              grupos: grupos.value,
              sala: salas.value,
              requisitos: requisito.value,
              hora: hora.value
          }] */
            addDoc(collection(db, "postulaciones"), {
              profesor: profesor.value,
              asignatura: seleccion.value,
              grupos: grupos.value,
              sala: salas.value,
              requisitos: requisito.value,
              hora: hora.value
        });
        /* listarpostulaciones(); */

        reset()
      }

      const reset = () => {
          profesor.value = ''
          seleccion.value = ''
          grupos.value = ''
          salas.value = ''
          requisito.value = ''
          hora.value = ''
      }

    /*  const eliminarPostulaciones = () => {
          if(seleccion.value === asignatura){
              reset(ayudantias.value)
          }
      } */

      return {
        profesor,
        seleccion,
        grupos,
        hora,
        requisito,
        salas,
        sala,
        opciones,
        grupo,
        procesarFormulario,
        reset,
        //eliminarPostulaciones,
        myForm,
        ayudantias,
        eliminar
      }
  },
  methods:{
    async listarpostulaciones(){
      try {
        const obtenerTodosDocumentos = await getDocs(collection(db, "postulaciones"));
        obtenerTodosDocumentos.forEach((doc) => {
          this.ayudantias.push(doc.data())
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  created(){
    this.listarpostulaciones();
  }
}
</script>

<style>
.card-bg {
  background-color: black;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23bfffe7'/%3E%3Cstop offset='1' stop-color='%23bfffe7' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2388e1e3'/%3E%3Cstop offset='1' stop-color='%2388e1e3' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2340ebcc'/%3E%3Cstop offset='1' stop-color='%2340ebcc' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FFFFFF'/%3E%3Cstop offset='1' stop-color='%23FFFFFF' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%237FFFCE'/%3E%3Cstop offset='1' stop-color='%237FFFCE' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2329ACAF'/%3E%3Cstop offset='1' stop-color='%2329ACAF' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>
