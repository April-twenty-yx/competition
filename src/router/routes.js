
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') }
    ]
  },
  {
    path: '/manage',
    component: () => import('layouts/ManageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mBanner.vue') }
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
