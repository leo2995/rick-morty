import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import personagem from './modules/personagem'
import episodio from './modules/episodio'
import local from './modules/local'

export default new Vuex.Store({
  modules:{
    personagem,
    episodio,
    local
  }
})
