"use strict";
import React from 'react';
import PropTypes from 'prop-types';
import  './MyPosts.css';
import {addPostAC} from './profile-reducer';
import {updateNewPostTextAC}  from './profile-reducer';
import MyPosts from './MyPosts';
//import {events} from './events';
import {connect} from 'react-redux';

let mapStateToProps =(state)=>{
  return {
    data:state.postData.data,
    newPostText:state.postData.newPostText
  }
  }
  
  
const MyPostsContainer = connect(mapStateToProps ,{ updateNewPostTextAC, addPostAC })(MyPosts);
export default MyPostsContainer;
