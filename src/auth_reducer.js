import { stopSubmit } from 'redux-form';
import {userApi,authApi} from './API'
const set_user_data='set_user_data';

let initialState = {
  userId:null,
  email:null,
  login:null,
  isAuth:false
}
 
const authReducer =(state=initialState, action) => {
    switch (action.type) {
        case set_user_data:
            return {...state, ...action.data}
        default: 
            return state;
    }
}

export default authReducer

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
            dispatch(stopSubmit('loginForm', {'_error':'Error'}))
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