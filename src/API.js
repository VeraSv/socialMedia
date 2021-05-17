import * as axios from 'axios';

const instance= axios.create({withCredentials:true, baseURL:`https://social-network.samuraijs.com/api/1.0/`, headers:{"API-KEY":""}}) 

export const userApi ={
    getUsers (currentPage,pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {withCredentials:true}).
        then(responce=> {return responce.data})
         
    },
    getProfile(userId) { return instance.get(`profile/`+userId).then(responce=> {return responce.data})},
    getAuth(){return instance.get(`auth/me`).then(responce=> {return responce.data})},
    delete(id){return instance.delete(`follow/${id}`).then(responce=> {return responce.data})},
    post(id){return instance.post(`follow/${id}`).then(responce=> {return responce.data})}
}
 

