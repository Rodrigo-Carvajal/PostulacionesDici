<template>
    <q-page style="background-color: rgb(240,2100,240);" padding>
      <div class="q-col-gutter-sm">
      <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12">
        <q-card class="card-bg text-white flex-center">
          <q-card-section  class="text-h5">
            <span class="text-h5" style="color:black">Solicitudes</span>
          </q-card-section>
          <q-card-section class="text-h6">
            <div class="row text-left">
            <div  class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <span class="text-weight-bolder">Asignatura</span>
                <div>
                    <div class="q-pa-md q-gutter-md">
                        Listar asignaturas
                    </div>
                </div>
            </div>
            <div  class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <span class="text-weight-bolder">Información</span>
                <div class="q-pa-md q-gutter-md">
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
            <div  class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
          </q-card-section>
        </q-card>
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
      address: ref(''),
    }
  }

}

</script>
<style scoped>
.card-bg {
  background-color: black;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23bfffe7'/%3E%3Cstop offset='1' stop-color='%23bfffe7' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2388e1e3'/%3E%3Cstop offset='1' stop-color='%2388e1e3' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2340ebcc'/%3E%3Cstop offset='1' stop-color='%2340ebcc' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FFFFFF'/%3E%3Cstop offset='1' stop-color='%23FFFFFF' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%237FFFCE'/%3E%3Cstop offset='1' stop-color='%237FFFCE' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2329ACAF'/%3E%3Cstop offset='1' stop-color='%2329ACAF' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>
