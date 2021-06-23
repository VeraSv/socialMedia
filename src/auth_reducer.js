import { stopSubmit } from 'redux-form';
import {userApi,authApi} from './API'
const set_user_data='set_user_data';

let initialState = {
  userId:null,
  email:null,
  login:null,
  isAuth:false
}
 
export const authReducer =(state=initialState, action) => {
    switch (action.type) {
        case set_user_data:
            return {...state, ...action.data}
        default: 
            return state;
    }
}



export const setUserData =(userId,email,login,isAuth)=>({
    type:set_user_data, data:{userId, email,login,isAuth}})
export const getAuthUserData=()=>(dispatch)=>{
    userApi.getAuth().
       then(responce =>{
           if(responce.resultCode==0) {
            let {id,email,login}=responce.data   
            dispatch(setUserData(id,email,login,true))}
        });
}
export const login=(email,password,rememberMe)=>(dispatch)=>{      
           
    authApi.login(email,password,rememberMe)
    .then(responce=>{
        if(responce.resultCode==0) {
            dispatch(setUserData(null,null,null,false))
        } else {
            let message= responce.data.messages.length >0 ? responce.data.messages[0] :'Error'
            dispatch(stopSubmit('loginForm', {'_error':message}))
        }
    })
}
export const logout=()=>(dispatch)=>{
    authApi.logout()
    .then(responce=>{
        if(responce.resultCode==0) {
            dispatch(getAuthUserData)
        }
    })
}