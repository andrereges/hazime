
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'quem-somos', component: () => import('pages/QuemSomos.vue') },
      { path: 'produtos', component: () => import('pages/Produtos.vue') },
      { path: 'fale-conosco', component: () => import('pages/FaleConosco.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
