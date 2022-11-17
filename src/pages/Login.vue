<!---
<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Log in
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="username"
                label="Username"
                lazy-rules
              />

              <q-input
                type="password"
                filled
                v-model="password"
                label="Password"
                lazy-rules

              />

              <div>
                <q-btn label="Login" to="/" type="button" color="primary"/>
                <q-btn label="Admin" to="/admin" type="button" color="primary"/>
                <q-btn label="Profe" to="/profesor" type="button" color="primary"/>
                <q-btn label="Estudiante" to="/estudiante2" type="button" color="primary"/>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent} from 'vue'
import {ref} from 'vue'
export default defineComponent({
  setup() {
    return {
      username: ref('Pratik'),
      password: ref('12345')
    }
  },
})
</script>

<style>
.bg-image {
  background-image: linear-gradient(135deg, hwb(46 0% 0%) 25%, #0d11d3 75%);
}
</style>
-->
<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#8274C5, #5A4A9F);"
  >
    <q-header>
      <q-btn label="Profe" to="/profesor" type="button" color="primary"/>
      <q-btn label="Estudiante" to="/estudiante" type="button" color="primary"/>
    </q-header>
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Iniciar sesión</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
              <q-input 
              square 
              v-model="email1" 
              type="email" 
              label="Email"
              lazy-rules
              :rules="[
                val => val && val.length > 0 || 'Este campo es obligatorio',
                
              ]"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square v-model="password1" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pa-md q-gutter-md">
              
              <q-btn-toggle
                v-model="rol1"
                toggle-color="primary"
                :options="[
                  {label: 'Profe', value: 'Profesor'},
                  {label: 'Estudiante', value: 'Estudiante'}
                  ]"
              >
              </q-btn-toggle>
            </div>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="purple-4" class="full-width text-white" label="Iniciar sesión" @click="login"/>
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Registrar cuenta</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <q-input square clearable v-model="email2" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable v-model="password2" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
                <br/>
                <div class="text-center q-pa-md q-gutter-md">
                  <q-btn-toggle
                    v-model="rol2"
                    toggle-color="primary"
                    :options="[
                      {label: 'Profe', value: 'Profesor'},
                      {label: 'Estudiante', value: 'Estudiante'}
                      ]"
                  >
                  </q-btn-toggle>
                </div>
                  
                
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" outline color="purple-4" class="full-width text-white" @click="registrar" label="Registrar" />
            
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Login',
  components:{
  
  },
  data: function() {
    return {
      email1: '',
      email2: '',
      password1: '',
      password2: '',
      rol1: ref(null),
      rol2: ref(null)
    }
  },
  methods:{
    login(email1,password1,rol1){
      console.log(this.email1,this,password1,this.rol1);
      console.log("🚀 ~ file: Login.vue ~ line 186 ~ login ~ this.email1,this,password1,this.rol1", this.email1,this,password1,this.rol1)
      
    },
    registrar(email2,password2){
      console.log(this.email2,this.password2)
      console.log("🚀 ~ file: Login.vue ~ line 201 ~ registrar ~ this.email2,this.password2", this.email2,this.password2)
    }
  }
}
</script>
