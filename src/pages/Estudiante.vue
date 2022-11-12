<template>
    <q-page>
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
                    <q-btn dense square label="alert" color="primary"  icon="info"/>
                    <q-btn flat round color="primary" @click="edit(props.row)" icon="edit"></q-btn>
                </div>
            </div>
            <div class="col-4">
                <span class="text-weight-bolder">Postular</span> 
                <div>
                    <div class="q-pa-md q-gutter-sm">
                        <q-btn dense square color="green" icon="check" />
                    </div>
                </div>
            </div>
        </div>
    </q-page>

    
</template>

<script>

</script>