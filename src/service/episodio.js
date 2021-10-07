import api from './api'

export default {
    getEpisodios(){
        return api.get('/episode').then(res =>{
            return res
        }).catch(error =>{
            return error
        })
    }
}