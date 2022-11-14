
  <template>
    <q-page padding>

    <lista-ayudantias :ayudantias="ayudantias"/>
  </q-page>
  </template>

<script>
import ListaAyudantias from 'src/components/ListaAyudantias.vue'

const columns = [
  
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

