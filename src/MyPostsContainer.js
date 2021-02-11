"use strict";
import React from 'react';
import PropTypes from 'prop-types';
import  './MyPosts.css';
import {addPostActionCreator} from './profile-reducer';
import {updateNewPostTextActionCreator}  from './profile-reducer';
import MyPosts from './MyPosts';
//import {events} from './events';
import {connect} from 'react-redux';




let mapStateToProps =(state)=>{
  return {
    data:state.postData.data,
    newPostText:state.postData.newPostText
  }
  }
  
  let mapDispatchToProps =(dispatch)=>{
  return {
    updateNewPostText:(text)=>{
      dispatch(updateNewPostTextActionCreator(text))
    },
    addPost:()=>{
      dispatch(addPostActionCreator())
    }
  }
  }

const MyPostsContainer = connect(mapStateToProps ,mapDispatchToProps)(MyPosts);



export default MyPostsContainer;
