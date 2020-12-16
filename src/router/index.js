import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerOptions = [
  {
    path: '/',
    name: 'News',
    component: 'News',
   
  },
  {
    path: '/Qrkeep',
    name: 'Qrkeep',
    component: 'Qrkeep',
   
  },
  {
    path: '/Scan',
    name: 'Scan',
    component: 'Scan',
   
  }
]

const routes = routerOptions.map(route => {
  return {
    path: route.path,
    name: route.name,
    component: () => import(`../views/${route.component}.vue`),
    meta: route.meta
  }
})

const router = new Router({
  mode: 'history',
  routes: [
    ...routes,
    {
      path: '*',
      redirect: '/'
    }
  ]
})



export default router
