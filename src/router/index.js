import Vue from 'vue'
import VueRouter from 'vue-router'
import Games from '../views/Games.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Games
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import('../views/Games.vue')
  },
  {
    path: '/software',
    name: 'Softwares',
    component: () => import('../views/Softwares.vue')
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import('../views/Research.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Resume.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  
  // Gamedev Project Details pages.
  {
    path: '/SSD',
    name: 'SSD',
    component: () => import('../views/ProjectViews/SSD.vue')
  },
  {
    path: '/racemaze',
    name: 'RaceMaze',
    component: () => import('../views/ProjectViews/RaceMaze.vue')
  },
  {
    path: '/creaturesoftheDeep',
    name: 'CreaturesoftheDeep',
    component: () => import('../views/ProjectViews/CreaturesoftheDeep.vue')
  },
  {
    path: '/fireescape',
    name: 'Fireescape',
    component: () => import('../views/ProjectViews/FireEscape.vue')
  },
  {
    path: '/dcgo',
    name: 'DCGO',
    component: () => import('../views/ProjectViews/DCGO.vue')
  },
  {
    path: '/elton',
    name: 'Elton',
    component: () => import('../views/ProjectViews/Elton.vue')
  },
  {
    path: '/max',
    name: 'Max',
    component: () => import('../views/ProjectViews/MaxTrauma.vue')
  },


  // SE Project Details pages.
  {
    path: '/terrain',
    name: 'Terrain',
    component: () => import('../views/ProjectViews/TerrainGenerator.vue')
  },
  {
    path: '/webscrapper',
    name: 'Webscrapper',
    component: () => import('../views/ProjectViews/WebScrapper.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
