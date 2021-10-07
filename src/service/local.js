import api from './api'

export default{
    getLocal(){
        return api.get('/location').then(res =>{
            return res
        }).catch(error =>{
            return error
        })
    }
}