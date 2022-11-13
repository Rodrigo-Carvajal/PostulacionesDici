
const routes = [
  {
    path: '/', //Layout Main
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/index', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/', //Layout Administrador
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '/admin', component: () => import('pages/Admin.vue')}
    ]
  },
  {
    path: '/', //Layout Profesor
    component: () => import('layouts/ProfesorLayout.vue'),
    children: [
      { path: '/profesor', component: () => import('src/pages/Profesor.vue') }
    ]
  },
  {
    path: '/', //Layout Estudiante
    component: () => import('layouts/EstudianteLayout.vue'),
    children: [
      { path: '/estudiante', component: () => import('pages/Estudiante.vue')}
    ]
  },
  {
    path: '/', //Layout Estudiante
    component: () => import('layouts/EstudianteLayout.vue'),
    children: [
      { path: '/perfilestudiante', component: () => import('pages/PerfilEstudiante.vue')}
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
