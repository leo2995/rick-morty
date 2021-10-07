import api from './api'

export default{

    getPersonagens(){
        return api.get('/character').then(res => {
            return res
        }).catch(error =>{
            return error
        })
    }

}