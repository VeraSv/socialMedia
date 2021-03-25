"use strict";
import React from 'react';
import PropTypes from 'prop-types';

import Users from './Users';
//import {events} from './events';
import {connect} from 'react-redux';
import { followed, setIsFetching} from './users-reducer';
import { unfollowed} from './users-reducer';
import { setUsersAc} from './users-reducer';
import {setCurrentPage} from './users-reducer';
import {setTotalUsersCount} from './users-reducer'



let mapStateToProps =(state)=>{
  return {
   users:state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currentPage:state.usersPage.currentPage,
    isFetching:state.usersPage.isFetching
   
  }
  }
  

const UsersContainer = connect(mapStateToProps ,
  {followed, unfollowed, setUsersAc, setCurrentPage, setTotalUsersCount, setIsFetching})(Users);

export default UsersContainer;
