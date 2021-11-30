import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth';
import client from './client';
import salesman from './salesman';
import uw from './uw';
import manager from './manager';
import designer from './designer';
import handler from './handler';

Vue.use(Vuex)
import createPersistedState from 'vuex-persistedstate';
export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    auth, client, salesman,uw,manager,designer,handler,
  },
  plugins: [
    createPersistedState()
  ]
})
