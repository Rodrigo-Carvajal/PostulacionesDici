<template>
  <q-table
      class="q-mt-md"
      title="Lista Postulaciones"
      no-data-label="No hay postulaciones"
      :columns="columns"
      :rows="ayudantias"
  />


</template>

<script>

const columns = [
    {
        name: 'profesor',
        label: 'Profesor',
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
        label: 'Grupo de curso',
        align: 'left',
        field: 'grupos',
        sortable: true
    },
    {
        name: 'sala',
        label: 'Sala de clases',
        align: 'left',
        field: 'sala',
        sortable: true
    },
    {
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
    },
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
