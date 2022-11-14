<template>
  <q-page padding>

  <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-4">
        <q-card class="my-card" flat bordered>
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-item-section>
    
            <q-item-section>
              <q-item-label>Nombre</q-item-label>
              <q-item-label caption>
                correo
              </q-item-label>
            </q-item-section>
          </q-item>
    
          <q-separator />
    
          <q-card-section horizontal>
            <q-card-section>
              Información del perfil
            </q-card-section>     
            <q-separator vertical></q-separator> 
            <q-card-section>
              <q-btn outline label="Editar perfil" font-weight-bold color="secondary" @click="editar" icon="edit"></q-btn>
            </q-card-section>    
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>

 </q-page>
</template>

<script>
function editar(){
  console.log("Función para editar perfil")
}
</script>