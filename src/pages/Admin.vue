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
    <q-page padding>
      <div>
        <q-table
          title="Treats"
          :rows="rows"
          :columns="columns"
          row-key="name"
       />
      </div>
    <lista-ayudantias :ayudantias="ayudantias"/>
  </q-page>
  </template>

<script>
import ListaAyudantias from 'src/components/ListaAyudantias.vue'

const columns = [
    { name: 'name', required: true, label: 'Dessert (100g serving)', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
    { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
    { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
    { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
    { name: 'protein', label: 'Protein (g)', field: 'protein' },
    { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
    { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
    { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const rows = [

]

export default {
  components: { ListaAyudantias },
  setup () {
     return {
      columns,
      rows
     }
   }
}
</script>

