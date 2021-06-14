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
    post(id){return instance.post(`follow/${id}`).then(responce=> {return responce.data})},
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status'+{status})
    }
}

export const authApi ={
    me() {
        return instance.get(`auth/me`)
    },
    login(email,password,rememberMe=false){
        return instance.post(`auth/login`,{email,password,rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}
 

