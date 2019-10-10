// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import baseComponent from './plugins/baseComponent.js'
import './utils/rem'

Vue.config.productionTip = false

// 封装的自定义组件
Vue.use(baseComponent)

import 'normalize.css'

import axios from 'axios'
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
