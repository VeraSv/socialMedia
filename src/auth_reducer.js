const follow='follow';
const unfollow='unfollow';
const set_users='set_users';
const set_user_data='set_user_data';
const set_totalUsersCount='set_totalUsersCount'
const toggle_is_fetching = 'toggle_is_fetching'

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

/*export const followed= (userId)=> {
    return {type:follow, userId};
    
}
export const unfollowed =(userId)=>{
return { type:unfollow, userId};
}
export const setUsersAc =(users)=>{
return {type:set_users, users}
}
export const setCurrentPage=(currentPage)=>({type:set_current_Page, currentPage});
export const setTotalUsersCount=(totalUsersCount)=>({type:set_totalUsersCount, count: totalUsersCount})*/
export const setUserData =(userId,email,login)=>({type:set_user_data, data:{userId, email,login}})