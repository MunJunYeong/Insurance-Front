import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import authLayout from '../views/auth/layout/Index.vue'
import coreLayout from '../views/core/layout/Index.vue'

import SignIn from '../views/auth/SignIn.vue'
import SignUp from '../views/auth/SignUp.vue'
import FindId from '../views/auth/FindId.vue'
import FindPw from '../views/auth/FindPw.vue'

import Home from '../views/core/Home.vue'
import Employee from '../views/core/Employee.vue'
import Client from '../views/core/Client.vue'
import Uw from '../views/core/Uw.vue'
import Designer from '../views/core/Designer.vue'
import Manager from '../views/core/Manager.vue'
import Handler from '../views/core/Handler.vue'
import AccidentItem from '../components/handler/AccidentItem.vue'
const routes = [
  {
    path: '/',
    redirect: '/home', // 초기 진입 페이지 설정
  },
  {
    path: '/auth',
    component : authLayout,
    children: [
      {
        path:'signIn',
        component: SignIn,
      },
      {
        path: 'signUp',
        component: SignUp,
      },
      {
        path: 'findId',
        component: FindId,
      },
      {
        path: 'findPw',
        component: FindPw,
      }
    ]
  },
  {
    path: '/',
    component : coreLayout,
    children: [
      {
        path:'home',
        component: Home
      },
      {
        path : 'employee',
        component : Employee
      },
      {
        path : 'client',
        component : Client
      },
      {
        path : 'uw',
        component : Uw
      },
      {
        path : 'designer',
        component : Designer
      },
      {
        path : 'Manager',
        component : Manager
      },
      {
        path : 'handler',
        component : Handler
      },
      {
        path : 'handler/:accidentIdx',
        component : AccidentItem,
      },
    ]
  },
]
const router = new VueRouter({
  routes
})

export default router