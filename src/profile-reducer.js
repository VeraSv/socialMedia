const addPost='addPost';
const updateNewPostText='updateNewPostText';

let initialState = {data:[{id:1, message:"Hi!", likesCount:"5"}, {id:2, message:"How are you?", likesCount:"0"}], newPostText:''};
 const profileReducer =(state=initialState, action) => {

    switch (action.type) {
      
        case addPost:
                      
        return {...state,newPostText:'',data:[...state.data, { id:3,message:state.newPostText,
            likesCount:0}]};

        case updateNewPostText:
           return {...state, newPostText:action.newText};
        
        default: 
   return state;
}
}

export default profileReducer

export const addPostActionCreator= ()=> {
    return {type:addPost};
    
}
export const updateNewPostTextActionCreator =(text)=>{
return { type:updateNewPostText, newText:text};
}