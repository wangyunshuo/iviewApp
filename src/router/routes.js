let index = () => import(/* webpackChunkName: "index" */ '@/views/install/index.vue')
// let createDataCenter = () => import(/* webpackChunkName: "createDataCenter" */ '@/views/install/step/createDataCenter.vue')
let Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')

let routeData = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]
export default routeData
