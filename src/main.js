// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import VueResource from 'vue-resource'
import 'stylesPath/style.light.css'
import util from 'jsPath/util.js'

Vue.prototype.$util = util;
Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(bootstrap)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
