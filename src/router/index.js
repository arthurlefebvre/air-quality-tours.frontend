import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Graphiques from '@/components/Graphiques'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/graphiques',
      name: 'Graphiques',
      component: Graphiques
    }
  ],
  mode: 'history'
})
