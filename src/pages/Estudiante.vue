<template>
    <q-page padding>
           <h4>Solicitudes</h4>

        <div class="row q-col-gutter-md">

            <div class="col-12 col-sm-4 q-pa-md q-gutter-sm">
              <span class="text-weight-bolder ">Asignatura</span>
                <div>
                    <div>
                        Base de datos (A)
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-4 q-pa-md q-gutter-sm">
              <span class="text-weight-bolder">Información</span>
              <div>
                <q-btn-dropdown color="secondary" label="Información" dropdown-icon="change_history">
                  <q-list>
                    <q-item clickable v-close-popup @click="onItemClick">
                      <q-item-section>
                        <q-item-label>Profesor</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup @click="onItemClick">
                      <q-item-section>
                        <q-item-label>Hora de clases</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup @click="onItemClick">
                      <q-item-section>
                        <q-item-label>Requisitos</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
            </div>

            <div class="col-12 col-sm-4 q-pa-md q-gutter-sm">
                <span class="text-weight-bolder">Postular</span>
                  <div>
                    <q-chip v-model:selected="desert.BaseDeDatos" color="teal" text-color="white" icon="style">
                         Aceptar
                    </q-chip>
                  </div>
            </div>

            <div class="q-mt-sm">
              Seleccionaste: {{ selection }}
            </div>
        </div>
    </q-page>

</template>

<script>

import { reactive, computed } from 'vue'

export default {
  setup () {
    const desert = reactive({
      BaseDeDatos: false,
    })

    return {
      desert,
      selection: computed(() => {
        return Object.keys(desert)
          .filter(type => desert[ type ] === true)
          .join(', ')
      })
    }
  }
}

</script>
