<template>
  <q-page padding>
      <h4>Postulaciones</h4>

      <pre>{{profesor}} - {{seleccion}} - {{hora}} - {{requisito}}</pre>

      <q-form class="row q-col-gutter-md" @submit.prevent="procesarFormulario" @reset="reset"  ref="myForm">

          <div class="col-12 col-sm-3">
              <q-input
                label="Profesor"
                v-model="profesor"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Falta Información']"
              />
          </div>

          <div class="col-12 col-sm-3">
              <q-select
                label="Asignatura"
                v-model="seleccion"
                lazy-rules
                :options="opciones"
                :rules="[val => val && val.length > 0 || 'Falta Información']"
              />
          </div>

          <div class="col-12 col-sm-3">
              <q-input
                label="Hora de clases"
                v-model="hora"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Falta Información']"
              />
          </div>

          <div class="col-12 col-sm-3">
              <q-input
                label="Requisitos"
                v-model="requisito"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Falta Información']"
              />
          </div>

          <div class="col-12">

              <q-btn
                label="Agregar"
                color="secondary"
                type="submit"
              />
              <q-btn
                label="Reset"
                color="secondary"
                outline
                class="q-ml-sm"
                type="reset"
              />
              <q-btn
                label="Eliminar Postulación"
                color="secondary"
                outline
                class="q-ml-sm"
                type="reset"
              />
         </div>

         <div class="col-12 col-sm-6">
              <q-select
                    label="Asignatura a Eliminar"
                    v-model="eliminar"
                    lazy-rules
                    :options="opciones"
              />
          </div>

    </q-form>
    <lista-postulaciones :ayudantias="ayudantias"/>
  </q-page>
</template>

<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import ListaPostulaciones from 'src/components/ListaPostulaciones.vue'
export default {
  components: { ListaPostulaciones },
  setup() {
      const $q = useQuasar()
      const myForm = ref(null)
      const profesor = ref(null)
      const seleccion = ref(null)
      const hora = ref(null)
      const requisito = ref(null)
      const opciones = ['Programacion [A]', 'Programacion [B]', 'Programacion [C]']
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
              hora: hora.value,
              requisitos: requisito.value

          }]

          reset()
      }

      const reset = () => {
          profesor.value = null
          seleccion.value = null
          hora.value = null
          requisito.value = null
      }

    /*  const eliminarPostulaciones = () => {
          if(seleccion.value === asignatura){
              reset(ayudantias.value)
          }
      } */

      return {
        profesor,
        seleccion,
        hora,
        requisito,
        opciones,
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
