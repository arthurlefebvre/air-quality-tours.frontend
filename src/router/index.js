import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Graphiques from '@/components/Graphiques'
import LoginForm from '@/components/administration/LoginForm'

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
    },
    {
      path: '/administration/login',
      name: 'Administration.login',
      component: LoginForm
    }
  ],
  mode: 'history',
  linkExactActiveClass: "active"
})
