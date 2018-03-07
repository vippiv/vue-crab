import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"
import actions from "./actions"
import moduleA from "./moduleA"
import moduleB from "./moduleB"
import moduleC from "./moduleC"
import getters from "./getters"

//状态持久化插件，刷新不会丢失数据，https://github.com/robinvdvleuten/vuex-persistedstate
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const modules = {
	a : moduleA,
  b : moduleB,
  c : moduleC
}




export default new Vuex.Store({
	modules,
	mutations,
	actions,
//	getters,
//	plugins: [createPersistedState()]
})
