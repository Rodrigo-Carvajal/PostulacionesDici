<template>
  <q-page padding>
      <h4>Postulaciones</h4>

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
            <q-slider
            markers=""
            marker-labels=""
            v-model="hora"
            :min="1"
            :max="8"
            color="cyan-9"
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
         </div>
    </q-form>
    <lista-ayudantias :ayudantias="ayudantias"/>

    <div class="q-pa-md">
      <q-table
        title="Gestión de usuarios"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
    </div>
  </q-page>
</template>

<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import ListaAyudantias from 'src/components/ListaAyudantias.vue'

const columns = [
  { name: 'nombre', align: 'center', label: 'Nombre', field: 'nombre', sortable: true },
  { name: 'correo', required: true, label: 'Correo', align: 'left', field: row => row.correo, format: val => `${val}`, sortable: true },
  { name: 'telefono', align: 'center', label: 'Telefono', field: 'telefono'},
  { name: 'rol', label: 'Rol', field: 'rol', sortable: true },
  { name: 'acciones', label: 'Acciones', field: 'acciones'},
]

const rows = [

]

export default {
  components: { ListaAyudantias },
  setup() {
      const $q = useQuasar()
      const myForm = ref(null)
      const profesor = ref(null)
      const seleccion = ref(null)
      const hora = ref(null)
      const requisito = ref(null)
      const opciones = ['Hola']
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
        eliminar,
        columns,
        rows
      }
  },
}
</script>
