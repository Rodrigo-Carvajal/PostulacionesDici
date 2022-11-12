
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/index', component: () => import('pages/Index.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '/admin', component: () => import('pages/Admin.vue')}
    ]
  },
  {
    path: '/',
    component: () => import('layouts/EstudianteLayout.vue'),
    children: [
      { path: '/estudiante', component: () => import('pages/Estudiante.vue')}
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
