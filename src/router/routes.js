
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'quem-somos', component: () => import('pages/QuemSomos.vue') },
      { path: 'fale-conosco', component: () => import('pages/FaleConosco.vue') }
    ]
  },
  {
    path: '/produtos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'alimentacao', component: () => import('pages/ProdutosAlimentacao.vue') },
      { path: 'higiene', component: () => import('pages/ProdutosHigiene.vue') },
      { path: 'acessorios', component: () => import('pages/ProdutosAcessorios.vue') }
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
