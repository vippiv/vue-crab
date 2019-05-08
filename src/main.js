// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from "vuex"
import App from './App'
import router from './router'
import store from "./store"
import lodash from "lodash"

Vue.use(vuex)
Vue.use(lodash)

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css"
import "./style/style.css"

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
	store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
