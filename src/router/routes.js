
const routes = [
  {
    path: '/', //Layout Main
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '/', component: () => import('src/pages/Login.vue') },
      { path: '/signin', component: () => import('src/pages/Signin.vue') },
      { path: '/registrado', component: () => import('src/pages/registrado.vue') }
      //Vista login que nos llevará a otro layaout según el rol
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
      { path: '/profesor', component: () => import('src/pages/Profesor.vue') },
      { path: '/perfilprofesor', component: () => import('src/pages/PerfilProfesor.vue') }
    ]
  },
  {
    path: '/', //Layout Estudiante
    component: () => import('layouts/EstudianteLayout.vue'),
    children: [
      { path: '/estudiante', component: () => import('pages/estudiante2.vue')},
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
