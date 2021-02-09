const addPost='addPost';
const updateNewPostText='updateNewPostText';

let initialState = {data:[{id:1, message:"Hi!", likesCount:"5"}, {id:2, message:"How are you?", likesCount:"0"}], newPostText:''};
 const profileReducer =(state=initialState, action) => {
    let stateCopy= {...state};
    stateCopy.data=[...state.data];
    switch (action.type) {
      
        case addPost:
            let newPost={
                id:3,
                message:state.newPostText,
                likesCount:0
            }
            
        stateCopy.data.push(newPost);
           stateCopy.newPostText='';
           
            break;
        case updateNewPostText:
           
          stateCopy.newPostText=action.newText;
           
            break;
        
        default: 
   return stateCopy;
}
return stateCopy;
}

export default profileReducer

export const addPostActionCreator= ()=> {
    return {type:addPost};
    
}
export const updateNewPostTextActionCreator =(text)=>{
return { type:updateNewPostText, newText:text};
}