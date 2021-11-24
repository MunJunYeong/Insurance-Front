import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios';

// const cors = require('cors');

Vue.config.productionTip = false
Vue.prototype.$http = axios;
// Vue.use(cors());

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
