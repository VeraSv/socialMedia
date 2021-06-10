import {userApi} from '../API'
const addPost='addPost';
const set_User_Profile='set_User_Profile';
const set_Status='set_Status'

let initialState = {data:[{id:1, message:"Hi!", likesCount:"5"}, {id:2, message:"How are you?", likesCount:"0"}], newPostText:'', profile:null, status:''};
const profileReducer =(state=initialState, action) => {
    switch (action.type) {
      case addPost:            
        return {...state,newPostText:'',data:[...state.data, { id:3,message:action.newPostBody, likesCount:0}]};
      case set_User_Profile:
        return {...state, profile:action.profile}
      case set_Status:
        return {...state, status:action.status}
      default: 
        return state;
    }
}

export default profileReducer

export const addPostAC= (newPostBody)=> {
    return {type:addPost,newPostBody};
    
}
/*export const updateNewPostTextAC=(text)=>{
return { type:updateNewPostText, newText:text};
}*/
export const setUserProfile =(profile)=>{
    return {type:set_User_Profile, profile}
}
export const getUserProfile =(userId)=>(dispatch)=>{
    userApi.getProfile(userId).
      then(responce =>{
        dispatch(setUserProfile(responce))
        });
}
export const setStatus =(status)=>{
  return {type:set_Status, status}
}
export const getStatus =(status)=>(dispatch)=>{
  userApi.getStatus(status).
  then(responce =>{
    dispatch(setStatus(responce.data))
    });
}
export const updateStatus =(status)=>(dispatch)=>{
  userApi.updateStatus(status).
  then(responce =>{
    if (responce.data.resultCode ===0)
    dispatch(setStatus(status))
    });
}
