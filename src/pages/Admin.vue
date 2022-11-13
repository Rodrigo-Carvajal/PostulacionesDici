<!--- #ESTA ERA LA VISTA ANTERIOR QUE DEJE EN COMENTARIO PARA INTENTAR IMPLEMENTAR LA Q-TABLE
    <template>div class="row text-left">
    <div class="col-6 ">
        <span class="text-weight-bolder">Usuario</span> 
        <div>
            <div class="q-pa-md q-gutter-sm">
                Armando Meza
            </div>
        </div>
    </div>
    <div class="col-2">
        <span class="text-weight-bolder">Rol</span> 
        <div>
            Rol
        </div>
    </div>
    <div class="col-4">
        <span class="text-weight-bolder">Acciones</span> 
        <div>
            <div class="q-pa-md q-gutter-sm">
                <q-btn dense square color="green" icon="edit" />
                <q-btn dense square color="red" outline icon="delete"/>
            </div>
        </div>
    </div>
</div>  
</template>
--->
  <template>
    <div class="q-pa-md">
      <q-table
        title="Gestión de usuarios"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
    </div>
  </template>
  
  <script>
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
    setup () {
      return {
        columns,
        rows
      }
    }
  }
  </script>
  <script>

  </script>
  
