import React from 'react';
import PropTypes from 'prop-types';
import './Profile.module.css';
import MyPosts from './MyPosts';
import {events} from './events';
import ProfileInfo from './ProfileInfo';
class Profile extends React.PureComponent {
   
       render(){
      
          return(   <div >
         <ProfileInfo />
           <MyPosts />
           <div></div>
           <div></div>
           <div></div>
          </div>)
        
       }
    }
    export default Profile