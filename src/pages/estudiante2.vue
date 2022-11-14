<template>
    <q-page padding>
           <h4>Solicitudes</h4>
           <div class="row text-left">
            <div class="col-4 ">
               <span class="text-weight-bolder">Asignatura</span> 
                <div>
                    <div class="q-pa-md q-gutter-sm ">
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
import { ref } from 'vue'

export default {
  setup () {
    return {
      informacion: ref(false),
      postular: ref(false),
      address: ref('')
    }
  }
  
}


</script>