const axios = require('axios');
const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000'

module.exports = {
    register(user){
        return axios.post(`${baseURL}/users/`,user).then(res => res.data)
    },
    login(credentials){
        return axios.post(`${baseURL}/users/authenticate`,credentials).then(res =>res.data)
    },
    getprofile(){
       return axios.get(`${baseURL}/users/profile`,{
           headers:{
               Authorization: localStorage.getItem('token')
           }
       }).then(res => res.data)
    }
}