"use strict";
import React from 'react';
import PropTypes from 'prop-types';

import Users from './Users';
//import {events} from './events';
import {connect} from 'react-redux';
import { followActionCreator } from './users-reducer';
import { unfollowActionCreator } from './users-reducer';
import { setUsersAc} from './users-reducer';


let mapStateToProps =(state)=>{
  return {
   users:state.usersPage.users,
    
  }
  }
  
  let mapDispatchToProps =(dispatch)=>{
  return {
    followed:(userId)=>{dispatch(followActionCreator(userId))},
    unfollowed:(userId)=>{dispatch(unfollowActionCreator(userId))},
    setUsersAc: (users)=>{dispatch(setUsersAc(users))}
  }
  }

const UsersContainer = connect(mapStateToProps ,mapDispatchToProps)(Users);



export default UsersContainer;
