const follow='follow';
const unfollow='unfollow';
const set_users='set_users'

let initialState = {users:[
    {id:1, followed:true, fullName:"Dmitry", status:"Boss", location:{city:'Minsk', country:'Belarus'}},
    {id:2, followed:false,fullName:"Sasha", status:"Boss", location:{city:'Brest', country:'Belarus'}}, 
    {id:3, followed:true,fullName:"Sergej", status:"Boss", location:{city:'Vitebsk', country:'Belarus'}}]}
 
    const usersReducer =(state=initialState, action) => {

    switch (action.type) {
      
        case follow:
                      
        return {...state, users:state.users.map( u =>{
            if(u.id ===action.userId) {
                return {...u, followed:true}
            }})};

        case unfollow:
            return {...state, users:state.users.map( u =>{
                if(u.id ===action.userId) {
                    return {...u, followed:false}
                }})};
        case set_users:
             return {...state, users:{...state.users, ...action.users}}
        default: 
   return state;
}
}

export default usersReducer

export const followActionCreator= ()=> {
    return {type:follow, userId};
    
}
export const unfollowActionCreator =(userId)=>{
return { type:unfollow, userId};
}
export const setUsersAc =(users)=>{
({type:set_users, users}) 
}
