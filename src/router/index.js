
import { createRouter, createWebHistory } from 'vue-router'
// import PlayerView from "../views/PlayerPage.vue"
import HomePage from "../views/HomePage.vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        
      },
    {
        path: '/player/:Link',
        name: 'PlayerView',
        component: () => import('@/views/PlayerPage.vue'),
        props: true
      },
      {
        path: '/seemore/:category',
        name: 'SeeMore',
        component: () => import('@/views/SeeMore.vue'),
        props: true
      },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
  
export default router