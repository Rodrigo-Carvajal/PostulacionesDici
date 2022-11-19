<template>
  <q-page style="background-color: rgb(240,2100,240);" padding>
      <h4>Postulaciones</h4>

      <q-form class="row q-col-gutter-md" @submit.prevent="procesarFormulario" @reset="reset"  ref="myForm">

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
                lazy-rules
                :options="opciones"
                :rules="[val => val && val.length > 0 || 'Falta Información']"
              />
          </div>

          <div class="col-12 col-sm-4">
              <q-select
                label="Grupo"
                v-model="grupos"
                lazy-rules
                :options="grupo"
                :rules="[val => val && val.length > 0 || 'Falta Información']"
              />
          </div>

          <div class="col-12 col-sm-4">
              <q-input
                label="Sala de clases"
                v-model="sala"
                lazy-rules
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
              <q-slider
                markers=""
                marker-labels=""
                v-model="hora"
                :min="1"
                :max="8"
                color="cyan-9"
              />
          </div>

          <div class="col-12">
              <q-btn
                label="Agregar"
                color="secondary"
                type="submit"
              />
         </div>
    </q-form>

    <lista-ayudantias :ayudantias="ayudantias"/>


  </q-page>
</template>

<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import ListaAyudantias from 'src/components/ListaAyudantias.vue'


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
      const sala = ref(null)
      const opciones = ['Hola']
      const grupo = ['A','B','C']
      const eliminar = ref(null)

      const ayudantias = ref([])

      const procesarFormulario = () => {
        /*if(profesor.value === null){   NO ME FUNCA :c
              $q.notify('Falta Información')
          }*/
          myForm.value.resetValidation()

          //Procesar los datos del formulario
          ayudantias.value = [...ayudantias.value,{
              profesor: profesor.value,
              asignatura: seleccion.value,
              grupos: grupos.value,
              sala: sala.value,
              requisitos: requisito.value,
              hora: hora.value
          }]

          reset()
      }

      const reset = () => {
          profesor.value = null
          seleccion.value = null
          grupos.value = null
          sala.value = null
          requisito.value = null
          hora.value = null
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
}
</script>

<style>

</style>
