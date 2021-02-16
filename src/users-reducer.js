const follow='follow';
const unfollow='unfollow';
const set_users='set_users'

let initialState = {users:[
    {id:1, img:'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', followed:true, fullName:"Dmitry", status:"Boss", location:{city:'Minsk', country:'Belarus'}},
    {id:2, img:'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', followed:false,fullName:"Sasha", status:"Boss", location:{city:'Brest', country:'Belarus'}}, 
    {id:3, img:'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', followed:true,fullName:"Sergej", status:"Boss", location:{city:'Vitebsk', country:'Belarus'}}]}
 
    const usersReducer =(state=initialState, action) => {

    switch (action.type) {
      
        case follow:
                      
        return {...state, users:state.users.map( u =>{
            if(u.id ===action.userId) {
                return {...u, followed:true}
            } return u;})};

        case unfollow:
            return {...state, users:state.users.map( u =>{
                if(u.id ===action.userId) {
                    return {...u, followed:false}
                } return u;})};
        case set_users:
             return {...state, users:{...state.users, ...action.users}}
        default: 
   return state;
}
}

export default usersReducer

export const followActionCreator= (userId)=> {
    return {type:follow, userId};
    
}
export const unfollowActionCreator =(userId)=>{
return { type:unfollow, userId};
}
export const setUsersAc =(users)=>{
return {type:set_users, users}
}
