const follow='follow';
const unfollow='unfollow';
const set_users='set_users';
const set_current_Page='set_current_Page';
const set_totalUsersCount='set_totalUsersCount'

let initialState = {users:[/*
    {id:1, img:'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', followed:true, fullName:"Dmitry", status:"Boss", location:{city:'Minsk', country:'Belarus'}},
    {id:2, img:'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', followed:false,fullName:"Sasha", status:"Boss", location:{city:'Brest', country:'Belarus'}}, 
{id:3, img:'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', followed:true,fullName:"Sergej", status:"Boss", location:{city:'Vitebsk', country:'Belarus'}}*/],
setUsers:(data)=>{this.users=data},
pageSize:5,
totalUsersCount:100,
currentPage:1,
setCurrentPage:(data)=>{this.currentPage=data}}
 
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
             return {...state, users:[...action.users]};
        case set_current_Page:
                 return {...state, currentPage:action.currentPage };
        case set_totalUsersCount:
            return {...state, totalUsersCount: action.count}
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
export const setCurrentPageAC=(currentPage)=>({type:set_current_Page, currentPage});
export const setUsersTotalCountAC=(totalUsersCount)=>({type:set_totalUsersCount, count: totalUsersCount})
