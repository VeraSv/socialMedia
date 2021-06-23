import { stopSubmit } from 'redux-form';
import {userApi,authApi} from './API'
import { getAuthUserData } from './auth_reducer';
const set_initialized='set_initialized';

let initialState = {
    initialized:false
}
 
const appReducer =(state=initialState, action) => {
    switch (action.type) {
        case set_initialized:
            return {...state, initialized:true}
        default: 
            return state;
    }
}

export default appReducer

export const setInitializedSuccess=()=>({
    type:set_initialized,})

export const initializeApp=()=>(dispatch)=>{
 let promise=   dispatch(getAuthUserData());
   Promise.all([promise])
   .then(()=>{dispatch(setInitializedSuccess())});

}
