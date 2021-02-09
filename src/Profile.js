"use strict";
import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
import MyPostsContainer from './MyPostsContainer';
//import {events} from './events';
import ProfileInfo from './ProfileInfo';
class Profile extends React.PureComponent {
   /*static propTypes={
      postData:PropTypes.object,
      dispatch:PropTypes.func
     
   }*/
       render(){
    
          return(   <div >
         <ProfileInfo />
           <MyPostsContainer  />
           
          </div>)
        
       }
    }
    export default Profile