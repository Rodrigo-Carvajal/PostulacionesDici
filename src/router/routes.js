
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/Profesor.vue'),
    children: [
      { path: '/index', component: () => import('pages/Index.vue') },
      { path: '/postulaciones', component: () => import('src/pages/Postulaciones.vue') },
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
