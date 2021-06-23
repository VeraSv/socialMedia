import Users from './Users';
import {connect} from 'react-redux';
import { followed, setIsFetching, unfollowed,setUsersAc, setCurrentPage,setTotalUsersCount,toggleFollowingProgress, getUsersThunkCreator,
unfollowThunk, followThunk } from './users-reducer';
import {withAuthRedirect} from '../hoc/withAuthRedirect'
import { compose } from 'redux';
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingProgress} from './user-selectors'
/*let mapStateToProps =(state)=>{
  return {
   users:state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currentPage:state.usersPage.currentPage,
    isFetching:state.usersPage.isFetching,
    followingProgress:state.usersPage.followingProgress
  }
}*/

let mapStateToProps =(state)=>{
  return {
   users:getUsers(state),
    pageSize:getPageSize(state),
    totalUsersCount:getTotalUsersCount(state),
    currentPage:getCurrentPage(state),
    isFetching:getIsFetching(state),
    followingProgress:getFollowingProgress(state)
  }
}

  export default compose(connect(mapStateToProps ,
    {followed, unfollowed, setUsersAc, setCurrentPage, setTotalUsersCount, setIsFetching, getUsersThunkCreator, toggleFollowingProgress,
    unfollowThunk, followThunk}))(Users)

