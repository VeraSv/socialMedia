import {userApi} from './API'
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
            return {...state, ...action.data,isAuth:true}
        default: 
            return state;
    }
}

export default authReducer

export const setUserData =(userId,email,login)=>({type:set_user_data, data:{userId, email,login}})
export const getAuthUserData=()=>(dispatch)=>{
    userApi.getAuth().
       then(responce =>{
           if(responce.resultCode==0) {
            let {id,email,login}=responce.data   
            dispatch(setUserData(id,email,login))}
          });
}