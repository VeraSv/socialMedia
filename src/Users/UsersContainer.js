import Users from './Users';
import {connect} from 'react-redux';
import { followed, setIsFetching, unfollowed,setUsersAc, setCurrentPage,setTotalUsersCount,toggleFollowingProgress, getUsersThunkCreator,
unfollowThunk, followThunk } from './users-reducer';

let mapStateToProps =(state)=>{
  return {
   users:state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currentPage:state.usersPage.currentPage,
    isFetching:state.usersPage.isFetching,
    followingProgress:state.usersPage.followingProgress
  }
}

const UsersContainer = connect(mapStateToProps ,
  {followed, unfollowed, setUsersAc, setCurrentPage, setTotalUsersCount, setIsFetching, getUsersThunkCreator, toggleFollowingProgress,
  unfollowThunk, followThunk})(Users);

export default UsersContainer;
