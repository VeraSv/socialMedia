import {userApi} from '../API'
const addPost='addPost';
const updateNewPostText='updateNewPostText';
const set_User_Profile='set_User_Profile'

let initialState = {data:[{id:1, message:"Hi!", likesCount:"5"}, {id:2, message:"How are you?", likesCount:"0"}], newPostText:'', profile:null};
const profileReducer =(state=initialState, action) => {
    switch (action.type) {
      case addPost:            
        return {...state,newPostText:'',data:[...state.data, { id:3,message:state.newPostText, likesCount:0}]};
      case updateNewPostText:
        return {...state, newPostText:action.newText};
      case set_User_Profile:
        return {...state, profile:action.profile}
      default: 
        return state;
    }
}

export default profileReducer

export const addPostAC= ()=> {
    return {type:addPost};
    
}
export const updateNewPostTextAC=(text)=>{
return { type:updateNewPostText, newText:text};
}
export const setUserProfile =(profile)=>{
    return {type:set_User_Profile, profile}
}
export const getUserProfile =(userId)=>(dispatch)=>{
    userApi.getProfile(userId).
      then(responce =>{
        dispatch(setUserProfile(responce))
        });
}