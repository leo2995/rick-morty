import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Personagens',
    component: () => import( '../pages/Personagens.vue')
  },
  {
    path: '/episodios',
    name: 'Episodios', 
    component: () => import( '../pages/Episodios.vue')
  },
  {
    path: '/locais',
    name: 'Locais', 
    component: () => import( '../pages/Locais.vue')
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: ()=> import('../pages/Sobre.vue')
  },
  {
    path: '/personagem/detalhes/:id',
    name: 'Detalhes',
    component: ()=> import('../pages/Detalhes.vue')
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'PaginaNaoExiste',
    component: ()=> import('../pages/PaginaNaoExiste.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
