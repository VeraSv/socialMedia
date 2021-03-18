"use strict";
import React from 'react';
import PropTypes from 'prop-types';

import Users from './Users';
//import {events} from './events';
import {connect} from 'react-redux';
import { followActionCreator } from './users-reducer';
import { unfollowActionCreator } from './users-reducer';
import { setUsersAc} from './users-reducer';
import {setCurrentPageAC} from './users-reducer';
import {setUsersTotalCountAC} from './users-reducer'


let mapStateToProps =(state)=>{
  return {
   users:state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currentPage:state.usersPage.currentPage,
   
  }
  }
  
  let mapDispatchToProps =(dispatch)=>{
  return {
    followed:(userId)=>{dispatch(followActionCreator(userId))},
    unfollowed:(userId)=>{dispatch(unfollowActionCreator(userId))},
    setUsersAc: (users)=>{dispatch(setUsersAc(users))},
    setCurrentPage:(pageNumber)=>{dispatch(setCurrentPageAC(pageNumber))},
    setTotalUsersCount:(totalCount)=>{
      dispatch(setUsersTotalCountAC(totalCount))
    }
  }
  }

const UsersContainer = connect(mapStateToProps ,mapDispatchToProps)(Users);



export default UsersContainer;
