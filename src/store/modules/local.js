import serviceApi from '../../service/local'

export default {
    namespaced: true,
    state:{
        locais: []
    },
    mutations:{  
        SET_LOCAIS(state, payload){
            state.locais = payload
        }
    },
    actions:{
        getLocais(context){
            return serviceApi.getLocal().then(res =>{
                context.commit("SET_LOCAIS", res.data.results)
            })
        }
    },
    getters:{
        listLocais(state){
            return state.locais
        }
    }
}