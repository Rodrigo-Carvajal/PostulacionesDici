<template>
  <q-table
      class="q-mt-md"
      title="Lista Recursos"
      no-data-label="No hay postulaciones"
      :columns="columns"
      :rows="ayudantias"
  >

    <template v-slot:body-cell-sala="props">
          <q-td :props="props">
            <q-btn icon="download"></q-btn>
            <q-btn icon="delete"></q-btn>
          </q-td>
    </template>
</q-table>


</template>

<script>

const columns = [
    {
        name: 'profesor',
        label: 'Descripcion',
        align: 'left',
        field: 'profesor',
        sortable: true
    },
    {
        name: 'asignatura',
        label: 'Asignatura',
        align: 'left',
        field: 'asignatura',
        sortable: true
    },
    {
        name: 'grupos',
        label: 'Ayudante',
        align: 'left',
        field: 'grupos',
        sortable: true
    },
    {
        name: 'sala',
        label: 'Gestionar archivo',
        align: 'left',
        field: 'sala',
        sortable: true
    },
    /* {
        name: 'requisitos',
        label: 'Requisitos',
        align: 'left',
        field: 'requisitos',
        sortable: true
    },
    {
        name: 'hora',
        label: 'Hora de clases',
        align: 'left',
        field: 'hora',
        sortable: true
    }, */
]

const rows = [
    {
        profesor: 'p',
        asignatura: 's',
        grupos: 'g',
        sala: 's',
        requisitos: 'r',
        hora: 'h'
    }
]


export default {
    props: {
      ayudantias: Array
    },
    setup() {
        return{
            columns,
            rows
        }
    }
}

</script>
