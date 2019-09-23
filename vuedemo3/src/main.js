import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
import './registerServiceWorker'
import LazyLoad from "vue-lazyload"
// Vue.use(LazyLoad)
// loading占位
Vue.use(LazyLoad,{
  loading:require('assets/img/common/placeholder.png')
})

import toast from "components/common/toast"
Vue.use(toast);

// 解决移动端300ms延迟
// import FastClick from "fastclick"
// FastClick.attch(document.body)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://123.207.32.32:8000/api/v1';

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
