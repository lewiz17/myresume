import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import '@mdi/font/css/materialdesignicons.css'

window.$ = window.jQuery = require("jquery");

Vue.config.productionTip = false
Vue.prototype.$http = axios

// Vue.use(BootstrapVue)
Vue.use(vuetify);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
